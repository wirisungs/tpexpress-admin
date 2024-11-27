"use client";
import React, { useEffect, useState } from "react";
import "@/components/CommonComponents/Buttons/Button";
import Navbar from "@/components/CommonComponents/Layout/Navbar";
import SortIC from "@/Svg/sortIC";
import WarehouseIC from "@/Svg/warehouseIC";
import SuccessIC from "@/Svg/success";
import FlagIC from "@/Svg/flagIC";
import OrderIC from "@/Svg/orderIC";
import ShippingIC from "@/Svg/shippingIC";
import "@/Style/MTri/TableSetupOrder.css";
import "@/Style/MTri/Loading.css";

import {
  InputDatePicker,
  InputWithIcon,
} from "@/components/CommonComponents/Inputs/Inputs";
import CommonSpecifications from "@/components/DashboardComponents/CommonSpecifications";
import { useRouter } from "next/navigation";
import useFetch from "@/hooks/useFetch";

const formatDong = (price: number | undefined) => {
  if (price === undefined || isNaN(price)) {
    return "N/A"; // hoặc giá trị mặc định nào đó
  }

  const formattedPrice = price.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });
  return formattedPrice;
};

interface OrderType {
  orderId: string;
  paymentId: string;
  senderAddress: string;
  receiverPhone: string;
  receiverName: string;
  receiverAddress: string;
  orderIsFragile: boolean;
  orderNote: string;
  orderCOD: number;
  deliverPrice: number;
  orderType: "Nội thành" | "Ngoại thành"; // Giới hạn giá trị
  proofSuccess: string;
  reasonFailed: string;
  totalPrice: number;
  createdDate: Date;
  customerDetails: CustomerDetails;
  driverDetails: DriverDetails;
  deliveryStatus: DeliveryStatus;
  deliveryServices: DeliveryServices;
}
interface CustomerDetails {
  cusId: string;
  cusName: string;
  cusEmail: string;
}

interface DriverDetails {
  driverId: string;
  driverName: string;
}

interface DeliveryStatus {
  statusId: string;
  statusName: string;
}

interface DeliveryServices {
  dservicesId: string;
  dservicesName: string;
  dservicesPrice: number;
  dservicesTime: string;
}

interface OrderStatusCount {
  Pending: number;
  Delivering: number;
  Success: number;
  Canceled: number;
}

const OrderPage = () => {
  const router = useRouter();
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [orderByStatus, setOrderByStatus] = useState<OrderStatusCount>({
    Pending: 0,
    Delivering: 0,
    Success: 0,
    Canceled: 0,
  });
  const [warning, setWarning] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const { data, fetchData } = useFetch(`http://localhost:5000/api/order/count`);
  const handleClick = (orderId: string) => {
    router.push(`/order/orderdetails?id=${orderId}`);
  };
  // Fetch lấy số đơn theo trạng thái
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  useEffect(() => {
    if (data) {
      setOrderByStatus(data);
    }
  }, [data]);

  // Fetch lấy danh sách đơn
  const fetchData2 = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/order/", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Network not ok");
      }

      const result = await response.json();
      if (!result || result.length === 0) {
        setWarning(result.message);
        return;
      }
      setOrders(result);
      // console.log(orders);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData2();
  }, []);

  // Hàm định dạng ngày giờ

  const formatDate = (datetime: Date) => {
    const date = new Date(datetime);
    console.log(datetime);
    const formattedDate = `${date.getDate().toString().padStart(2, "0")}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`;

    console.log(formattedDate);
    return formattedDate;
  };

  // Sort
  const [sortState, setSortState] = useState<{
    sender: boolean;
    receiver: boolean;
    address: boolean;
    driver: boolean;
    status: boolean;
    price: boolean;
  }>({
    sender: false,
    receiver: false,
    address: false,
    driver: false,
    status: false,
    price: false,
  });

  const sortOrder = (
    key: "sender" | "receiver" | "address" | "driver" | "status" | "price"
  ) => {
    const sortedDrivers = [...orders].sort(
      (a: OrderType, b: OrderType): number => {
        let comparison = 0;

        switch (key) {
          case "sender":
            comparison = a.customerDetails.cusName.localeCompare(
              b.customerDetails.cusName
            );
            return sortState.sender ? -comparison : comparison;
          case "receiver":
            comparison = a.receiverName.localeCompare(b.receiverName);
            return sortState.receiver ? -comparison : comparison;
          case "address":
            comparison = a.receiverAddress.localeCompare(b.receiverAddress);
            return sortState.address ? -comparison : comparison;
          case "driver":
            comparison = a.driverDetails.driverName.localeCompare(
              b.driverDetails.driverName
            );
            return sortState.driver ? -comparison : comparison;
          case "status":
            comparison = a.deliveryStatus.statusId.localeCompare(
              b.deliveryStatus.statusId
            );
            return sortState.status ? -comparison : comparison;
          case "price":
            comparison = a.deliverPrice - b.deliverPrice;
            return sortState.price ? -comparison : comparison;
          default:
            return 0;
        }
      }
    );

    setOrders(sortedDrivers);
    setSortState((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="all">
      <Navbar>
        <div className="right h-full flex flex-col gap-4 justify-start items-start">
          <div className="inputright w-[342px]">
            <InputWithIcon
              purpose="search"
              placeholder="Nhập mã đơn hàng để tìm"
              background={true}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              pageOfAPI="orderDetails"
            />
          </div>
          <div className="flex flex-row w-full justify-between gap-6">
            <CommonSpecifications
              fluctuationType="none"
              color="#FBECDA"
              quantity={
                orderByStatus.Delivering +
                orderByStatus.Canceled +
                orderByStatus.Pending +
                orderByStatus.Success
              }
              subtitle="Tổng đơn hàng"
              icon={<WarehouseIC fill="#FBA333" />}
            />
            <CommonSpecifications
              fluctuationType="none"
              color="#FDF7B9"
              quantity={orderByStatus.Pending}
              subtitle="Đơn đang chờ giao"
              icon={<OrderIC stroke="#F1E01D" />}
            />
            <CommonSpecifications
              fluctuationType="none"
              color="#B8DDFF"
              quantity={orderByStatus.Delivering}
              subtitle="Đơn đang giao"
              icon={<ShippingIC stroke="#007AFF" />}
            />
            <CommonSpecifications
              fluctuationType="none"
              color="#FFB5C0"
              quantity={orderByStatus.Canceled}
              subtitle="Đơn đã hủy"
              icon={<FlagIC fill="#EB455F" />}
            />
            <CommonSpecifications
              fluctuationType="none"
              color="#81E7A5"
              quantity={orderByStatus.Success}
              subtitle="Đơn đã giao"
              icon={<SuccessIC fill="#0DA651" />}
            />
          </div>

          {/* List đơn hàng */}
          <div className="flex flex-col h-full overflow-hidden">
            <div className="note-container">
              <p className="note">
                Ghi chú: Ấn vào đơn hàng bất kì để xem hoặc thay đổi thông tin
              </p>
            </div>
            <div className="table-container flex-1 h-full">
              <table className="orderTable min-w-full bg-white table-fixed rounded-md">
                {/* Title từng cột */}
                <thead className="shadow-sm">
                  <tr>
                    <th className="h-[42px] break-words p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full w-full justify-end">
                        <p>STT</p>
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Mã đơn</p>
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Người gửi</p>
                        <button
                          type="button"
                          onClick={() => sortOrder("sender")}
                        >
                          <SortIC />
                        </button>
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Người nhận</p>
                        <button
                          type="button"
                          onClick={() => sortOrder("receiver")}
                        >
                          <SortIC />
                        </button>
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Địa chỉ giao</p>
                        <button
                          type="button"
                          onClick={() => sortOrder("address")}
                        >
                          <SortIC />
                        </button>
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Ngày đặt</p>
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Tài xế</p>
                        <button
                          type="button"
                          onClick={() => sortOrder("driver")}
                        >
                          <SortIC />
                        </button>
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Trạng thái</p>
                        <button
                          type="button"
                          onClick={() => sortOrder("status")}
                        >
                          <SortIC />
                        </button>
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Tiền vận chuyển</p>
                        <button
                          type="button"
                          onClick={() => sortOrder("price")}
                        >
                          <SortIC />
                        </button>
                      </div>
                    </th>
                  </tr>
                </thead>
                {isLoading ? (
                  <div className="spinner-container">
                    <div className="spinner"></div>
                    <p className="text-base font-bold text-navbarText">
                      Đang tải dữ liệu...
                    </p>
                  </div>
                ) : warning ? (
                  <div className="w-full flex items-center justify-center">
                    <p className="mt-6 text-yellowText">{warning}</p>
                  </div>
                ) : (
                  <tbody className="h-full">
                    {orders.map((order, index) => (
                      <tr
                        key={index}
                        onClick={() => handleClick(order.orderId)}
                      >
                        <td className="h-[42px] break-words p-3 text-left truncate">
                          <div className="flex flex-row gap-[6px] items-center h-full w-full justify-end">
                            <p>{index + 1}</p>
                          </div>
                        </td>
                        <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                          <div className="flex flex-row gap-[6px] items-center h-full">
                            <p>{order.orderId}</p>
                          </div>
                        </td>
                        <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                          <div className="flex flex-row gap-[6px] items-center h-full">
                            <p>{order.customerDetails.cusName}</p>
                          </div>
                        </td>
                        <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                          <div className="flex flex-row gap-[6px] items-center h-full">
                            <p>{order.receiverName}</p>
                          </div>
                        </td>
                        <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                          <div className="flex flex-row gap-[6px] items-center h-full overflow-hidden text-ellipsis">
                            <p>{order.receiverAddress}</p>
                          </div>
                        </td>
                        <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                          <div className="flex flex-row gap-[6px] items-center h-full">
                            <p>{formatDate(order.createdDate)}</p>
                          </div>
                        </td>
                        <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                          <div className="flex flex-row gap-[6px] items-center h-full">
                            <p>
                              {order.driverDetails
                                ? order.driverDetails.driverName
                                : "---"}
                            </p>
                          </div>
                        </td>
                        <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                          <div className="flex flex-row gap-[6px] items-center h-full">
                            <p
                              style={{
                                color: `${
                                  order.deliveryStatus.statusId === "ST001"
                                    ? "#F1E01D"
                                    : order.deliveryStatus.statusId === "ST002"
                                    ? "#007AFF"
                                    : order.deliveryStatus.statusId === "ST003"
                                    ? "#0DA651"
                                    : "#F61317"
                                }`,
                              }}
                              className="w-full overflow-hidden text-ellipsis whitespace-nowrap"
                            >
                              {order.deliveryStatus.statusName}
                            </p>
                          </div>
                        </td>
                        <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                          <div className="flex flex-row gap-[6px] items-center h-full ">
                            <p className="w-full text-start">
                              {formatDong(order ? order.deliverPrice : 0)}
                            </p>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default OrderPage;

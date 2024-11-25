"use client";
import React, { useEffect, useState } from "react";
import "@/components/CommonComponents/Buttons/Button";
import Navbar from "@/components/CommonComponents/Layout/Navbar";
import SortIC from "@/Svg/sortIC";
import WarehouseIC from "@/Svg/warehouseIC";
import BuildingIC from "@/Svg/buildingIC";
import FlagIC from "@/Svg/flagIC";
import OrderIC from "@/Svg/orderIC";
import "@/Style/MTri/TableSetupOrder.css";
import "@/Style/MTri/Loading.css";

import { InputDatePicker } from "@/components/CommonComponents/Inputs/Inputs";
import CommonSpecifications from "@/components/DashboardComponents/CommonSpecifications";

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

const OrderPage = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [warning, setWarning] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fetchData = async () => {
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
    fetchData();
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

  return (
    <div className="all">
      <Navbar>
        <div className="right h-full flex flex-col gap-4 justify-start items-start">
          <div className="w-[168px]">
            <InputDatePicker background={true} border={false} />
          </div>
          <div className="flex flex-row w-full justify-between gap-6">
            <CommonSpecifications
              fluctuationType="none"
              color="#FBECDA"
              quantity={12}
              subtitle="Đơn trong kho"
              icon={<WarehouseIC fill="#FBA333" />}
            />
            <CommonSpecifications
              fluctuationType="none"
              color="#FDF7B9"
              quantity={56}
              subtitle="Đơn đang giao"
              icon={<OrderIC stroke="#F1E01D" />}
            />
            <CommonSpecifications
              fluctuationType="none"
              color="#B8DDFF"
              quantity={37}
              subtitle="Đơn thành phố"
              icon={<BuildingIC fill="#007AFF" />}
            />
            <CommonSpecifications
              fluctuationType="none"
              color="#9DEEB9"
              quantity={2}
              subtitle="Đơn ngoại thành"
              icon={<FlagIC fill="#0DA651" />}
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
                        <div className="Sort">
                          <SortIC />
                        </div>
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Người gửi</p>
                        <SortIC />
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Người nhận</p>
                        <SortIC />
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Địa chỉ giao</p>
                        <SortIC />
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Ngày đặt</p>
                        <SortIC />
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Tài xế</p>
                        <SortIC />
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Trạng thái</p>
                        <SortIC />
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Tiền vận chuyển</p>
                        <SortIC />
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
                      <tr key={index}>
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

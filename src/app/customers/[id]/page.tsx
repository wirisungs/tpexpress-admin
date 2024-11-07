"use client";
import Navbar from "@/components/CommonComponents/Layout/Navbar";
import React, { useEffect, useState } from "react";
import TitleBar from "@/components/CommonComponents/Layout/bars/TitleBar";
import EditIC from "@/Svg/editIC";
import { usePathname } from "next/navigation";
import "@/Style/MTri/Loading.css";
import "@/Style/MTri/TableSetupOrderCus.css";

import SortIC from "@/Svg/sortIC";
type customerType = {
  cusId: string;
  cusName: string;
  cusEmail: string;
  cusPhone: number;
  cusAddress: string;
  cusGender: number;
  cusBirthday: string;
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

type CSKHType = {
  Request_ID: string;
  Cus_ID: string;
  Order_ID: string;
  Driver_ID: string;
  Request_Picture: string;
  Request_Status: string;
  Request_Date: string;
  Request_Type: string;
};
const CusDetails = () => {
  const pathName = usePathname();
  const id = pathName.split("/").pop();
  const [customer, setCustomer] = useState<customerType | null>(null);
  const [requests, setRequests] = useState<CSKHType[]>([]);
  const [tab, setTab] = useState<string>("LSD"); // LSD: Lịch sử đơn, LSYC: Lịch sử yêu cầu
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [warning, setWarning] = useState<string>("");

  const handleClick = (tabName: string) => {
    setTab(tabName);
  };
  useEffect(() => {
    const fetchCustomer = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://localhost:5000/api/customer/${id}`
        );
        if (!response.ok) {
          throw new Error("Customer not found");
        }
        const result = await response.json();
        setCustomer(result);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchCustomer();
    }
  }, [id]);
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [cancelCounter, setCancelCounter] = useState<number>(0);

  // Lấy order list
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/order/${id}`, {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Network not ok");
        }

        const result = await response.json();
        setOrders(result);
        // console.log(orders);

        const cancelOrderCount = result.filter(
          (order: OrderType) => order.deliveryStatus.statusId === "ST004"
        ).length;
        setCancelCounter(cancelOrderCount);
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      fetchOrder();
    }
  }, [id]);

  // Lấy requests list
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`http://localhost:5000/api/request/${id}`);
        if (!response.ok) {
          throw new Error("Network not ok");
        }
        const result = await response.json();
        if (result.message) {
          setWarning(result.message);
        } else {
          setRequests(result);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchRequests();
  }, [id]);

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
    <div className="flex ">
      <Navbar>
        <div className="body flex flex-col gap-6 h-full">
          <TitleBar text="Chi tiết khách hàng" />

          {isLoading ? (
            <div className="spinner-container">
              <div className="spinner"></div>
              <p className="text-base font-bold text-navbarText">
                Đang tải dữ liệu...
              </p>
            </div>
          ) : (
            // Customer details
            <div className="detailBox flex flex-col h-full">
              <div className="boxHeader flex flex-row">
                <div className="basicDetail flex flex-row bg-white w-full p-6 rounded-md gap-4 ">
                  <div className="detail flex flex-row flex-1 gap-4">
                    <div className="profileAvt w-[116px] h-[116px] rounded-full bg-slate-300" />
                    <div className="flex flex-col justify-center gap-1">
                      <p className="Name font-bold text-base">
                        {customer ? customer.cusName : ""}
                      </p>
                      <div className="textIcon flex flex-row items-center justify-between gap-3">
                        <p className="Gmail text-xs text-navbarText">
                          {customer ? customer.cusEmail : ""}
                        </p>
                        <EditIC width={16} height={16} stroke={"#007AFF"} />
                      </div>
                      <div className="textIcon flex flex-row items-center justify-between gap-3">
                        <p className="Sdt text-xs text-navbarText">
                          0383478483
                        </p>
                        <EditIC width={16} height={16} stroke={"#007AFF"} />
                      </div>
                      <div className="textIcon flex flex-row items-center justify-between gap-3">
                        <p className="Address text-xs text-navbarText text-wrap">
                          {customer ? customer.cusAddress : ""}
                        </p>
                        <EditIC width={16} height={16} stroke={"#007AFF"} />
                      </div>
                    </div>
                  </div>

                  <div className="detail flex flex-row flex-1 gap-12 justify-center items-center">
                    <div className="senderCounterTitle flex flex-col items-center gap-3">
                      <p className="text-base text-navbarText font-bold">
                        Đơn gửi
                      </p>
                      <p className="senderCounter text-normalText font-bold text-sm">
                        {orders.length}
                      </p>
                    </div>
                    {/* <div className="receiverCounterTitle flex flex-col items-center gap-3">
                      <p className="text-base text-navbarText font-bold">
                        Đơn nhận
                      </p>
                      <p className="receiverCounter text-normalText font-bold text-sm">
                        3
                      </p>
                    </div> */}
                    <div className="cancelCounterTitle flex flex-col items-center gap-3">
                      <p className="text-base text-navbarText font-bold">
                        Đơn hủy
                      </p>
                      <p className="cancelCounter text-normalText font-bold text-sm">
                        {cancelCounter}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Body Box */}
              <div className="TableBody w-full h-full bg-white px-6 flex flex-col gap-4">
                <div className="choosenTab w-full flex flex-row gap-3 justify-center items-center">
                  <p
                    style={{
                      color: `${tab === "LSD" ? "#0DA651" : "#696969"}`,
                    }}
                    className="text-base font-bold cursor-pointer"
                    onClick={() => handleClick("LSD")}
                  >
                    Lịch sử đơn
                  </p>
                  <div className="devider w-[1px] h-6 bg-navbarText"></div>
                  <p
                    style={{
                      color: `${tab === "LSYC" ? "#0DA651" : "#696969"}`,
                    }}
                    className="text-base font-bold text-navbarText cursor-pointer"
                    onClick={() => handleClick("LSYC")}
                  >
                    Lịch sử yêu cầu
                  </p>
                </div>

                <div className="table-container">
                  {tab === "LSD" ? (
                    <table className="orderOfCusTable min-w-full bg-white table-fixed rounded-md">
                      {/* Title từng cột */}
                      <thead>
                        <tr>
                          <th className="h-[42px] break-words p-3 text-left truncate">
                            <div className="flex flex-row gap-[6px] items-center h-full w-full justify-end">
                              <p>STT</p>
                              <div className="Sort">
                                <SortIC />
                              </div>
                            </div>
                          </th>
                          <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                            <div className="flex flex-row gap-[6px] items-center h-full">
                              <p>Mã vận đơn</p>
                              <div className="Sort">
                                <SortIC />
                              </div>
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
                              <p>Người nhận / gửi</p>
                              <SortIC />
                            </div>
                          </th>
                          <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                            <div className="flex flex-row gap-[6px] items-center h-full">
                              <p>Số điện thoại</p>
                              <SortIC />
                            </div>
                          </th>
                          <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                            <div className="flex flex-row gap-[6px] items-center h-full">
                              <p>Ngày lên đơn</p>
                              <SortIC />
                            </div>
                          </th>
                          <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                            <div className="flex flex-row gap-[6px] items-center h-full">
                              <p>Địa chỉ</p>
                              <SortIC />
                            </div>
                          </th>
                          <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                            <div className="flex flex-row gap-[6px] items-center h-full">
                              <p>Trạng thái</p>
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
                      ) : (
                        <tbody>
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
                                  <p>
                                    {order.driverDetails
                                      ? order.driverDetails.driverName
                                      : "---"}
                                  </p>
                                </div>
                              </td>
                              <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                                <div className="flex flex-row gap-[6px] items-center h-full">
                                  <p>{order.receiverName}</p>
                                </div>
                              </td>
                              <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                                <div className="flex flex-row gap-[6px] items-center h-full">
                                  <p>{order.receiverPhone}</p>
                                </div>
                              </td>
                              <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                                <div className="flex flex-row gap-[6px] items-center h-full">
                                  <p>{formatDate(order.createdDate)}</p>
                                </div>
                              </td>
                              <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                                <div className="flex flex-row gap-[6px] items-center h-full overflow-hidden text-ellipsis">
                                  <p className="overflow-hidden text-ellipsis">
                                    {order.receiverAddress}
                                  </p>
                                </div>
                              </td>
                              <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                                <div className="flex flex-row gap-[6px] items-center h-full">
                                  <p
                                    style={{
                                      color: `${
                                        order.deliveryStatus.statusId ===
                                        "ST001"
                                          ? "#FBA333"
                                          : order.deliveryStatus.statusId ===
                                            "ST002"
                                          ? "#007AFF"
                                          : order.deliveryStatus.statusId ===
                                            "ST003"
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
                            </tr>
                          ))}
                        </tbody>
                      )}
                    </table>
                  ) : (
                    <table className="orderOfCusTable min-w-full bg-white table-fixed rounded-md">
                      {/* Title từng cột */}
                      <thead>
                        <tr>
                          <th className="h-[42px] break-words p-3 text-left truncate">
                            <div className="flex flex-row gap-[6px] items-center h-full w-full justify-end">
                              <p>STT</p>
                              <div className="Sort">
                                <SortIC />
                              </div>
                            </div>
                          </th>
                          <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                            <div className="flex flex-row gap-[6px] items-center h-full">
                              <p>Mã yêu cầu</p>
                              <div className="Sort">
                                <SortIC />
                              </div>
                            </div>
                          </th>
                          <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                            <div className="flex flex-row gap-[6px] items-center h-full">
                              <p>Mã đơn</p>
                              <SortIC />
                            </div>
                          </th>
                          <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                            <div className="flex flex-row gap-[6px] items-center h-full">
                              <p>Ngày yêu cầu</p>
                              <SortIC />
                            </div>
                          </th>
                          <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                            <div className="flex flex-row gap-[6px] items-center h-full">
                              <p>Loại yêu cầu</p>
                              <SortIC />
                            </div>
                          </th>
                          <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                            <div className="flex flex-row gap-[6px] items-center h-full">
                              <p>Đính kèm</p>
                              <SortIC />
                            </div>
                          </th>
                          <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                            <div className="flex flex-row gap-[6px] items-center h-full">
                              <p>Trạng thái</p>
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
                        <tbody>
                          {requests.map((request, index) => (
                            <tr key={index}>
                              <td className="h-[42px] break-words p-3 text-left truncate">
                                <div className="flex flex-row gap-[6px] items-center h-full w-full justify-end">
                                  <p>{index + 1}</p>
                                </div>
                              </td>
                              <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                                <div className="flex flex-row gap-[6px] items-center h-full">
                                  <p>{request.Request_ID}</p>
                                </div>
                              </td>
                              <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                                <div className="flex flex-row gap-[6px] items-center h-full">
                                  <p>{request.Order_ID}</p>
                                </div>
                              </td>
                              <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                                <div className="flex flex-row gap-[6px] items-center h-full">
                                  <p>{request.Request_Date}</p>
                                </div>
                              </td>
                              <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                                <div className="flex flex-row gap-[6px] items-center h-full">
                                  <p>
                                    {request.Request_Type === "HBV"
                                      ? "Hàng bị vỡ"
                                      : request.Request_Type === "HBL"
                                      ? "Hàng bị lạc"
                                      : request.Request_Type === "HCG"
                                      ? "Hàng chưa giao"
                                      : "Chưa nhận được tiền"}
                                  </p>
                                </div>
                              </td>
                              <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                                <div className="flex flex-row gap-[6px] items-center h-full">
                                  <p>{request.Request_Picture}</p>
                                </div>
                              </td>
                              <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                                <div className="flex flex-row gap-[6px] items-center h-full overflow-hidden text-ellipsis">
                                  <p className="overflow-hidden text-ellipsis">
                                    {request.Request_Status}
                                  </p>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      )}
                    </table>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </Navbar>
    </div>
  );
};

export default CusDetails;

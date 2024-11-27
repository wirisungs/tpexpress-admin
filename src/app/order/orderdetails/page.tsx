"use client";
import InfoBox from "@/components/CommonComponents/Box/InfoBox";
import TitleBar from "@/components/CommonComponents/Layout/bars/TitleBar";
import Navbar from "@/components/CommonComponents/Layout/Navbar";
import ItemsBox from "@/components/CommonComponents/OrderDetails/ItemsBox";
import useFetch from "@/hooks/useFetch";
import React, { useEffect, useState } from "react";
import OrderIC from "@/Svg/orderFill";
import ShippingIC from "@/Svg/homeIC";
import HomeIC from "@/Svg/shippingIC";
import {
  FastService,
  RocketService,
  SavingService,
  TPhucService,
} from "@/components/OrderComponents/DeliService";
import { useSearchParams } from "next/navigation";

interface Order {
  orderId: string;
  cusId: string;
  senderAddress: string;
  receiverPhone: string;
  receiverName: string;
  receiverAddress: string;
  orderType: string;
  orderIsFragile: boolean;
  orderNote: string;
  orderCOD: number;
  dservicesId: string;
  totalPrice: number;
  paymentId: string;
  orderStatusId: string;
  driverId: string | null;
  createdDate: Date | null;
  deliverPrice: number;
  proofSuccess: string | null;
  reasonFailed: string | null;
  items: OrderItem[];
  customerDetails: CustomerDetails | null;
  driverDetails: DriverDetails | null;
}

interface OrderItem {
  Item_ID: string;
  Item_Name: string;
  Item_Weight: number;
  Item_AllValue: number;
  Order_ID: string;
}
interface CustomerDetails {
  cusId: string;
  cusName: string;
  cusEmail: string;
  cusPhone: string;
}

interface DriverDetails {
  driverName: string;
  driverPhone: string;
}

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
const formatDate = (datetime: Date | null) => {
  if (datetime !== null) {
    const date = new Date(datetime);
    console.log(datetime);
    const formattedDate = `${date.getDate().toString().padStart(2, "0")}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`;

    console.log(formattedDate);
    return formattedDate;
  } else return;
};

const OrderDetails = () => {
  const [order, setOrder] = useState<Order>({
    orderId: "",
    cusId: "",
    senderAddress: "",
    receiverPhone: "",
    receiverName: "",
    receiverAddress: "",
    orderType: "",
    orderIsFragile: false,
    orderNote: "",
    orderCOD: 0,
    dservicesId: "",
    totalPrice: 0,
    paymentId: "",
    orderStatusId: "",
    driverId: "",
    createdDate: null,
    deliverPrice: 0,
    proofSuccess: "",
    reasonFailed: "",
    items: [],
    customerDetails: null,
    driverDetails: null,
  });
  const searchParams = useSearchParams();
  const id = searchParams.get("id")?.replace(/'/g, "");
  const { data, loading, error, fetchData } = useFetch(
    `http://localhost:5000/api/order/orderDetails?id=${id}`
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (data) {
      setOrder(data);
    }
  }, [data]);

  // Get delivery service
  const getDService = (dservice: string) => {
    switch (dservice) {
      case "S001":
        return <SavingService />;
      case "S002":
        return <FastService />;
      case "S003":
        return <RocketService />;
      case "S004":
        return <TPhucService />;
    }
  };
  return (
    <div className="flex h-[100vh]">
      <Navbar>
        <div className="no-scrollbar body flex flex-col gap-6 h-full overflow-y-auto">
          <TitleBar text="Chi tiết đơn hàng" />
          {/* Lấy dữ liệu chi tiết */}
          {loading ? (
            <div className="spinner-container">
              <div className="spinner"></div>
              <p className="text-base font-bold text-navbarText">
                Đang tải dữ liệu...
              </p>
            </div>
          ) : (
            // driver details
            <div className="w-full h-fit flex flex-row gap-6 items-stretch pb-3">
              <div className="flex flex-col w-[70%] gap-6">
                <div className="w-full bg-white p-6 text-xl font-bold rounded-md shadow-sm">
                  <p>
                    Đơn hàng{" "}
                    <span className="text-primaryText300">
                      #{order.orderId}
                    </span>
                  </p>
                </div>
                {/* Thẻ người đặt đơn */}
                <div className="w-full flex flex-col bg-white p-6 rounded-md gap-6 shadow-sm">
                  <p className="text-xl font-bold text-normalText">Người gửi</p>
                  <div className="w-full flex flex-col gap-3">
                    <div className="flex flex-row gap-3">
                      <div className="flex flex-col gap-3 w-full">
                        <div className="w-full">
                          <InfoBox label="Mã người gửi" content={order.cusId} />
                        </div>
                        <div className="w-full">
                          <InfoBox
                            label="Tên người gửi"
                            content={
                              order.customerDetails
                                ? order.customerDetails.cusName
                                : "Loading"
                            }
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 w-full">
                        <InfoBox
                          label="Số điện thoại"
                          content={
                            order.customerDetails
                              ? order.customerDetails.cusPhone
                              : "Loading"
                          }
                        />
                        <InfoBox
                          label="Email"
                          content={
                            order.customerDetails
                              ? order.customerDetails.cusEmail
                              : "Loading"
                          }
                        />
                      </div>
                    </div>
                    <div className="flex w-full">
                      <InfoBox label="Nơi gửi" content={order.senderAddress} />
                    </div>
                  </div>
                </div>

                {/* Thẻ người nhận hàng */}
                <div className="w-full flex flex-col bg-white p-6 rounded-md gap-6 shadow-sm">
                  <p className="text-xl font-bold text-normalText">
                    Người nhận
                  </p>
                  <div className="w-full flex flex-col gap-3">
                    <div className="flex flex-row gap-3">
                      <div className="flex flex-col gap-3 w-full">
                        <div className="w-full">
                          <InfoBox
                            label="Tên người nhận"
                            content={order.receiverName}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 w-full">
                        <InfoBox
                          label="Số điện thoại"
                          content={order.receiverPhone}
                        />
                      </div>
                    </div>
                    <div className="flex w-full">
                      <InfoBox
                        label="Nơi nhận"
                        content={order.receiverAddress}
                      />
                    </div>
                  </div>
                </div>
                {/* Chi tiết đơn */}
                <div className="w-full min-h-96 flex flex-col bg-white p-6 rounded-md gap-6 shadow-sm">
                  <p className="text-xl font-bold text-normalText">
                    Chi tiết đơn hàng
                  </p>
                  <div className="w-full flex flex-col gap-3">
                    <div className="flex flex-row w-full justify-between">
                      <p className="text-xs text-normalText">Ngày lên đơn:</p>
                      <p className="text-xs text-normalText">
                        {formatDate(order.createdDate)}
                      </p>
                    </div>
                    <div className="flex flex-row w-full justify-between">
                      <p className="text-xs text-normalText">Thu hộ (COD):</p>
                      <p className="text-xs text-normalText">
                        {order.orderCOD === 0 ? "Không" : "Có"}
                      </p>
                    </div>
                    <div className="flex flex-row w-full justify-between">
                      <p className="text-xs text-normalText">Dễ vỡ:</p>
                      <p className="text-xs text-normalText">
                        {order.orderIsFragile ? "Có" : "Không"}
                      </p>
                    </div>
                  </div>
                  <div className="no-scrollbar flex flex-col gap-4 h-full overflow-y-auto">
                    {order.items.map((item, index) => (
                      <div key={item.Item_ID || index} className="order-item">
                        <ItemsBox
                          itemName={item.Item_Name}
                          itemWeight={item.Item_Weight.$numberDecimal.toString()}
                          itemValue={formatDong(item.Item_AllValue)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-[30%] h-full flex flex-col gap-6">
                {/* Thẻ trạng thái vận chuyển */}
                <div className="w-full flex flex-col bg-white p-6 rounded-md gap-6 shadow-sm">
                  <p className="text-xl font-bold text-normalText">
                    Thông tin vận chuyển
                  </p>
                  <div className="w-full flex flex-col gap-3">
                    <p className="text-base font-bold text-normalText">
                      Dịch vụ
                    </p>
                    {getDService(order.dservicesId)}
                  </div>
                  <div className="w-full flex flex-col gap-3">
                    <p className="text-base font-bold text-normalText">
                      Quá trình vận chuyển
                    </p>
                    <div className="flex flex-row justify-between gap-2">
                      <div className="flex items-center flex-col gap-2">
                        <OrderIC
                          fill={
                            order.orderStatusId === "ST001" ||
                            order.orderStatusId === "ST002" ||
                            order.orderStatusId === "ST003"
                              ? "#2FA087"
                              : "#696969"
                          }
                        />
                        <p
                          style={{
                            color: `${
                              order.orderStatusId === "ST001" ||
                              order.orderStatusId === "ST002" ||
                              order.orderStatusId === "ST003"
                                ? "#2FA087"
                                : "#696969"
                            }`,
                          }}
                          className="text-xs text-normalText text-center"
                        >
                          Chờ
                          <br />
                          vận chuyển
                        </p>
                      </div>
                      {order.orderStatusId === "ST001" ? (
                        <div className="loading-bar-container mt-3">
                          <div className="loading-bar"></div>
                        </div>
                      ) : (
                        order.orderStatusId !== "ST001" &&
                        order.orderStatusId !== "ST004" && (
                          <div className="loading-bar-container mt-3">
                            <div className="loading-bar-success"></div>
                          </div>
                        )
                      )}
                      <div className="flex items-center flex-col gap-2">
                        <ShippingIC
                          fill={
                            order.orderStatusId === "ST002" ||
                            order.orderStatusId === "ST003"
                              ? "#2FA087"
                              : "#696969"
                          }
                        />
                        <p
                          style={{
                            color: `${
                              order.orderStatusId === "ST002" ||
                              order.orderStatusId === "ST003"
                                ? "#2FA087"
                                : "#696969"
                            }`,
                          }}
                          className="text-xs text-normalText text-center"
                        >
                          Đang
                          <br />
                          vận chuyển
                        </p>
                      </div>
                      {order.orderStatusId === "ST001" ? (
                        <div className="loading-bar-container mt-3">
                          <div className="loading-bar-notyet"></div>
                        </div>
                      ) : order.orderStatusId === "ST002" ? (
                        <div className="loading-bar-container mt-3">
                          <div className="loading-bar"></div>
                        </div>
                      ) : (
                        <div className="loading-bar-container mt-3">
                          <div className="loading-bar-success"></div>
                        </div>
                      )}
                      <div className="flex items-center flex-col gap-2">
                        <HomeIC
                          fill={
                            order.orderStatusId === "ST003"
                              ? "#2FA087"
                              : "#696969"
                          }
                        />
                        <p
                          style={{
                            color: `${
                              order.orderStatusId === "ST003"
                                ? "#2FA087"
                                : "#696969"
                            }`,
                          }}
                          className="text-xs text-normalText text-center"
                        >
                          Nhận hàng
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Thẻ tài xế */}
                <div className="w-full flex flex-col bg-white p-6 rounded-md gap-6 shadow-sm">
                  <p className="text-xl font-bold text-normalText">
                    Tài xế nhận đơn
                  </p>
                  <div className="w-full flex flex-col gap-3">
                    <div className="flex flex-row gap-3">
                      <div className="flex flex-col gap-3 w-full">
                        <div className="w-full">
                          <InfoBox
                            label="Mã tài xế"
                            content={
                              order.driverId
                                ? order.driverId
                                : "Chưa có tài nhận đơn"
                            }
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 w-full">
                        <InfoBox
                          label="Số điện thoại"
                          content={
                            order.driverDetails
                              ? order.driverDetails.driverPhone
                              : "Chưa có tài nhận đơn"
                          }
                        />
                      </div>
                    </div>
                    <div className="flex w-full">
                      <InfoBox
                        label="Tên tài xế"
                        content={
                          order.driverDetails
                            ? order.driverDetails.driverName
                            : "Chưa có tài nhận đơn"
                        }
                      />
                    </div>
                  </div>
                </div>
                {/* Thẻ thông tin thanh toán */}
                <div className="w-full h-full flex flex-col bg-white p-6 rounded-md gap-6 shadow-sm">
                  <p className="text-xl font-bold text-normalText">
                    Thanh toán
                  </p>
                  <div className="w-full h-full flex flex-col justify-between">
                    <div className="flex flex-row gap-3">
                      <div className="flex flex-col gap-3 w-full">
                        <div className="w-full flex flex-row justify-between">
                          <p className="text-xs text-normalText">
                            Phương thức thanh toán:
                          </p>
                          <p className="text-xs text-normalText">
                            {order.paymentId === "P001"
                              ? "Thanh toán khi nhận hàng"
                              : "Thanh toán qua ví điện tử"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-col gap-3 w-full pb-3 border-solid border-b-[1px] border-boxOuline">
                        <div className="w-full flex flex-row justify-between">
                          <p className="text-xs text-normalText">
                            Phí vận chuyển:
                          </p>
                          <p className="text-xs text-normalText">
                            {formatDong(order.deliverPrice)}
                          </p>
                        </div>
                        <div className="w-full flex flex-row justify-between">
                          <p className="text-xs text-normalText">
                            Thu hộ (COD):
                          </p>
                          <p className="text-xs text-normalText">
                            {formatDong(order.orderCOD)}
                          </p>
                        </div>
                      </div>
                      <div className="w-full mt-3 flex flex-row justify-between">
                        <p className="text-xs text-normalText">Thàn tiền:</p>
                        <p className="text-xs text-success">
                          {formatDong(order.deliverPrice + order.orderCOD)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Navbar>
    </div>
  );
};

export default OrderDetails;

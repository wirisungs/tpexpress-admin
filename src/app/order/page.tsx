<<<<<<< Updated upstream
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";
import TrackCard from "@/components/OrderComponents/TrackCard";
=======
"use client";
import React, { useEffect, useState } from "react";
>>>>>>> Stashed changes
import TramCSS from "@/Style/Tram.module.css";
import "@/components/CommonComponents/Buttons/Button";
import Navbar from "@/components/CommonComponents/Layout/Navbar";
import SortIC from "@/Svg/sortIC";
import WarehouseIC from "@/Svg/warehouseIC";
import BuildingIC from "@/Svg/buildingIC";
import FlagIC from "@/Svg/flagIC";
<<<<<<< Updated upstream
import BoxIC from "@/Svg/boxIC";
import { InputWithIcon } from "@/components/CommonComponents/Inputs/Inputs";

function orderData(
  id: string,
  sender: string,
  sendorreceive: string,
  receiver: string,
  driver: string,
  date: string,
  status: string
) {
  return { id, receiver, sendorreceive, sender, driver, date, status };
=======
import OrderIC from "@/Svg/orderIC";
import "@/Style/MTri/TableSetupOrder.css";
import "@/Style/MTri/Loading.css";

import { InputDatePicker } from "@/components/CommonComponents/Inputs/Inputs";
import CommonSpecifications from "@/components/DashboardComponents/CommonSpecifications";

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
>>>>>>> Stashed changes
}
const Order = [
  orderData(
    "DH001",
    "Nguyễn Văn B",
    "Gửi",
    "Nguyễn Văn C",
    "Nguyễn Văn A",
    "24/08/2024",
    "Đang giao"
  ),
  orderData(
    "DH001",
    "Nguyễn Văn B",
    "Nhận",
    "Nguyễn Văn C",
    "----",
    "24/08/2024",
    "Tại kho"
  ),
  orderData(
    "DH001",
    "Nguyễn Văn B",
    "Gửi",
    "Nguyễn Văn C",
    "Nguyễn Văn A",
    "24/08/2024",
    "Đang giao"
  ),
  orderData(
    "DH001",
    "Nguyễn Văn B",
    "Gửi",
    "Nguyễn Văn C",
    "Nguyễn Văn A",
    "24/08/2024",
    "Đang giao"
  ),
  orderData(
    "DH001",
    "Nguyễn Văn B",
    "Gửi",
    "Nguyễn Văn C",
    "Nguyễn Văn A",
    "24/08/2024",
    "Đang giao"
  ),
  orderData(
    "DH001",
    "Nguyễn Văn B",
    "Nhận",
    "Nguyễn Văn C",
    "Nguyễn Văn A",
    "24/08/2024",
    "Đang giao"
  ),
  orderData(
    "DH001",
    "Nguyễn Văn B",
    "Nhận",
    "Nguyễn Văn C",
    "----",
    "24/08/2024",
    "Tại kho"
  ),
  orderData(
    "DH001",
    "Nguyễn Văn B",
    "Gửi",
    "Nguyễn Văn C",
    "Nguyễn Văn A",
    "24/08/2024",
    "Đang giao"
  ),
  orderData(
    "DH001",
    "Nguyễn Văn B",
    "Gửi",
    "Nguyễn Văn C",
    "----",
    "24/08/2024",
    "Tại kho"
  ),
];

const OrderPage = () => {
<<<<<<< Updated upstream
=======
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

>>>>>>> Stashed changes
  return (
    <div className="flex">
      <Navbar>
        <main className={TramCSS.body}>
<<<<<<< Updated upstream
          <div className={TramCSS.trackingPark}>
            <TrackCard
              text="Đơn trong kho"
              icon={<WarehouseIC />}
              customColor="#FBECDA"
            />
            <TrackCard
              text="Đơn thành phố"
=======
          <InputDatePicker background={true} border={false} />
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
>>>>>>> Stashed changes
              icon={<BuildingIC fill="#007AFF" />}
            />
<<<<<<< Updated upstream
            <TrackCard
              text="Đơn toàn quốc"
              icon={<FlagIC fill="#EB455F" />}
              customColor="#9DEEB9"
            />
            <TrackCard
              text="Đơn đang giao"
              icon={<BoxIC fill="#FDF7B9" color="#F1E01D" />}
              customColor="#FDF7B9"
            />
          </div>
          <div className={TramCSS.map}>
            <div className={TramCSS.mapTitle}>
              <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
                Bản đồ vận chuyển
              </h1>
              <div className={TramCSS.searchBox}>
                <InputWithIcon purpose="search" placeholder="Tên / Mã tài xế" />
                {/* <SearchSvg/> */}
              </div>
            </div>
            <div className={TramCSS.importMap}></div>
          </div>
          <div className={TramCSS.list}>
            <Link href="/order/create">
              <ButtonCPN
                text={"Tạo đơn"}
                customColor={"#eb455f"}
                icon={<PlusIC fill={"#fff"} />}
              />
            </Link>
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              <TableContainer sx={{ maxHeight: 600 }}>
                <Table stickyHeader style={{ boxShadow: "#cbcbcb" }}>
                  <TableHead>
                    <TableRow>
                      <TableCell className={TramCSS.tbHead}>
                        Mã đơn
                        <SortIC fill="#CBCBCB" />
                      </TableCell>
                      <TableCell className={TramCSS.tbHead}>
                        Người nhận/gửi
                        <SortIC fill="#CBCBCB" />
                      </TableCell>
                      <TableCell className={TramCSS.tbHead}>
                        Nhận/gửi
                        <SortIC fill="#CBCBCB" />
                      </TableCell>
                      <TableCell className={TramCSS.tbHead}>
                        Người nhận/gửi
                        <SortIC fill="#CBCBCB" />
                      </TableCell>
                      <TableCell className={TramCSS.tbHead}>
                        Tài xế
                        <SortIC fill="#CBCBCB" />
                      </TableCell>
                      <TableCell className={TramCSS.tbHead}>
                        Ngày giao dự kiến
                        <SortIC fill="#CBCBCB" />
                      </TableCell>
                      <TableCell className={TramCSS.tbHead}>
                        Trạng thái
                        <SortIC fill="#CBCBCB" />
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Order.map((row) => (
                      <TableRow
                        key={row.id}
                        /*sx={{ '&:last-child td, &:last-child th': { border: 0 } }}*/
                      >
                        <TableCell className={TramCSS.tbBody}>
                          {row.id}
                        </TableCell>
                        <TableCell className={TramCSS.tbBody}>
                          {row.sender}
                        </TableCell>
                        <TableCell className={TramCSS.tbBody}>
                          {row.sendorreceive}
                        </TableCell>
                        <TableCell className={TramCSS.tbBody}>
                          {row.receiver}
                        </TableCell>
                        <TableCell className={TramCSS.tbBody}>
                          {row.driver}
                        </TableCell>
                        <TableCell className={TramCSS.tbBody}>
                          {row.date}
                        </TableCell>
                        <TableCell className={TramCSS.tbBody}>
                          <Chip
                            variant="outlined"
                            label={row.status}
                            color={
                              row.status === "Đang giao" ? "warning" : "primary"
                            }
                            // size="small"
                          />
                        </TableCell>
                      </TableRow>
=======
            <CommonSpecifications
              fluctuationType="none"
              color="#9DEEB9"
              quantity={2}
              subtitle="Đơn ngoại thành"
              icon={<FlagIC fill="#0DA651" />}
            />
          </div>

          {/* List đơn hàng */}
          <div className="table">
            <div className="note-container">
              <p className="note">
                Ghi chú: Ấn và khách hàng bất kì để xem hoặc thay đổi thông tin
              </p>
            </div>
            <div className="table-container">
              <table className="orderTable min-w-full bg-white table-fixed rounded-md">
                {/* Title từng cột */}
                <thead>
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
                      </tr>
>>>>>>> Stashed changes
                    ))}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </main>
      </Navbar>
    </div>
  );
};

export default OrderPage;

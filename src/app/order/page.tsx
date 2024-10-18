"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import TrackCard from "@/components/OrderComponents/TrackCard";
import TramCSS from "@/Style/Tram.module.css";
import Link from "next/link";
import "@/components/CommonComponents/Buttons/Button";
import ButtonCPN from "@/components/CommonComponents/Buttons/Button";
import PlusIC from "@/Svg/plusIC";
import Navbar from "@/components/CommonComponents/Layout/Navbar";
import SortIC from "@/Svg/sortIC";
import WarehouseIC from "@/Svg/warehouseIC";
import BuildingIC from "@/Svg/buildingIC";
import FlagIC from "@/Svg/flagIC";
import BoxIC from "@/Svg/boxIC";
import {
  InputDatePicker,
  InputWithIcon,
} from "@/components/CommonComponents/Inputs/Inputs";

interface OrderType {
  Order_ID: string;
  Receiver_Phone: string;
  Receiver_Name: string;
  Receiver_Address: string;
  Order_Note: string;
  Order_COD: number;
  Order_TotalPrice: number;
  Order_Type: string;
  Order_Status: string;
  Services_ID: string;
  Voucher_ID: string;
  Payment_ID: string;
  Cus_ID: string;
  Driver_ID: string;
}
const OrderPage = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/order/Orders", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Network not ok");
      }

      const result = await response.json();
      setOrders(result);
      // console.log(orders);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Navbar>
        <main className={TramCSS.body}>
          <InputDatePicker background="none" />
          <div className={TramCSS.trackingPark}>
            <TrackCard
              text="Đơn trong kho"
              number="122"
              icon={<WarehouseIC />}
              customColor="#FBECDA"
            />
            <TrackCard
              text="Đơn thành phố"
              number="12"
              icon={<BuildingIC fill="#007AFF" />}
              customColor="#B8DDFF"
            />
            <TrackCard
              text="Đơn toàn quốc"
              number="54"
              icon={<FlagIC fill="#0DA651" />}
              customColor="#9DEEB9"
            />
            <TrackCard
              text="Đơn đang giao"
              number="8"
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
                    {orders.map((order) => (
                      <TableRow
                        key={order.Order_ID}
                        /*sx={{ '&:last-child td, &:last-child th': { border: 0 } }}*/
                      >
                        <TableCell className={TramCSS.tbBody}>
                          {order.Order_ID}
                        </TableCell>
                        <TableCell className={TramCSS.tbBody}>
                          {order.Cus_ID}
                        </TableCell>
                        <TableCell className={TramCSS.tbBody}>
                          {order.Receiver_Name}
                        </TableCell>
                        <TableCell className={TramCSS.tbBody}>
                          {order.Receiver_Address}
                        </TableCell>
                        <TableCell className={TramCSS.tbBody}>
                          {order.Driver_ID}
                        </TableCell>
                        <TableCell className={TramCSS.tbBody}>
                          {order.Order_Status}
                        </TableCell>
                        <TableCell className={TramCSS.tbBody}>
                          {order.Driver_ID}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>
        </main>
      </Navbar>
    </div>
  );
};

export default OrderPage;

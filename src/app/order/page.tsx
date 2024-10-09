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
  return (
    <div>
      <Navbar>
        <main className={TramCSS.body}>
          <div className={TramCSS.trackingPark}>
            <TrackCard
              text="Đơn trong kho"
              icon={<WarehouseIC />}
              customColor="#FBECDA"
            />
            <TrackCard
              text="Đơn thành phố"
              icon={<BuildingIC fill="#007AFF" />}
              customColor="#B8DDFF"
            />
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

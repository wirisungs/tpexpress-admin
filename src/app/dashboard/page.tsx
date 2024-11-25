"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/CommonComponents/Layout/Navbar";
import CommonSpecifications from "../../components/DashboardComponents/CommonSpecifications";
import PendingIC from "@/Svg/pendingIC";
import OrderIC from "@/Svg/orderIC";

import {
  LineChart,
  lineElementClasses,
  markElementClasses,
} from "@mui/x-charts";
import { PieChartOrderStatus } from "@/components/Charts/PieChartOrderStatus";
import { RankingChart } from "@/components/Charts/RankingChart";

interface OrderPriceOf5Date {
  xLabels: string[];
  orderTotalPrice: number[];
}

const Dashboard = () => {
  const [orderStatus, setOrderStatus] = useState({
    Pending: 0,
    Delivering: 0,
    Success: 0,
    Canceled: 0,
  });
  const [orderPriceOfDate, setOrderPriceOfDate] = useState<OrderPriceOf5Date>({
    xLabels: [],
    orderTotalPrice: [],
  });

  const [sumOrder, setSumOrder] = useState<number>(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/order/getOrder5Days"
        );
        if (!response.ok) {
          throw new Error("Lỗi mạng. Kiểm tra đường truyền!");
        }
        const result = await response.json();

        // Kiểm tra dữ liệu trả về
        // console.log("Result from API:", result);

        // Nếu dữ liệu không có gì, trả về
        if (!result || result.length === 0) {
          console.log("Không có dữ liệu");
          return;
        }

        // Sắp xếp theo ngày (ascending)
        const sortedResult = result.sort(
          (a: { _id: string }, b: { _id: string }) => {
            const dateA = new Date(a._id);
            const dateB = new Date(b._id);
            return dateA.getTime() - dateB.getTime(); // So sánh thời gian để sắp xếp
          }
        );

        // Log sau khi sắp xếp
        // console.log("Sorted Result:", sortedResult);

        // Ánh xạ dữ liệu vào xLabels và orderTotalPrice
        const xLabels = sortedResult.map((item: { _id: string }) => item._id);
        const orderTotalPrice = sortedResult.map(
          (item: { deliverPrice: number }) => item.deliverPrice
        );

        // Log dữ liệu đã ánh xạ
        // console.log("Mapped Data:", { xLabels, orderTotalPrice });

        // Cập nhật state
        setOrderPriceOfDate({ xLabels, orderTotalPrice });
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/order/count");
        if (!response.ok) {
          throw new Error("Lỗi mạng. Kiểm tra đường truyền!");
        }
        const result = await response.json();
        setOrderStatus(result);
        // console.log(result);

        const sumOrder =
          result.Canceled + result.Success + result.Pending + result.Delivering;
        setSumOrder(sumOrder);
        // console.log(sumOrder);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  const renderLineChart = () => (
    <div className="flex w-full">
      <LineChart
        width={1100}
        height={300}
        grid={{ vertical: true, horizontal: true }}
        series={[
          {
            data: orderPriceOfDate.orderTotalPrice,
            id: "pvId",
          },
        ]}
        xAxis={[{ scaleType: "point", data: orderPriceOfDate.xLabels }]}
        sx={{
          [`.${lineElementClasses.root}, .${markElementClasses.root}`]: {
            strokeWidth: 1,
          },
          ".MuiLineElement-series-pvId": {
            strokeDasharray: "5 5",
          },
          ".MuiLineElement-series-uvId": {
            strokeDasharray: "3 4 5 2",
          },
          [`.${markElementClasses.root}:not(.${markElementClasses.highlighted})`]:
            {
              fill: "#fff",
            },
          [`& .${markElementClasses.highlighted}`]: {
            stroke: "none",
          },
        }}
      />
    </div>
  );

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Navbar>
        <div className="no-scrollbar flex flex-col gap-6 w-full h-full overflow-y-auto">
          <div className="flex flex-row gap-6 w-full justify-between">
            <CommonSpecifications
              fluctuationType="none"
              color="#FBECDA"
              quantity={orderStatus.Pending}
              subtitle="Đơn đang xử lý"
              icon={<PendingIC fill="#FBA333" />}
            />
            <CommonSpecifications
              fluctuationType="none"
              color="#B8DDFF"
              quantity={orderStatus.Success}
              subtitle="Đơn hoàn thành"
              icon={<OrderIC stroke="#2B8BE7" />}
            />
            <CommonSpecifications
              fluctuationType="price"
              fluctuationValue={
                orderPriceOfDate.orderTotalPrice[4] -
                orderPriceOfDate.orderTotalPrice[3]
              }
              color="#81E7A5"
              quantity={
                orderPriceOfDate.orderTotalPrice[4]
                  ? orderPriceOfDate.orderTotalPrice[4]
                  : 0
              }
              subtitle="Doanh thu hôm nay"
              unit="đ"
              icon={<PendingIC fill="#0DA651" />}
            />
            <CommonSpecifications
              fluctuationType="percent"
              fluctuationValue={-26}
              color="#F2DAFB"
              quantity={Math.round((orderStatus.Success / sumOrder) * 100)}
              percent="%"
              subtitle="Tỉ lệ hoàn thành"
              icon={<PendingIC fill="#C03CF1" />}
            />
          </div>

          <div className="flex flex-col w-full gap-6">
            <div className="chartArea flex flex-row gap-6">
              <div className="pieChart flex flex-col flex-1 rounded-md">
                <div className="flex flex-row gap-6">
                  <div className="flex-1 flex-col flex p-6 bg-white rounded-md shadow-sm">
                    <p className="text-base font-bold text-normalText mb-3">
                      Tỉ lệ hoàn thành đơn
                    </p>
                    <PieChartOrderStatus /> {/* Gọi Piechart components*/}
                  </div>
                  <div className="flex-1 flex-col p-6 bg-white rounded-md shadow-sm">
                    <p className="text-base font-bold text-normalText mb-3">
                      Xếp hạng tài xế trong tuần (Số đơn hoàn thành)
                    </p>
                    <RankingChart />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white w-full flex flex-1 p-8 flex-col rounded-md mb-2 shadow-sm">
              <p className="text-base font-bold text-normalText">
                Doanh thu trong 7 ngày gần nhất
              </p>
              {renderLineChart()}
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Dashboard;

"use client";
import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";
import useFetch from "@/hooks/useFetch";
import "@/Style/MTri/Loading.css";
import WarningIC from "@/Svg/warning";

export const RankingChart = () => {
  const [rankings, setRankings] = useState([]);
  const { data, loading, error, fetchData } = useFetch(
    "http://localhost:5000/api/order/getRankings"
  );
  // Fetch dữ liệu mỗi khi có thay đổi
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Cập nhật bảng xếp hàng rankings sau khi dữ liệu được lấy
  useEffect(() => {
    if (data) {
      setRankings(data); // Giả sử dữ liệu trả về có định dạng như { Pending: 400, Delivering: 300, Success: 200, Canceled: 100 }
    }
  }, [data]);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#fff",
            padding: "10px",
            border: "1px solid #ccc",
          }}
        >
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>{label}</p>
          <p className="text-xs">{`Số đơn hoàn thành: ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="w-full h-[300px]">
      {loading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
          <p className="text-base font-bold text-navbarText">
            Đang tải dữ liệu...
          </p>
        </div>
      ) : error ? (
        <div className="w-full h-full flex flex-col items-center justify-center gap-3">
          <WarningIC width={64} height={64} />
          <p className="text-sm text-primaryText300 font-bold">
            Không có dữ liệu
          </p>
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart layout="vertical" data={rankings}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis tick={{ fontSize: 12 }} type="number" />
            <YAxis
              interval={0}
              tick={{ fontSize: 12 }}
              dataKey="driverName"
              type="category"
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="completedOrdersCount" fill="#EB455F" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

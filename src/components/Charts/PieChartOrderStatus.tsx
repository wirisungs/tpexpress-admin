"use client";
import React, { useEffect, useState } from "react";
import { ResponsiveContainer, Sector, Pie, PieChart, Cell } from "recharts";
import useFetch from "@/hooks/useFetch";
import "@/Style/MTri/Loading.css";
import WarningIC from "@/Svg/warning";

export const PieChartOrderStatus = () => {
  const { data, loading, error, fetchData } = useFetch(
    "http://localhost:5000/api/order/count"
  );

  const [orderStatus, setOrderStatus] = useState({
    Pending: 0,
    Delivering: 0,
    Success: 0,
    Canceled: 0,
  });

  // Fetch dữ liệu mỗi khi có thay đổi
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Cập nhật orderStatus sau khi dữ liệu được lấy
  useEffect(() => {
    if (data) {
      setOrderStatus(data); // Giả sử dữ liệu trả về có định dạng như { Pending: 400, Delivering: 300, Success: 200, Canceled: 100 }
    }
  }, [data]);

  const COLORS = ["#ffc658", "#1E90FF", "#7BB369", "#ff0000"];

  const renderActiveShape = (props: any) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <text
          style={{ fontSize: 12 }}
          x={cx}
          y={cy}
          dy={8}
          textAnchor="middle"
          fill={fill}
        >
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >
          {`Số đơn hàng: ${value}`}
        </text>
        <text
          style={{ fontSize: 12 }}
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
        >
          {`(Chiếm: ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const pieData = [
    { name: "Chờ xử lý", value: orderStatus.Pending },
    { name: "Đang vận chuyển", value: orderStatus.Delivering },
    { name: "Hoàn thành", value: orderStatus.Success },
    { name: "Hủy đơn", value: orderStatus.Canceled },
  ];

  return (
    <div className="w-full h-full">
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
          <PieChart width={500} height={500}>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              onMouseEnter={onPieEnter}
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

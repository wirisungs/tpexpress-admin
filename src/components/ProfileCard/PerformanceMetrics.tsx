import React from "react";
import MetricField from "./MetricField";

interface PerformanceMetricsProps {
  activityStatus: string;
  pickupStatus: string;
  currentOrders: number;
  errorCount: number;
  todayRevenue: string;
}

const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({
  activityStatus,
  pickupStatus,
  currentOrders,
  errorCount,
  todayRevenue,
}) => {
  return (
    <div className="flex overflow-hidden flex-col mt-6 w-full text-xs max-md:max-w-full">
      <h3 className="self-center font-bold text-zinc-900">
        Thống kê hiệu suất
      </h3>
      <div className="flex flex-wrap gap-10 justify-between mt-4 w-full max-md:max-w-full">
        <div className="flex flex-col my-auto min-w-[240px] w-[342px]">
          <MetricField
            label="Trạng thái hoạt động"
            value={activityStatus}
            color="text-red-400"
          />
          <MetricField
            label="Trạng thái lấy hàng"
            value={pickupStatus}
            color="text-red-600"
          />
          <MetricField
            label="Số đơn đang nhận"
            value={currentOrders.toString()}
            color="text-red-600"
          />
        </div>
        <div className="flex flex-col min-w-[240px] w-[342px]">
          <MetricField
            label="Số lần lỗi (Tự ý hủy đơn, làm lạc đơn,...)"
            value={errorCount.toString()}
            color="text-stone-500"
          />
          <MetricField
            label="Doanh thu hôm nay"
            value={todayRevenue}
            color="text-stone-500"
          />
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;

import Image from "next/image";
import React from "react";

interface PerformanceStatsProps {
  deliveredOrders: number;
  failedOrders: number;
}

const PerformanceStats: React.FC<PerformanceStatsProps> = ({
  deliveredOrders,
  failedOrders,
}) => {
  return (
    <div className="flex flex-1 shrink gap-10 justify-center items-center self-stretch my-auto basis-0 min-w-[240px]">
      <div className="flex flex-col justify-center items-center self-stretch my-auto">
        <div className="text-base text-stone-500">Đơn đã giao</div>
        <div className="mt-3 text-2xl font-bold text-zinc-900">
          {deliveredOrders}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center self-stretch my-auto">
        <div className="text-base text-stone-500">Đơn giao không thành</div>
        <div className="mt-3 text-2xl font-bold text-zinc-900">
          {failedOrders}
        </div>
      </div>
      <Image
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4f4e1dbfc661ae279e7b6105bc4de299274022d6370287a08ce43e2412b683e?placeholderIfAbsent=true&apiKey=15b59fc130e4444f91de6f123898acea"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
      />
    </div>
  );
};

export default PerformanceStats;

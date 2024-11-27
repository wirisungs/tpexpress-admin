import React from "react";
import SavingIC from "@/Svg/savingIC";
import FastIC from "@/Svg/fastIC";
import RocketIC from "@/Svg/rocketIC";
import TPhucIC from "@/Svg/tphucIC";

const SavingService = () => {
  return (
    <div className="flex w-full h-[75px] gap-6 items-center">
      <div className="flex flex-1">
        <SavingIC />
      </div>
      <div className="flex flex-[5] flex-col gap-[6px]">
        <p className="text-sm text-normalText font-bold">Giao hàng tiết kiệm</p>
        <p className="text-xs text-gray-500">Thời gian dự kiến: 5-6 ngày</p>
      </div>
    </div>
  );
};
const FastService = () => {
  return (
    <div className="flex w-full h-[75px] gap-6 items-center">
      <div className="flex flex-1">
        <FastIC />
      </div>
      <div className="flex flex-[5] flex-col gap-[6px]">
        <p className="text-sm text-normalText font-bold">Giao hàng nhanh</p>
        <p className="text-xs text-gray-500">Thời gian dự kiến: 2-3 ngày</p>
      </div>
    </div>
  );
};
const RocketService = () => {
  return (
    <div className="flex w-full h-[75px] gap-6 items-center">
      <div className="flex flex-1">
        <RocketIC />
      </div>
      <div className="flex flex-[5] flex-col gap-[6px]">
        <p className="text-sm text-normalText font-bold">Giao hàng tên lửa</p>
        <p className="text-xs text-gray-500">Thời gian dự kiến: Trong ngày</p>
      </div>
    </div>
  );
};
const TPhucService = () => {
  return (
    <div className="flex w-full h-[75px] gap-6 items-center">
      <div className="flex flex-1">
        <TPhucIC />
      </div>
      <div className="flex flex-[5] flex-col gap-[6px]">
        <p className="text-sm text-normalText font-bold">
          Thiên Phúc giao hàng
        </p>
        <p className="text-xs text-gray-500">Thời gian dự kiến: Trong ngày</p>
      </div>
    </div>
  );
};

export { SavingService, FastService, RocketService, TPhucService };

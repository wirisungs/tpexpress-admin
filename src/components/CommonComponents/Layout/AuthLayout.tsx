import React from "react";
import { LayoutProps } from "../../../../.next/types/app/layout";
import "@/Style/MTri.css";
import DriverCar from "@/Svg/driverCar";
const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-container flex flex-row w-full h-[100vh] px-8 gap-12">
      <div className="h-full flex-1 flex py-8 flex-col gap-24 ">
        <div className="logo w-[100px] h-[60px]" />
        <div className="body flex w-full h-full flex-col items-center justify-between">
          <div className="heroSection flex flex-col gap-6 items-center w-full">
            <DriverCar width={400} height={200} />
            <p
              style={{ textShadow: "2px 0px 5px rgba(0 0 0 / 0.2)" }}
              className="welcome-text text-3xl font-bold text-normalText"
            >
              Chào mừng đến với Hệ Thống Quản Lý
            </p>
            <p className="describe-text text-base text-normalText text-center ">
              Hệ thống quản lý giao hàng nhanh toàn quốc giúp bạn theo dõi, điều
              phối, và quản lý đơn hàng một cách hiệu quả. <br />
              Đăng nhập để bắt đầu công việc của bạn ngay hôm nay!
            </p>
          </div>
          <div className="support">
            <p className="text-sm text-primaryText300 font-bold">
              Hỗ trợ kỹ thuật: 0389105492 (A. Trí công nghệ)
            </p>
          </div>
        </div>
      </div>
      <div className="body h-full py-8 flex justify-end items-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;

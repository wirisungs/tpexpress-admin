import React from "react";
import { LayoutProps } from "../../../../.next/types/app/layout";
import "@/Style/MTri.css";
import DriverCar from "@/Svg/driverCar";
const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-container flex flex-row w-full h-[100vh] px-8 gap-0 lg:gap-12">
      <div className="h-full w-full flex-1 flex pt-8 pb-12 flex-col gap-24 ">
        <div className="logo w-[100px] h-[60px]" />
        <div className="body flex w-full h-full flex-col items-center justify-between px-4">
          <div className="heroSection flex flex-col gap-6 items-center w-full">
            <div className="logo">
              <DriverCar />
            </div>
            <p
              style={{ textShadow: "2px 0px 5px rgba(0 0 0 / 0.2)" }}
              className="welcome-text md:text-2xl lg:text-3xl font-bold text-normalText text-center"
            >
              Chào Mừng Đến Với Hệ Thống Quản Lý
            </p>
            <p className="describe-text md:text-sm lg:text-base text-normalText text-center ">
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
      <div className="body h-full py-8 md:flex-1 lg:flex-grow-0 flex justify-end items-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;

import React from "react";
import IconAndText from "./IconAndText";
import DashboardIC from "@/Svg/dashboardIC";
import CustomerIC from "@/Svg/customerIC";
import DriverIC from "@/Svg/driverIC";
import OrderIC from "@/Svg/orderIC";
import RequestIC from "@/Svg/requestIC";

const NavbarTab = () => {
  return (
    <div className="navbar-container flex flex-col gap-3 w-full">
      <IconAndText
        Icon={<DashboardIC fill={"#696969"} />}
        Text="Tổng quan"
      />
      <IconAndText Icon={<CustomerIC stroke={"#696969"} />} Text="Khách hàng" />
      <IconAndText Icon={<DriverIC stroke={"#696969"} />} Text="Tài xế" isActive={true}/>
      <IconAndText Icon={<OrderIC stroke={"#696969"} />} Text="Đơn hàng" />
      <IconAndText
        Icon={<RequestIC fill={"#696969"} />}
        Text="Yêu cầu hỗ trợ"
      />
    </div>
  );
};

export default NavbarTab;

"use client";
import React from "react";
import DashboardIC from "@/Svg/dashboardIC";
import CustomerIC from "@/Svg/customerIC";
import DriverIC from "@/Svg/driverIC";
import OrderIC from "@/Svg/orderIC";
import RequestIC from "@/Svg/requestIC";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/Style/MTri.css";

const NavbarTab = () => {
  const pathname = usePathname();
  return (
    <div className="navbar-container">
      <div className="navbar-container flex flex-col gap-4 w-full">
        {/* Dashboard */}
        <Link
          href={`/dashboard`}
          passHref
          className={`${
            pathname === "/dashboard" ? "Active" : ""
          } flex flex-row pl-8 pr-4 items-center gap-3 py-3`}
        >
          <div className="Icon">
            <DashboardIC width={16} height={16} />
          </div>
          <div className={`Text text-[12px] text-navbarText`}>Tổng quát</div>
        </Link>

        {/* Khách hàng */}
        <Link
          href={`/customers`}
          passHref
          className={`${
            pathname === "/customers" ? "Active" : ""
          } flex flex-row pl-8 pr-4 items-center gap-3 py-3`}
        >
          <div className="Icon">
            <CustomerIC width={16} height={16} />
          </div>
          <div className={`Text text-[12px] text-navbarText`}>Khách hàng</div>
        </Link>

        {/* Nhân viên */}
        <Link
          href={`/drivers`}
          passHref
          className={`${
            pathname === "/drivers" ? "Active" : ""
          } flex flex-row pl-8 pr-4 items-center gap-3 py-3`}
        >
          <div className="Icon">
            <DriverIC width={16} height={16} />
          </div>
          <div className={`Text text-[12px] text-navbarText`}>Tài xế</div>
        </Link>

        {/* Đơn hàng */}
        <Link
          href={`/order`}
          passHref
          className={`${
            pathname === "/order" ? "Active" : ""
          } flex flex-row pl-8 pr-4 items-center gap-3 py-3`}
        >
          <div className="Icon">
            <OrderIC width={16} height={16} />
          </div>
          <div className={`Text text-[12px] text-navbarText`}>Đơn hàng</div>
        </Link>

        {/* Yêu cầu hỗ trợ */}
        <Link
          href={`/requests`}
          passHref
          className={`${
            pathname === "/request" ? "Active" : ""
          } flex flex-row pl-8 pr-4 items-center gap-3 py-3`}
        >
          <div className="Icon">
            <RequestIC width={16} height={16} />
          </div>
          <div className={`Text text-[12px] text-navbarText`}>
            Yêu cầu hỗ trợ
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavbarTab;

import React, { ReactNode } from "react";
import Nameplate from "./Items/Nameplate";
import DropdownIC from "@/Svg/dropdown";
import NavbarTab from "./Items/NavbarTab";

interface LayoutProps {
  children: ReactNode;
}

const Navbar: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="MainContainer flex flex-row min-h-[100vh] w-full">
      <div
        className="NavbarContainer flex flex-col w-[15%] gap-3 "
        style={{
          backgroundColor: "#ffffff",
          boxShadow: "2px 0px 8px rgb(0 0 0 / 0.1)",
          zIndex: 10,
        }}
      >
        <Nameplate
          name="Trần Hữu Minh Trí"
          icon={<DropdownIC />}
          role="Quản trị viên"
        />
        <NavbarTab />
      </div>
      <div className="bodyContainer bg-[#f9f9f9] w-[85%] h-full p-6 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default Navbar;

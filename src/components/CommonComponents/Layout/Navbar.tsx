import React, { ReactNode } from "react";
import Nameplate from "./Items/Nameplate";
import DropdownIC from "@/Svg/dropdown";
import NavbarTab from "./Items/NavbarTab";

interface LayoutProps {
  children: ReactNode;
}

const Navbar: React.FC<LayoutProps> = ({ children }) => {
  return (
<<<<<<< Updated upstream
    <div className="MainContainer flex flex-row h-full w-full">
      <div className="NavbarContainer flex flex-col w-[20%] gap-3">
        <Nameplate image={Art} name="Trần Hữu Minh Trí" icon={<DropdownIC />} />
        <NavbarTab />
      </div>
      <div className="bodyContainer bg-navbarActiveBG w-[80%] h-[1000px]">
=======
    <div className="MainContainer flex flex-row min-h-[100vh] w-full">
      <div
        className="NavbarContainer flex flex-col w-[15%] gap-3"
        style={{ backgroundColor: "#ffffff" }}
      >
        <Nameplate
          name="Trần Hữu Minh Trí"
          icon={<DropdownIC />}
          role="Quản trị viên"
        />
        <NavbarTab />
      </div>
      <div className="bodyContainer bg-navbarActiveBG w-[85%] h-full p-6 overflow-y-auto">
>>>>>>> Stashed changes
        {children}
      </div>
    </div>
  );
};

export default Navbar;

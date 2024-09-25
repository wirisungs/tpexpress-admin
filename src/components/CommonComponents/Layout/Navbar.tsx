import React, { ReactNode } from "react";
import Nameplate from "./Items/Nameplate";
import Art from "@/Pictures/avt.png";
import DropdownIC from "@/Svg/dropdown";
import NavbarTab from "./Items/NavbarTab";

interface LayoutProps {
  children: ReactNode;
}

const Navbar: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="MainContainer flex flex-row h-full w-full">
      <div className="NavbarContainer flex flex-col w-[20%] gap-3">
        <Nameplate image={Art} name="Trần Hữu Minh Trí" icon={<DropdownIC />} />
        <NavbarTab />
      </div>
      <div className="bodyContainer bg-navbarActiveBG w-[80%] h-[1000px]">
        {children}
      </div>
    </div>
  );
};

export default Navbar;

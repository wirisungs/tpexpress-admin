import React, { ReactNode } from "react";
import Nameplate from "./Items/Nameplate";
import Art from "@/Pictures/avt.png";
import DropdownIC from "@/Svg/dropdown";
import NavbarTab from "./Items/NavbarTab";
import Button from "@/components/CommonComponents/Buttons/Button";
import PlusIC from "@/Svg/plusIC";
import Input, {
  InputDatePicker,
  InputFunction,
  InputWithIcon,
  InputSelection,
} from "../Inputs/Inputs";

interface LayoutProps {
  children: ReactNode;
}

const Navbar: React.FC<LayoutProps> = ({ children }) => {
  const options = ["Nam", "Nữ"];
  return (
    <div className="MainContainer flex flex-row h-full w-full">
      <div className="NavbarContainer flex flex-col w-[20%] gap-3" style={{backgroundColor:'#ffffff'}}>
        <Nameplate image={Art} name="Trần Hữu Minh Trí" icon={<DropdownIC />} />
        <NavbarTab />
      </div>
      <div className="bodyContainer bg-navbarActiveBG w-[80%] h-[1000px] p-6">
        {/* <Button icon={<PlusIC fill={"#fff"} />} text={"Đăng nhập"}/>
        <Input type="number" placeholder={"Nhập số điện thoại"} />
        <InputWithIcon purpose="password" placeholder="Nhập mật khẩu" />
        <InputFunction
          type="number"
          placeholder="Nhập mã OTP"
          functionText="Gửi lại"
        />
        <InputSelection options={options} />
        <InputDatePicker /> */}
        {children}
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { LayoutProps } from "../../../../.next/types/app/layout";
import TPLogo from "@/Svg/TPLogo";
import "@/Style/MTri.css";

const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-container flex flex-row w-full h-[100vh]">
      <div className="body w-[70%] h-[100vh] flex justify-center items-center">
        {children}
      </div>
      <div className="logoArea w-[30%] h-[100vh] flex justify-center items-center right-0">
        <TPLogo />
      </div>
    </div>
  );
};

export default AuthLayout;

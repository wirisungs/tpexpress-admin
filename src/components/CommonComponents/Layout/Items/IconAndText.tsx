import React from "react";
import "@/Style/MTri.css";

// Components của 1 Icon và Text
interface iconAndTextProps {
  Icon: React.ReactNode;
  Text: React.ReactNode;
  isActive?: boolean;
}

const IconAndText: React.FC<iconAndTextProps> = ({ Icon, Text, isActive }) => {
  return (
    <div
      className={`${
        isActive ? "Active" : ""
      } flex flex-row pl-8 pr-4 items-center gap-3 py-3`}
    >
      <div className="Icon">{Icon}</div>
      <div className={`Text text-[12px] text-navbarText`}>{Text}</div>
    </div>
  );
};

export default IconAndText;

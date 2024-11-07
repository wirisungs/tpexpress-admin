import React from "react";
import Plus from "@/Svg/Plus";

interface RegisterButtonProps {
  text: string;
}

const RegisterButton: React.FC<RegisterButtonProps> = ({ text }) => {
  return (
    <button className="flex gap-1.5 justify-center items-center self-stretch px-5 py-3 my-auto bg-red-400 rounded-md min-h-[42px] w-[168px] text-white">
      <Plus />
      <span className="self-stretch my-auto">{text}</span>
    </button>
  );
};

export default RegisterButton;

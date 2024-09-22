import React from "react";

// Nhập text, width

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  width?: number;
  customColor?: string;
}

const Button: React.FC<ButtonProps> = ({ text, icon, width, customColor }) => {
  return (
    <button
      style={{
        width: `${width ? `${width}px` : "152px"}`,
        backgroundColor: `${customColor ? `${customColor}` : `#D9D9D9`}`,
      }}
      className="flex flex-row gap-[6px] h-12 rounded-md justify-center items-center"
    >
      <div className="icon">{icon}</div>
      <div className="text flex items-center text-white font-bold text-base h-full">
        {text}
      </div>
    </button>
  );
};

export default Button;

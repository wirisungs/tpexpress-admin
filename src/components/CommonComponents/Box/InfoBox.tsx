import React from "react";

interface InfoBoxProps {
  label: string;
  content: string;
  color?: string;
}
const InfoBox: React.FC<InfoBoxProps> = ({ label, content, color }) => {
  return (
    <div className="flex w-full gap-[6px] flex-col">
      <p className="text-sm text-normalText">{label}</p>
      <div
        style={{ color: `${color || "#1c1c1c"}` }}
        className="box w-full h-[42px] flex px-4 border-solid border-[1px] border-boxOuline bg-transparent rounded-md text-xs items-center "
      >
        {content}
      </div>
    </div>
  );
};

export default InfoBox;

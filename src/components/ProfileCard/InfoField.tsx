import React from "react";

interface InfoFieldProps {
  label: string;
  value: string;
}

const InfoField: React.FC<InfoFieldProps> = ({ label, value }) => {
  return (
    <div className="flex flex-col justify-center mt-3 w-full max-w-[342px]">
      <label className="text-zinc-900">{label}</label>
      <div className="flex gap-10 justify-between items-center px-4 py-4 mt-1.5 w-full rounded-md border border-solid border-stone-300 min-h-[42px] text-stone-500">
        <span className="self-stretch my-auto">{value}</span>
        <div className="flex shrink-0 self-stretch my-auto w-4 h-4" />
      </div>
    </div>
  );
};

export default InfoField;

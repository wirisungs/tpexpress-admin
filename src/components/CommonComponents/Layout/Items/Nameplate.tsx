import React from "react";

interface NameplateProps {
  name: string;
  role: string;
  icon?: React.ReactNode;
}
const Nameplate: React.FC<NameplateProps> = ({ name, role, icon }) => {
  return (
    <div className="flex flex-col pl-8 pb-4 pt-6 pr-6 h-[78px]">
      <div className="flex flex-row justify-between gap-3 w-full items-center">
        <p className="Username flex text-base font-bold h-full items-center text-ellipsis">
          {name}
        </p>
        {icon ? (
          <div className="icon h-full flex items-center cursor-pointer">
            {" "}
            {icon}
          </div>
        ) : (
          ""
        )}
      </div>
      <p className="Username flex text-xs text-subtitleText h-full items-center text-ellipsis">
        {role}
      </p>
    </div>
  );
};

export default Nameplate;

import Image, { StaticImageData } from "next/image";
import React from "react";

interface NameplateProps {
  image: StaticImageData;
  name: string;
  icon?: React.ReactNode;
}
const Nameplate: React.FC<NameplateProps> = ({ image, name, icon }) => {
  return (
    <div className="flex flex-row gap-3 w-full items-center p-4">
      <Image className="w-8 h-8 rounded-md" src={image} alt="avatar" />
      <p className="Username flex text-sm font-bold h-full items-center text-ellipsis">
        {name}
      </p>
      {icon ? <div className="icon"> {icon}</div> : ""}
    </div>
  );
};

export default Nameplate;

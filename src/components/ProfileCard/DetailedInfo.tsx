import React from "react";
import InfoField from "./InfoField";

interface DetailedInfoProps {
  idCard: string;
  drivingLicense: string;
  licenseType: string;
  bank: string;
  bankAccount: string;
  licensePlate: string;
}

const DetailedInfo: React.FC<DetailedInfoProps> = ({
  idCard,
  drivingLicense,
  licenseType,
  bank,
  bankAccount,
  licensePlate,
}) => {
  return (
    <div className="flex flex-col mt-6 w-full text-xs max-md:max-w-full">
      <h3 className="self-center font-bold text-zinc-900">
        Thông tin chi tiết
      </h3>
      <div className="flex flex-wrap gap-10 justify-between mt-4 w-full max-md:max-w-full">
        <div className="flex flex-col my-auto min-w-[240px] w-[342px]">
          <InfoField label="CCCD / CMND" value={idCard} />
          <InfoField label="Giấy phép lái xe" value={drivingLicense} />
          <InfoField label="Loại bằng lái" value={licenseType} />
        </div>
        <div className="flex flex-col min-w-[240px] w-[342px]">
          <InfoField label="Ngân hàng" value={bank} />
          <InfoField label="Số ngân hàng" value={bankAccount} />
          <InfoField label="Biển số xe" value={licensePlate} />
        </div>
      </div>
    </div>
  );
};

export default DetailedInfo;

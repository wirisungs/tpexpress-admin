"use client";
import React, { useEffect, useState } from "react";
import TableHeader from "../../components/drivers/TableHeader";
import SearchInput from "../../components/drivers/SearchInput";
import RegisterButton from "../../components/drivers/RegisterButton";
import Navbar from "@/components/CommonComponents/Layout/Navbar";

interface DriverType {
  driver_ID: string;
  driver_Name: string;
  driver_Email: string;
  driver_Phone: number;
  driver_Address: string;
  driver_NationalID: string;
  driver_License: string;
  driver_LicensePlate: string;
  driver_Gender: number;
  driver_Bank: string;
  driver_Status: string;
}

const DriverTable: React.FC = () => {
  const [drivers, setDrivers] = useState<DriverType[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/driver/", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Network not ok");
      }

      const result = await response.json();
      setDrivers(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="flex flex-col">
      <Navbar>
        <div className="flex flex-row gap-4 items-center p-6 bg-white">
          <SearchInput placeholder="Tìm kiếm tài xế" />
          <RegisterButton text="Đăng ký tài xế" />
        </div>
        <div className="flex flex-col gap-4 p-6">
          <p className="text-xs font-bold text-red-600 max-md:max-w-full">
            Ghi chú: Ấn và khách hàng bất kì để xem hoặc thay đổi thông tin
          </p>
          <div className="flex flex-col flex-1 w-full text-base text-stone-500 max-md:max-w-full bg-[#F9FAFF]">
            <TableHeader />
            <div className="flex overflow-hidden flex-col flex-1 px-8 mt-1.5 w-full bg-white max-w-[1029px] shadow-[0px_4px_5px_rgba(203,203,203,1)] max-md:px-5 max-md:max-w-full">
              {drivers.map((driver) => (
                <div
                  key={driver.driver_ID}
                  className="flex flex-wrap items-center max-md:max-w-full"
                >
                  <div className="flex overflow-hidden flex-col self-stretch my-auto whitespace-nowrap border-b border-stone-300 min-h-[51px] w-[114px]">
                    <div className="flex overflow-hidden flex-col justify-center py-4 w-full">
                      <div className="max-w-full w-[114px]">
                        {driver.driver_ID}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`flex overflow-hidden flex-col self-stretch my-auto whitespace-nowrap border-b border-stone-300 min-h-[51px] w-[122px]`}
                  >
                    <div className="flex overflow-hidden flex-col justify-center py-4 w-full">
                      <div className="max-w-full w-[122px]">
                        {driver.driver_Status ? "Hoạt động" : "Không hoạt động"}
                      </div>
                    </div>
                  </div>
                  <div className="flex overflow-hidden flex-col self-stretch my-auto border-b border-stone-300 min-h-[51px] w-[139px]">
                    <div className="flex overflow-hidden flex-col justify-center items-start py-4 w-full">
                      <div className="max-w-full w-[139px]">
                        {driver.driver_Name}
                      </div>
                    </div>
                  </div>
                  <div className="flex overflow-hidden flex-col self-stretch my-auto whitespace-nowrap border-b border-stone-300 min-h-[51px] w-[134px]">
                    <div className="flex overflow-hidden flex-col justify-center items-start py-4 w-full">
                      <div className="max-w-full w-[134px]">
                        {driver.driver_Phone}
                      </div>
                    </div>
                  </div>
                  <div className="flex overflow-hidden flex-col justify-center self-stretch my-auto whitespace-nowrap border-b border-stone-300 min-h-[51px] w-[153px]">
                    <div className="flex overflow-hidden flex-col justify-center py-4 pr-2 w-full">
                      <div className="w-full max-w-[145px]">
                        {driver.driver_LicensePlate}
                      </div>
                    </div>
                  </div>
                  <div className="flex overflow-hidden flex-col self-stretch my-auto border-b border-stone-300 min-h-[51px] w-[137px]">
                    <div className="flex overflow-hidden flex-col justify-center py-4 w-full">
                      <div className="w-full max-w-[137px]">
                        {driver.driver_NationalID}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Navbar>
    </section>
  );
};

export default DriverTable;

import React from "react";
import TableHeader from "../../components/drivers/TableHeader";
import TableRow from "../../components/drivers/TableRow";
import { Driver } from "../../app/data/types";
import SearchInput from "../../components/drivers/SearchInput";
import RegisterButton from "../../components/drivers/RegisterButton";
import Navbar from "@/components/CommonComponents/Layout/Navbar";

const drivers: Driver[] = [
  {
    id: "TX001",
    status: "Online",
    name: "Trần Văn A",
    email: "tranvana@gmail.com",
    phone: "0312343422",
    idNumber: "012374422948",
    licenseNumber: "3241 2342 3245",
  },
  {
    id: "TX001",
    status: "Online",
    name: "Trần Văn A",
    email: "tranvana@gmail.com",
    phone: "0312343422",
    idNumber: "012374422948",
    licenseNumber: "3241 2342 3245",
  },
  {
    id: "TX001",
    status: "Online",
    name: "Trần Văn A",
    email: "tranvana@gmail.com",
    phone: "0312343422",
    idNumber: "012374422948",
    licenseNumber: "3241 2342 3245",
  },
  {
    id: "TX001",
    status: "Online",
    name: "Trần Văn A",
    email: "tranvana@gmail.com",
    phone: "0312343422",
    idNumber: "012374422948",
    licenseNumber: "3241 2342 3245",
  },
  {
    id: "TX001",
    status: "Online",
    name: "Trần Văn A",
    email: "tranvana@gmail.com",
    phone: "0312343422",
    idNumber: "012374422948",
    licenseNumber: "3241 2342 3245",
  },
  {
    id: "TX001",
    status: "Online",
    name: "Trần Văn A",
    email: "tranvana@gmail.com",
    phone: "0312343422",
    idNumber: "012374422948",
    licenseNumber: "3241 2342 3245",
  },
  {
    id: "TX001",
    status: "Online",
    name: "Trần Văn A",
    email: "tranvana@gmail.com",
    phone: "0312343422",
    idNumber: "012374422948",
    licenseNumber: "3241 2342 3245",
  },
  {
    id: "TX001",
    status: "Online",
    name: "Trần Văn A",
    email: "tranvana@gmail.com",
    phone: "0312343422",
    idNumber: "012374422948",
    licenseNumber: "3241 2342 3245",
  },
  {
    id: "TX001",
    status: "Online",
    name: "Trần Văn A",
    email: "tranvana@gmail.com",
    phone: "0312343422",
    idNumber: "012374422948",
    licenseNumber: "3241 2342 3245",
  },
  {
    id: "TX002",
    status: "Offline",
    name: "Trần Văn B",
    email: "tranvanb@gmail.com",
    phone: "0312343422",
    idNumber: "012374422948",
    licenseNumber: "3241 2342 3245",
  },
  {
    id: "TX002",
    status: "Offline",
    name: "Trần Văn B",
    email: "tranvanb@gmail.com",
    phone: "0312343422",
    idNumber: "012374422948",
    licenseNumber: "3241 2342 3245",
  },
  {
    id: "TX002",
    status: "Offline",
    name: "Trần Văn B",
    email: "tranvanb@gmail.com",
    phone: "0312343422",
    idNumber: "012374422948",
    licenseNumber: "3241 2342 3245",
  },
  {
    id: "TX002",
    status: "Offline",
    name: "Trần Văn B",
    email: "tranvanb@gmail.com",
    phone: "0312343422",
    idNumber: "012374422948",
    licenseNumber: "3241 2342 3245",
  },
  {
    id: "TX002",
    status: "Offline",
    name: "Trần Văn B",
    email: "tranvanb@gmail.com",
    phone: "0312343422",
    idNumber: "012374422948",
    licenseNumber: "3241 2342 3245",
  },
  {
    id: "TX002",
    status: "Offline",
    name: "Trần Văn B",
    email: "tranvanb@gmail.com",
    phone: "0312343422",
    idNumber: "012374422948",
    licenseNumber: "3241 2342 3245",
  },
  {
    id: "TX002",
    status: "Offline",
    name: "Trần Văn B",
    email: "tranvanb@gmail.com",
    phone: "0312343422",
    idNumber: "012374422948",
    licenseNumber: "3241 2342 3245",
  },
  {
    id: "TX002",
    status: "Offline",
    name: "Trần Văn B",
    email: "tranvanb@gmail.com",
    phone: "0312343422",
    idNumber: "012374422948",
    licenseNumber: "3241 2342 3245",
  },
  {
    id: "TX002",
    status: "Offline",
    name: "Trần Văn B",
    email: "tranvanb@gmail.com",
    phone: "0312343422",
    idNumber: "012374422948",
    licenseNumber: "3241 2342 3245",
  },
];

const DriverTable: React.FC = () => {
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
                <TableRow key={driver.id} driver={driver} />
              ))}
            </div>
          </div>
        </div>
      </Navbar>
    </section>
  );
};

export default DriverTable;

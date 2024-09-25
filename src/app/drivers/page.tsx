import React from 'react';
import TableHeader from '../../components/drivers/TableHeader';
import TableRow from '../../components/drivers/TableRow';
import { Driver } from '../../app/data/types';
import SearchInput from '../../components/drivers/SearchInput';
import RegisterButton from '../../components/drivers/RegisterButton';

const drivers: Driver[] = [
  {
    id: 'TX001',
    status: 'Online',
    name: 'Trần Văn A',
    email: 'tranvana@gmail.com',
    phone: '0312343422',
    idNumber: '012374422948',
    licenseNumber: '3241 2342 3245',
  },
  {
    id: 'TX002',
    status: 'Offline',
    name: 'Trần Văn B',
    email: 'tranvanb@gmail.com',
    phone: '0312343422',
    idNumber: '012374422948',
    licenseNumber: '3241 2342 3245',
  },
];

const DriverTable: React.FC = () => {
  return (
    <section className="flex flex-col px-6 pt-4 pb-6 max-md:px-5">
      <div className="flex items-center mb-2 gap-4">
        <SearchInput placeholder="Tìm kiếm tài xế" />
        <RegisterButton text="Đăng ký tài xế" />
      </div>
      <p className="text-xs font-bold text-red-600 max-md:max-w-full">
        Ghi chú: Ấn và khách hàng bất kì để xem hoặc thay đổi thông tin
      </p>
      <div className="flex flex-col flex-1 mt-4 w-full text-base text-stone-500 max-md:max-w-full">
        <TableHeader />
        <div className="flex overflow-hidden flex-col flex-1 px-8 mt-1.5 w-full bg-white max-w-[1029px] shadow-[0px_4px_5px_rgba(203,203,203,1)] max-md:px-5 max-md:max-w-full">
          {drivers.map((driver) => (
            <TableRow key={driver.id} driver={driver} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DriverTable;
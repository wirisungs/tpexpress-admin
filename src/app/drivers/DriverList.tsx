import React from 'react';
import TableHeader from '../../components/drivers/TableHeader';
import DriverRow from '../../components/drivers/DriverRow';

interface Driver {
  id: string;
  status: 'Online' | 'Offline';
  name: string;
  email: string;
  phone: string;
  idNumber: string;
  licenseNumber: string;
}

const drivers: Driver[] = [
  {
    id: 'TX001',
    status: 'Online',
    name: 'Trần Văn A',
    email: 'tranvana@gmail.com',
    phone: '0312343422',
    idNumber: '012374422948',
    licenseNumber: '3241 2342 3245'
  },
  {
    id: 'TX002',
    status: 'Offline',
    name: 'Trần Văn B',
    email: 'tranvanb@gmail.com',
    phone: '0312343422',
    idNumber: '012374422948',
    licenseNumber: '3241 2342 3245'
  }
];

const DriverList: React.FC = () => {
  return (
    <section className="flex flex-col px-6 pt-4 pb-6 max-md:px-5">
      <p className="text-xs font-bold text-red-600 max-md:max-w-full">
        Ghi chú: Ấn và khách hàng bất kì để xem hoặc thay đổi thông tin
      </p>
      <div className="flex flex-col flex-1 mt-4 w-full text-base text-stone-500 max-md:max-w-full">
        <TableHeader />
        <div className="flex overflow-hidden flex-col flex-1 px-8 mt-1.5 w-full bg-white max-w-[1029px] shadow-[0px_4px_5px_rgba(203,203,203,1)] max-md:px-5 max-md:max-w-full">
          {drivers.map((driver) => (
            <DriverRow key={driver.id} driver={driver} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DriverList;
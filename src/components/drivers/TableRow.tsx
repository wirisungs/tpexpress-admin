import React from 'react';
import { Driver } from '../../app/data/types';

interface TableRowProps {
  driver: Driver;
}

const TableRow: React.FC<TableRowProps> = ({ driver }) => {
  const statusColor = driver.status === 'Online' ? 'text-green-600' : 'text-red-600';

  return (
    <div className="flex flex-wrap items-center max-md:max-w-full">
      <div className="flex overflow-hidden flex-col self-stretch my-auto whitespace-nowrap border-b border-stone-300 min-h-[51px] w-[114px]">
        <div className="flex overflow-hidden flex-col justify-center py-4 w-full">
          <div className="max-w-full w-[114px]">{driver.id}</div>
        </div>
      </div>
      <div className={`flex overflow-hidden flex-col self-stretch my-auto ${statusColor} whitespace-nowrap border-b border-stone-300 min-h-[51px] w-[122px]`}>
        <div className="flex overflow-hidden flex-col justify-center py-4 w-full">
          <div className="max-w-full w-[122px]">{driver.status}</div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col self-stretch my-auto border-b border-stone-300 min-h-[51px] w-[139px]">
        <div className="flex overflow-hidden flex-col justify-center items-start py-4 w-full">
          <div className="max-w-full w-[139px]">{driver.name}</div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col self-stretch pr-4 my-auto whitespace-nowrap border-b border-stone-300 min-h-[51px] w-[151px]">
        <div className="flex overflow-hidden flex-col justify-center py-4 w-full">
          <div className="max-w-full w-[135px] text-ellipsis">{driver.email}</div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col self-stretch my-auto whitespace-nowrap border-b border-stone-300 min-h-[51px] w-[134px]">
        <div className="flex overflow-hidden flex-col justify-center items-start py-4 w-full">
          <div className="max-w-full w-[134px]">{driver.phone}</div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col justify-center self-stretch my-auto whitespace-nowrap border-b border-stone-300 min-h-[51px] w-[153px]">
        <div className="flex overflow-hidden flex-col justify-center py-4 pr-2 w-full">
          <div className="w-full max-w-[145px]">{driver.idNumber}</div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col self-stretch my-auto border-b border-stone-300 min-h-[51px] w-[137px]">
        <div className="flex overflow-hidden flex-col justify-center py-4 w-full">
          <div className="w-full max-w-[137px]">{driver.licenseNumber}</div>
        </div>
      </div>
    </div>
  );
};

export default TableRow;
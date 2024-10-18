import React from 'react';
import { IconButton } from '@mui/material';
import Filter from '@/Svg/Filter.jsx';

const headerItems = [
  { label: 'Mã tài xế' },
  { label: 'Trạng thái' },
  { label: 'Họ và tên' },
  { label: 'Email' },
  { label: 'Số điện thoại' },
  { label: 'CCCD' },
  { label: 'Giấy phép lái xe' },
];

const TableHeader: React.FC = () => {
  return (
    <header className="flex overflow-hidden flex-wrap justify-between items-center px-8 py-2.5 max-w-full font-bold bg-white min-h-[48px] shadow-[0px_4px_5px_rgba(203,203,203,1)] w-[1029px] max-md:px-5">
      {headerItems.map((item, index) => (
        <div key={index} className="flex overflow-hidden flex-col self-stretch my-auto bg-white rounded-md">
          <div className="flex items-center py-1.5 w-full bg-white">
            <div className="self-stretch my-auto">{item.label}</div>
            <IconButton size="small" sx={{ marginLeft: '12px' }}>
              <Filter size="small" />
            </IconButton>
          </div>
        </div>
      ))}
    </header>
  );
};

export default TableHeader;
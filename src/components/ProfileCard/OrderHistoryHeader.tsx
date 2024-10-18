import React from 'react';

const OrderHistoryHeader: React.FC = () => {
    return (
        <div className="flex overflow-hidden flex-wrap gap-7 justify-between items-center self-center px-8 py-2.5 mt-6 w-full text-xs font-bold bg-white min-h-[48px] shadow-[0px_4px_5px_rgba(203,203,203,1)] text-stone-500 max-md:px-5">
            <HeaderItem label="Mã đơn" width="w-[70px]" />
            <HeaderItem label="Nhận/gửi" width="w-20" />
            <HeaderItem label="Người nhận/gửi" width="w-[114px]" />
            <HeaderItem label="Từ" width="w-[42px]" />
            <HeaderItem label="Đến" width="w-[51px]" />
            <HeaderItem label="Ngày" width="w-14" />
            <HeaderItem label="Trạng thái" width="w-[81px]" />
        </div>
    );
};

interface HeaderItemProps {
    label: string;
    width: string;
}

const HeaderItem: React.FC<HeaderItemProps> = ({ label, width }) => (
    <div className={`flex overflow-hidden flex-col self-stretch my-auto ${width} whitespace-nowrap bg-white rounded-md`}>
        <div className="flex gap-3 items-center py-1.5 w-full bg-white">
            <div className="self-stretch my-auto">{label}</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4288d5ca337d3d5db543f745d8085868125fcedf74a85218600334bf90cfc20?placeholderIfAbsent=true&apiKey=15b59fc130e4444f91de6f123898acea" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
        </div>
    </div>
);

export default OrderHistoryHeader;
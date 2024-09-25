import React from 'react';

interface Order {
    id: string;
    type: string;
    person: string;
    from: string;
    to: string;
    date: string;
    status: string;
}

interface OrderHistoryItemProps {
    order: Order;
}

const OrderHistoryItem: React.FC<OrderHistoryItemProps> = ({ order }) => {
    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'đã giao':
                return 'text-green-600';
            case 'đang giao':
                return 'text-orange-400';
            case 'đã hủy':
                return 'text-red-600';
            default:
                return 'text-stone-500';
        }
    };

    return (
        <div className="flex flex-wrap items-start py-3 border-b border-stone-300 max-md:max-w-full">
            <div className="flex overflow-hidden flex-col whitespace-nowrap bg-white rounded-md w-[97px]">
                <div className="flex-1 shrink gap-3 self-stretch py-1.5 w-full bg-white">{order.id}</div>
            </div>
            <div className="flex overflow-hidden flex-col whitespace-nowrap bg-white rounded-md w-[107px]">
                <div className="flex-1 shrink gap-3 self-stretch py-1.5 w-full bg-white">{order.type}</div>
            </div>
            <div className="flex overflow-hidden flex-col bg-white rounded-md w-[141px]">
                <div className="flex-1 shrink gap-3 self-stretch py-1.5 w-full bg-white">{order.person}</div>
            </div>
            <div className="flex overflow-hidden flex-col bg-white rounded-md w-[70px]">
                <div className="flex-1 shrink gap-3 self-stretch py-1.5 w-full bg-white">{order.from}</div>
            </div>
            <div className="flex overflow-hidden flex-col items-center bg-white rounded-md h-[81px] w-[79px]">
                <div className="gap-3 self-stretch py-1.5 bg-white h-[81px] w-[81px]">{order.to}</div>
            </div>
            <div className="flex overflow-hidden flex-col whitespace-nowrap bg-white rounded-md w-[81px]">
                <div className="gap-3 self-stretch py-1.5 w-full bg-white">{order.date}</div>
            </div>
            <div className={`flex overflow-hidden flex-col ${getStatusColor(order.status)} bg-white rounded-md`}>
                <div className="gap-3 self-stretch py-1.5 w-full bg-white">{order.status}</div>
            </div>
        </div>
    );
};

export default OrderHistoryItem;
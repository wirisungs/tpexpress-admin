import React from "react";
import OrderHistoryHeader from "./OrderHistoryHeader";
import OrderHistoryItem from "./OrderHistoryItem";

interface Order {
  id: string;
  type: string;
  person: string;
  from: string;
  to: string;
  date: string;
  status: string;
}

interface OrderHistoryProps {
  orders: Order[];
}

const OrderHistory: React.FC<OrderHistoryProps> = ({ orders }) => {
  return (
    <>
      <h3 className="self-center mt-6 text-xs font-bold text-zinc-900">
        Lịch sử đơn
      </h3>
      <OrderHistoryHeader />
      <div className="flex overflow-hidden flex-col items-start self-center px-8 pt-3 mt-6 w-full text-xs bg-white h-[296px] max-w-[720px] shadow-[0px_4px_5px_rgba(203,203,203,1)] text-stone-500 max-md:px-5 max-md:max-w-full">
        {orders.map((order, index) => (
          <OrderHistoryItem key={index} order={order} />
        ))}
      </div>
    </>
  );
};

export default OrderHistory;

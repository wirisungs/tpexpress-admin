import React from "react";

type ItemProp = {
  itemName: string;
  itemWeight: string;
  itemValue: string;
};
const ItemsBox: React.FC<ItemProp> = ({ itemName, itemWeight, itemValue }) => {
  return (
    <div className="flex flex-col w-full gap-2 py-3 border-b-[1px] border-dashed border-boxOuline">
      <p className="w-full text-sm text-normalText">{itemName}</p>
      <div className="flex flex-row justify-between">
        <p className="text-xs text-gray-400">{itemWeight} kg</p>
        <p className="text-xs text-success">{itemValue}</p>
      </div>
    </div>
  );
};

export default ItemsBox;

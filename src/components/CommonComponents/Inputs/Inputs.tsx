"use client";
import React, { HTMLInputTypeAttribute, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import EyesIC from "@/Svg/eyesIC";
import CalendarIC from "@/Svg/calenderIC";
import DropdownIC from "@/Svg/dropdown";
import SearchIC from "@/Svg/searchIC";

type InputPurpose = "search" | "password" | "OnlyEnter";

interface InputProps {
  placeholder: string;
  type?: string;
}

interface InputIconProps extends InputProps {
  purpose: InputPurpose;
}

interface InputFunctionProps extends InputProps {
  functionText: string;
}

interface SelectionInputProps {
  options: string[];
}

const Input: React.FC<InputProps> = ({ placeholder, type }) => {
  return (
    <input
      type={type || "text"}
      className="h-12 w-[342px] rounded-md px-4 py-3 bg-transparent
      border-solid border-[1px] outline-none"
      placeholder={placeholder}
    />
  );
};

const InputWithIcon: React.FC<InputIconProps> = ({ purpose, placeholder }) => {
  const type = purpose === "password" ? purpose : "text";
  const [inputType, setInputType] = useState<HTMLInputTypeAttribute>(type);
  const handleIconClick = () => {
    if (purpose === "password") {
      setInputType((prevType) =>
        prevType === "password" ? "text" : "password"
      );
    }
  };
  return (
    <div
      className="Input flex flex-row h-12 w-[342px] rounded-md px-4 py-3 bg-transparent
        border-solid border-[1px] items-center justify-around"
    >
      <input
        type={inputType}
        className="bg-transparent outline-none w-[90%]"
        placeholder={placeholder}
      />
      <button className="icon" onClick={() => handleIconClick()}>
        {purpose === "password" ? (
          <EyesIC />
        ) : purpose === "search" ? (
          <SearchIC />
        ) : (
          ""
        )}
      </button>
    </div>
  );
};

const InputFunction: React.FC<InputFunctionProps> = ({
  placeholder,
  functionText,
  type,
}) => {
  return (
    <div
      className="Input flex flex-row h-12 w-[342px] rounded-md px-4 py-3 bg-transparent
          border-solid border-[1px] justify-around items-center"
    >
      <input
        type={type}
        className="bg-transparent outline-none w-[80%]"
        placeholder={placeholder}
      />
      <button className="text-base h-full text-primaryText300">
        {functionText}
      </button>
    </div>
  );
};

const InputSelection: React.FC<SelectionInputProps> = ({ options }) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined
  );
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
  };
  return (
    <div
      className="Input flex flex-row h-12 w-[342px] rounded-md px-4 py-3 bg-transparent
          border-solid border-[1px] items-center"
    >
      <select
        className="w-full bg-transparent outline-none"
        value={selectedValue}
        onChange={handleChange}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const InputDatePicker: React.FC = ({}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  return (
    <div
      className="DatePicker-Container flex flex-row
      w-[182px] px-4 py-3 rounded-xl bg-transparent
      border-solid border-[1px] items-center justify-between gap-3"
    >
      <div className="calender w-1/6">
        <CalendarIC width={"20px"} height={"20px"} />
      </div>
      <DatePicker
        className="bg-transparent outline-none w-4/6"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="P"
        placeholderText="Ngày"
      />
      <div className="dropdown w-1/6">
        <DropdownIC />
      </div>
    </div>
  );
};

export default Input;
export { InputWithIcon, InputFunction, InputSelection, InputDatePicker };

"use client";
import React, { HTMLInputTypeAttribute, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import EyesIC from "@/Svg/eyesIC";
import CalendarIC from "@/Svg/calenderIC";
import DropdownIC from "@/Svg/dropdown";
import SearchIC from "@/Svg/searchIC";

import "@/Style/MTri.css";

type InputPurpose = "search" | "password" | "OnlyEnter";

interface InputProps {
  placeholder: string;
  type?: string;
  label?: string;
  value?: string;
  length?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface InputIconProps extends InputProps {
  purpose: InputPurpose;
}

interface InputFunctionProps extends InputProps {
  functionText: string;
}

interface DatePickerProps {
  background: string;
}

interface SelectionInputProps {
  options: string[];
}

// Input thông thường
const Input: React.FC<InputProps> = ({
  placeholder,
  type,
  label,
  value,
  onChange,
  length,
}) => {
  return (
    <div className="flex flex-col gap-[6px]">
      {label ? (
        <label className="text-base font-bold text-normalText">{label}</label>
      ) : null}
      <input
        maxLength={length}
        required
        type={type || "text"}
        value={value}
        onChange={onChange}
        className="h-12 w-[342px] rounded-md px-4 py-3 bg-transparent
      border-solid border-[1px] outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};

// Input chứa icons
const InputWithIcon: React.FC<InputIconProps> = ({
  purpose,
  placeholder,
  label,
}) => {
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
    <div className="flex flex-col w-auto h-auto gap-[6px]">
      {label ? (
        <label className="text-base font-bold text-normalText">{label}</label>
      ) : null}
      <div
        className="Input flex flex-row h-12 w-[342px] rounded-md px-4 py-3 bg-transparent
        border-solid border-[1px] items-center justify-around"
      >
        <input
          required
          type={inputType}
          className="bg-transparent outline-none w-[90%]"
          placeholder={placeholder}
        />
        <button
          className="icon"
          type="button"
          onClick={() => handleIconClick()}
        >
          {purpose === "password" ? (
            <EyesIC fill="#696969" />
          ) : purpose === "search" ? (
            <SearchIC />
          ) : (
            ""
          )}
        </button>
      </div>
    </div>
  );
};

// Input có chứa hàm
const InputFunction: React.FC<InputFunctionProps> = ({
  placeholder,
  functionText,
  type,
  label,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col w-auto h-auto gap-[6px]">
      {label ? (
        <label className="text-base font-bold text-normalText">{label}</label>
      ) : null}
      <div
        className="Input flex flex-row h-12 w-[342px] rounded-md px-4 py-3 bg-transparent
          border-solid border-[1px] justify-between items-center"
      >
        <input
          required
          maxLength={length}
          value={value}
          onChange={onChange}
          type={type}
          className="bg-transparent outline-none w-[80%]"
          placeholder={placeholder}
        />
        <button type="button" className="text-base h-full text-primaryText300">
          {functionText}
        </button>
      </div>
    </div>
  );
};

// Input lựa chọn
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

// Input chọn ngày
const InputDatePicker: React.FC<DatePickerProps> = ({ background }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  return (
    <div
      style={{
        background: `${background === "yes" ? "white" : "transparent"}`,
        border: `${background === "yes" ? "none" : "solid"}`,
        boxShadow: `${
          background === "yes" ? "0px 2px 10px rgb(0 0 0 / 0.07)" : "none"
        }`,
      }}
      className="DatePicker-Container flex flex-row
      w-[182px] px-4 py-3 rounded-xl border-[1px] items-center justify-between gap-3"
    >
      <div className="calender w-1/6">
        <CalendarIC width={"20px"} height={"20px"} stroke="#696969" />
      </div>
      <DatePicker
        className="bg-transparent outline-none w-4/6 h-full text-navbarText"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="P"
        placeholderText="Ngày"
      />
      <div className="dropdown w-1/6">
        <DropdownIC fill="#696969" />
      </div>
    </div>
  );
};

export default Input;
export { InputWithIcon, InputFunction, InputSelection, InputDatePicker };

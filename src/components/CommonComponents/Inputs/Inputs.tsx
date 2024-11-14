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
  labelcolor?: string;
  value?: string;
  border?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  background?: boolean;
}

interface InputIconProps extends InputProps {
  purpose: InputPurpose;
}

interface InputFunctionProps extends InputProps {
  functionText: string;
}

interface DatePickerProps {
  background: boolean;
  border: boolean;
}

interface SelectionInputProps {
  options: { [key: string]: string | boolean | number };
  label?: string;
  onChange?: (value: string | number | boolean) => void;
}

// Input thông thường
const Input: React.FC<InputProps> = ({
  placeholder,
  type,
  label,
  labelcolor,
  value,
  onChange,
  border,
  background = false,
}) => {
  return (
    <div className="flex flex-col gap-[6px] w-full">
      {label ? (
        <label
          style={{ color: `${labelcolor || "#4A4A4A"}` }}
          className="text-sm"
        >
          {label}
        </label>
      ) : null}
      {border ? (
        <input
          style={{
            backgroundColor: `${background ? "#ffffff" : "transparent"}`,
          }}
          required
          type={type || "text"}
          value={value}
          onChange={onChange}
          className="h-[42px] w-full rounded-md px-4 py-3 border-solid 
          border-[1px] outline-none border-boxOuline text-xs placeholder:text-xs 
          focus:border-primaryText300 transition-all duration-300"
          placeholder={placeholder}
        />
      ) : (
        <input
          style={{
            backgroundColor: `${background ? "#ffffff" : "transparent"}`,
          }}
          required
          type={type || "text"}
          value={value}
          onChange={onChange}
          className="h-[42px] w-full rounded-md px-4 py-3 outline-none text-xs placeholder:text-xs
          focus:border--primaryText300 focus:border-solid focus:border-[1px] transition-all duration-300"
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

// Input chứa icons
const InputWithIcon: React.FC<InputIconProps> = ({
  purpose,
  placeholder,
  label,
  labelcolor,
  value,
  border,
  onChange,
  background,
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

  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="flex flex-col w-full h-auto gap-[6px]">
      {label ? (
        <label
          style={{ color: `${labelcolor || "#4A4A4A"}` }}
          className="text-sm text-normalText"
        >
          {label}
        </label>
      ) : null}
      <div
        className="Input flex flex-row h-[42px] w-full rounded-md px-4 py-3 bg-transparent outline-none items-center justify-between transition-all duration-300"
        style={{
          border: `${border ? "solid 1px #cbcbcb" : "none"}`,
          borderColor: `${isFocused ? "#EB455F" : "#CBCBCB"}`,
          background: `${background ? "#ffffff" : "transparent"}`,
        }}
      >
        <input
          required
          type={inputType}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={value}
          onChange={onChange}
          className="bg-transparent outline-none w-[90%] text-xs placeholder:text-xs"
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
            <SearchIC fill="#696969" />
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
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="flex flex-col w-full h-auto gap-[6px]">
      {label ? (
        <label className="text-sm text-normalText">{label}</label>
      ) : null}
      <div
        style={{ borderColor: `${isFocused ? "#EB455F" : "#CBCBCB"}` }}
        className="Input flex flex-row h-[42px] w-full rounded-md px-4 py-3 bg-transparent
          border-solid border-[1px] justify-between items-center "
      >
        <input
          required
          value={value}
          onChange={onChange}
          type={type}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="bg-transparent outline-none w-[80%] text-xs placeholder:text-xs"
          placeholder={placeholder}
        />
        <button type="button" className="text-sm h-full text-primaryText300">
          {functionText}
        </button>
      </div>
    </div>
  );
};

// Input lựa chọn
const InputSelection: React.FC<SelectionInputProps> = ({
  options,
  label,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined
  );
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const abbreviation = options[value];
    setSelectedValue(value);
    console.log(selectedValue);
    if (onChange) {
      onChange(abbreviation);
    }
  };
  return (
    <div className="flex flex-col gap-[6px] w-full">
      {label ? (
        <label className="text-sm text-navbarText">{label}</label>
      ) : null}
      <div
        className="Input flex flex-row h-[42px] w-full rounded-md px-4 py-3 bg-transparent
          border-solid border-[1px] border-boxOuline items-center"
      >
        <select
          className="w-full bg-transparent outline-none  text-navbarText text-xs"
          value={selectedValue}
          onChange={handleChange}
        >
          {Object.keys(options).map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

// Input chọn ngày
const InputDatePicker: React.FC<DatePickerProps> = ({
  background = false,
  border = false,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  return (
    <div
      style={{
        background: `${background ? "white" : "transparent"}`,
        border: `${border ? "solid" : "none"}`,
      }}
      className="DatePicker-Container flex flex-row
      w-full h-[42px] px-4 py-3 rounded-md border-[1px] border-no items-center justify-between gap-3"
    >
      <div className="calender w-1/6">
        <CalendarIC width={"20px"} height={"20px"} stroke="#696969" />
      </div>
      <DatePicker
        className="bg-transparent outline-none w-4/6 h-full text-navbarText text-xs placeholder:text-xs"
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

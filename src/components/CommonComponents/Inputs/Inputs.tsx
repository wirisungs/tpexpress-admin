"use client";
import React, { HTMLInputTypeAttribute, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import EyesIC from "@/Svg/eyesIC";
import CalendarIC from "@/Svg/calenderIC";
import DropdownIC from "@/Svg/dropdown";
import SearchIC from "@/Svg/searchIC";

import "@/Style/MTri.css";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type InputPurpose = "search" | "password" | "OnlyEnter";

interface InputProps {
  placeholder: string | Date | undefined;
  type?: string;
  label?: string;
  labelcolor?: string;
  value?: string | Date | undefined;
  border?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  background?: boolean;
}

interface InputIconProps extends InputProps {
  purpose: InputPurpose;
  pageOfAPI?: string;
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
  onChange?: (value: string) => void;
  defaultValue?: string;
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
  pageOfAPI,
}) => {
  const router = useRouter();
  const type = purpose === "password" ? purpose : "text";
  const [inputType, setInputType] = useState<HTMLInputTypeAttribute>(type);
  const handleIconClick = async () => {
    if (purpose === "password") {
      setInputType((prevType) =>
        prevType === "password" ? "text" : "password"
      );
    } else if (purpose === "search") {
      const inputValue = String(value);

      if (inputValue) {
        console.log(inputValue);
        let queryParam = "";
        if (/^[\w.+\-]+@gmail\.com$/.test(inputValue)) {
          queryParam = `email=${inputValue}`;
        } else if (/(0[3|5|7|8|9])+([0-9]{8})\b/g.test(inputValue)) {
          queryParam = `phone=${inputValue}`;
        } else {
          queryParam = `id=${inputValue}`;
        }
        let response;
        console.log(pageOfAPI);
        switch (pageOfAPI) {
          case "cusDetails": {
            response = await fetch(
              `http://localhost:5000/api/customer/cus?${queryParam}`
            );
            break;
          }
          case "driDetails": {
            response = await fetch(
              `http://localhost:5000/api/driver/dri?${queryParam}`
            );
            break;
          }
        }
        if (response) {
          const result = await response.json();

          if (response.ok) {
            console.log(queryParam);
            switch (pageOfAPI) {
              case "cusDetails": {
                router.push(`/customers/cus?${queryParam}`);
                break;
              }
              case "driDetails": {
                router.push(`/drivers/dri?${queryParam}`);
                break;
              }
              default: {
                console.warn("Unknown pageOfAPI:", pageOfAPI);
              }
            }
          } else {
            if (result && result.message) {
              toast.error(result.message);
            }
          }
        }
      }
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
          id="searchInput"
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
          id="searchInput"
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
  defaultValue,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    defaultValue
  );

  useEffect(() => {
    if (defaultValue) {
      setSelectedValue(defaultValue);
    }
  }, [defaultValue]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const abbreviation = options[value];
    setSelectedValue(value);
    console.log(value);
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

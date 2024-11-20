"use client";
import React, { useState } from "react";
import Input, {
  InputFunction,
  InputWithIcon,
} from "../CommonComponents/Inputs/Inputs";
import LogoIC from "@/Svg/TPLogo";

const ChangePasswordForm = () => {
  const subtitle = "Tinh thần tốc độ - Dịch vụ hoàn hảo";
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [otp, setOTP] = useState<string>("");
  const [warning, setWarning] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <form
      method="POST"
      style={{ boxShadow: "0px 0px 20px 10px rgb(0 0 0 / 0.2)" }}
      className="form-container w-full h-full px-8 pt-16 pb-4 border-solid border-[2px] bg-white rounded-[32px] flex flex-col gap-4 items-center justify-between"
    >
      <div className="forgot-container lg:w-[406px] flex flex-col gap-4">
        <div className="title flex flex-col w-full gap-[2px] items-center border-b border-gray-300 border-dashed pb-4">
          <p className="titleText text-2xl font-bold text-primaryText300">
            Đổi mật khẩu
          </p>
          <p className="subtitle text-yellowText text-base font-medium">
            {subtitle}
          </p>
        </div>
        <InputWithIcon
          purpose="password"
          label="Mật khẩu mới"
          border={true}
          placeholder="VD: Abc@123321"
        />
        <InputWithIcon
          purpose="password"
          label="Nhập lại mật khẩu"
          border={true}
          placeholder="VD: Abc@123321"
        />

        {warning ? (
          <p className="text-xs text-primaryText300">{warning}</p>
        ) : (
          ""
        )}
        <button
          type="submit"
          className="flex flex-row gap-[6px] h-[42px] hover:opacity-90 active:opacity-50 duration-300 bg-primaryText300 rounded-md justify-center items-center"
        >
          <div className="text flex items-center text-white font-bold text-xs h-full">
            {isLoading ? (
              <div className="spinner-container">
                <div className="spinnerWhite"></div>
              </div>
            ) : (
              "Xác nhận"
            )}
          </div>
        </button>
      </div>
      <a
        className="text-sm font-medium text-primaryText300 hover:underline"
        href="/"
      >
        Trở về đăng nhập
      </a>
    </form>
  );
};

export default ChangePasswordForm;

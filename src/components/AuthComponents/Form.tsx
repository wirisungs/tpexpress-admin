"use client";
import React, { useEffect, useState } from "react";
import Input, {
  InputFunction,
  InputWithIcon,
} from "../CommonComponents/Inputs/Inputs";
import Button from "../CommonComponents/Buttons/Button";

type type = "login" | "forgot" | "changePassword";
interface FormProps {
  formType: type;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  warning: string;
}
interface LoginProps extends FormProps {
  phone: string;
  setPhone: (value: string) => void;
}
const Form: React.FC<LoginProps> = ({
  formType,
  onSubmit,
  phone,
  setPhone,
  warning,
}) => {
  const subtitle = "Tinh thần tốc độ - Dịch vụ hoàn hảo";

  return (
    <form
      onSubmit={onSubmit}
      method="POST"
      className="form-container px-8 py-16 rounded-xl border-solid border-[2px] border-primaryText300"
    >
      {/* Nếu form là Login */}
      {formType === "login" && (
        <div className="login-container flex flex-col gap-4">
          <div className="title flex flex-col gap-[6px]">
            <p className="titleText text-2xl font-bold text-primaryText300">
              Đăng nhập
            </p>
            <p className="subtitle text-yellowText text-xs font-medium">
              {subtitle}
            </p>
          </div>
          <Input
            value={phone}
<<<<<<< Updated upstream
            onChange={(e) => handleChange(e)}
            length={10}
=======
            onChange={(e) => setPhone(e.target.value)}
>>>>>>> Stashed changes
            type="text"
            label="Số điện thoại"
            border={true}
            placeholder="VD: 0123456789"
          />
          {warning ? (
            <p className="text-xs text-primaryText300">{warning}</p>
          ) : (
            ""
          )}
          <InputWithIcon
            label="Mật khẩu"
            purpose="password"
            placeholder="VD: Abc@12345678"
          />
          <Button
            text="Đăng nhập"
            width="100%"
            customColor="#EB455F"
            href="/dashboard"
          />
          <a className="text-xs font-medium text-yellowText" href="/forgot">
            Quên mật khẩu?
          </a>
        </div>
      )}

      {/* Forgot form */}
      {formType === "forgot" && (
        <div className="login-container flex flex-col gap-4">
          <div className="title flex flex-col gap-[6px]">
            <p className="titleText text-2xl font-bold text-primaryText300">
              Quên mật khẩu
            </p>
            <p className="subtitle text-xs text-yellowText font-medium">
              {subtitle}
            </p>
          </div>
          <Input
            value={phone}
<<<<<<< Updated upstream
            onChange={(e) => handleChange(e)}
            length={10}
=======
            // onChange={(e) => handleChange(e)}
>>>>>>> Stashed changes
            label="Số điện thoại"
            border={true}
            placeholder="VD: 0123456789"
          />
          <Input
            label="Email công ty cấp"
            border={true}
            placeholder="VD: abc@tpexpress.com"
          />
          <InputFunction
            label="Mã xác nhận"
            placeholder="Mã gồm 6 số được gửi về mail"
            functionText="Gửi"
          />

          <Button
            text="Đổi mật khẩu"
            width="100%"
            customColor="#EB455F"
            href="/repassword"
          />
          <a className="text-xs font-medium text-yellowText" href="/">
            Trở về đăng nhập
          </a>
        </div>
      )}

      {/* change pass form */}
      {formType === "changePassword" && (
        <div className="changePass-container flex flex-col gap-4">
          <div className="title flex flex-col gap-[6px]">
            <p className="titleText text-2xl font-bold text-primaryText300">
              Quên mật khẩu
            </p>
            <p className="subtitle text-xs text-yellowText font-medium">
              {subtitle}
            </p>
          </div>
          <InputWithIcon
            label="Mật khẩu"
            purpose="password"
            border={true}
            placeholder="Nhập lại mật khẩu"
          />
          <InputWithIcon
            label="Nhập lại mật khẩu"
            purpose="password"
            placeholder="Nhập lại mật khẩu"
          />

          <Button text="Thay đổi" width="100%" customColor="#EB455F" href="/" />
          <a className="text-xs font-medium text-yellowText" href="/">
            Trở về đăng nhập
          </a>
        </div>
      )}
    </form>
  );
};

export default Form;

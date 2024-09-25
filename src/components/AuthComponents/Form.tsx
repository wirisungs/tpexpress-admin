"use client";
import React from "react";
import Input, {
  InputFunction,
  InputWithIcon,
} from "../CommonComponents/Inputs/Inputs";
import Button from "../CommonComponents/Buttons/Button";

type type = "login" | "forgot" | "changePassword";
interface FormProps {
  formType: type;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
const Form: React.FC<FormProps> = ({ formType, onSubmit }) => {
  const subtitle = "Tinh thần tốc độ - Dịch vụ hoàn hảo";
  return (
    <form
      onSubmit={onSubmit}
      method="POST"
      style={{ boxShadow: "0px 0px 12px rgb(0 0 0 / 0.2)" }}
      className="form-container px-8 py-16 rounded-xl"
    >
      {formType === "login" && (
        <div className="login-container flex flex-col gap-4">
          <div className="title flex flex-col gap-[6px]">
            <p className="titleText text-[32px] font-bold text-primaryText300">
              Đăng nhập
            </p>
            <p className="subtitle text-yellowText font-medium">{subtitle}</p>
          </div>
          <Input label="Số điện thoại" placeholder="VD: 0123456789" />
          <InputWithIcon
            label="Mật khẩu"
            purpose="password"
            placeholder="VD: Abc@12345678"
          />
          <Button text="Đăng nhập" width="100%" customColor="#EB455F" />
          <a className="text-base font-medium text-yellowText" href="/forgot">
            Quên mật khẩu?
          </a>
        </div>
      )}
      {formType === "forgot" && (
        <div className="login-container flex flex-col gap-4">
          <div className="title flex flex-col gap-[6px]">
            <p className="titleText text-[32px] font-bold text-primaryText300">
              Quên mật khẩu
            </p>
            <p className="subtitle text-yellowText font-medium">{subtitle}</p>
          </div>
          <Input label="Số điện thoại" placeholder="VD: 0123456789" />
          <Input
            label="Email công ty cấp"
            placeholder="VD: abc@tpexpress.com"
          />
          <InputFunction
            label="Mã xác nhận"
            placeholder="Mã gồm 6 số được gửi về mail"
            functionText="Gửi"
          />

          <Button text="Đổi mật khẩu" width="100%" customColor="#EB455F" />
          <a className="text-base font-medium text-yellowText" href="/login">
            Trở về đăng nhập
          </a>
        </div>
      )}
      {formType === "changePassword" && (
        <div className="login-container flex flex-col gap-4">
          <div className="title flex flex-col gap-[6px]">
            <p className="titleText text-[32px] font-bold text-primaryText300">
              Quên mật khẩu
            </p>
            <p className="subtitle text-yellowText font-medium">{subtitle}</p>
          </div>
          <InputWithIcon
            label="Mật khẩu"
            purpose="password"
            placeholder="Nhập lại mật khẩu"
          />
          <InputWithIcon
            label="Nhập lại mật khẩu"
            purpose="password"
            placeholder="Nhập lại mật khẩu"
          />

          <Button text="Thay đổi" width="100%" customColor="#EB455F" />
          <a className="text-base font-medium text-yellowText" href="/login">
            Trở về đăng nhập
          </a>
        </div>
      )}
    </form>
  );
};

export default Form;

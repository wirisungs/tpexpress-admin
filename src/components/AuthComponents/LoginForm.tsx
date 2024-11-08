"use client";
import React, { FormEvent, useState } from "react";
import Input, { InputWithIcon } from "../CommonComponents/Inputs/Inputs";
import { useRouter } from "next/navigation";
import "@/Style/MTri/Loading.css";
const LoginForm = () => {
  const Router = useRouter();
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [warning, setWarning] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const collectData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    // Kết nối với database
    try {
      const response = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userPhone: phone,
          userPassword: password,
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        if (result.message) {
          setWarning(result.message);
        } else throw new Error(`HTTP error! status: ${response.status}`);
      }

      if (result.code === "Success") {
        setTimeout(() => {
          setIsLoading(false);
          Router.push("/dashboard");
        }, 1500);
      } else {
        setWarning(result.message);
      }
    } catch (error) {
      console.error("Error collecting data:", error);
    }
  };
  const subtitle = "Tinh thần tốc độ - Dịch vụ hoàn hảo";

  return (
    <form
      onSubmit={collectData}
      method="POST"
      className="form-container px-8 py-16 rounded-xl border-solid border-[2px] border-primaryText300"
    >
      <div className="login-container w-[406px] flex flex-col gap-4">
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
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          label="Số điện thoại"
          border={true}
          placeholder="VD: 0123456789"
        />
        <InputWithIcon
          border={true}
          label="Mật khẩu"
          purpose="password"
          placeholder="VD: Abc@12345678"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {warning ? (
          <p className="text-xs text-primaryText300">{warning}</p>
        ) : (
          ""
        )}
        <button
          type="submit"
          className="flex flex-row gap-[6px] h-[42px] bg-primaryText300 rounded-md justify-center items-center"
        >
          <div className="text flex items-center text-white font-bold text-xs h-full">
            {isLoading ? (
              <div className="spinner-container">
                <div className="spinnerWhite"></div>
              </div>
            ) : (
              "Đăng nhập"
            )}
          </div>
        </button>
        <a className="text-xs font-medium text-yellowText" href="/forgot">
          Quên mật khẩu
        </a>
      </div>
    </form>
  );
};

export default LoginForm;

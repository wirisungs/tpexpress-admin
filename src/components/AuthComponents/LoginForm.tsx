"use client";
import React, { FormEvent, useState } from "react";
import Input, { InputWithIcon } from "../CommonComponents/Inputs/Inputs";
import { useRouter } from "next/navigation";
import "@/Style/MTri/Loading.css";
import { useAppContext } from "@/app/AppProvider";
import { useRole } from "@/contexts/RoleContext";
import { useUserName } from "@/contexts/UsernameContext";
import { jwtDecode } from "jwt-decode";
const LoginForm = () => {
  const router = useRouter();
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [warning, setWarning] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setSessionToken } = useAppContext();
  const { setRole } = useRole();
  const { setFullName } = useUserName();

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
          return setWarning(result.message);
        }
        return setWarning("Hệ thống đã gặp sự cố. Vui lòng thử lại sau!");
      } else {
        setWarning("");
        setRole(result.user.userRole);
        setFullName(result.employeeFullName);
        const resultFromNextServer = await fetch("/api/auth", {
          method: "POST",
          body: JSON.stringify(result),
          headers: {
            "Content-Type": "application/json",
          },
        }).then(async (res) => {
          const payload = await res.json();
          const data = {
            status: res.status,
            payload,
          };
          if (!res.ok) {
            throw data;
          }
          return data;
        });
        console.log(resultFromNextServer);
        setSessionToken(resultFromNextServer.payload.session.token);
      }

      // Chuyển đến dashboard
      setTimeout(() => {
        router.push("dashboard");
      }, 100);
    } catch (error) {
      setWarning("Lỗi kết nối. Vui lòng kiểm tra lại internet");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const subtitle = "Tinh thần tốc độ - Dịch vụ hoàn hảo";

  return (
    <form
      onSubmit={collectData}
      method="POST"
      style={{
        boxShadow: "0px 0px 20px 10px rgb(0 0 0 / 0.1)",
        backgroundColor: "rgb(255 255 255 /1)",
      }}
      className="form-container px-8 pt-16 pb-4 w-full h-full rounded-[32px] flex flex-col gap-4 justify-between items-center"
    >
      <div className="login-container lg:w-[406px] items-start flex flex-col gap-4 ">
        <div className="title flex flex-col w-full gap-[2px] items-center border-b border-gray-300 border-dashed pb-4">
          <p className="titleText text-2xl font-bold text-primaryText300">
            Đăng nhập
          </p>
          <p className="subtitle text-normalText text-base font-medium">
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
          className="flex flex-row gap-[6px] w-full h-[42px] hover:opacity-90 active:opacity-50 duration-300 bg-primaryText300 rounded-md justify-center items-center"
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
      </div>
      <div className="banner h-full w-full rounded-md shadow-lg "></div>
      <a
        className="text-sm font-medium hover:underline w-auto text-primaryText300"
        href="/forgot"
      >
        Quên mật khẩu?
      </a>
    </form>
  );
};

export default LoginForm;

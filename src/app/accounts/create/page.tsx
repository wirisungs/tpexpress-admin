"use client";
import Input, {
  InputSelection,
  InputWithIcon,
} from "@/components/CommonComponents/Inputs/Inputs";
import Navbar from "@/components/CommonComponents/Layout/Navbar";
import TitleBar from "@/components/CommonComponents/Layout/bars/TitleBar";
import React, { FormEvent, useState } from "react";

const UserEnroll = () => {
  const [userFullname, setUserFullname] = useState<string>("");
  const [userPhone, setUserPhone] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [confirmPass, setConfirmPass] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [userRole, setUserRole] = useState<string>("");
  const [warning, setWarning] = useState<string>("");
  const roleOptions: { [key: string]: string } = {
    "--- Chọn chức vụ ---": "None",
    Driver: "Driver",
    Admin: "Admin",
    Support: "Support",
    Saleman: "Saleman",
  };

  const handleRoleChange = (value: string) => {
    setUserRole(value);
  };

  const collectData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(userFullname, userPhone, userPassword, email, userRole);

    // Kết nối với database
    try {
      const response = await fetch("http://localhost:5000/api/user/addUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userFullname: userFullname,
          userPassword: userPassword,
          userEmail: email,
          userPhone: userPhone,
          userRole: userRole,
        }),
      });
      const result = await response.json();
      if (!response.ok) {
        if (result.message) {
          setWarning(result.message);
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setWarning(result.message);
    } catch (error) {
      console.error("Error collecting data:", error);
    }
  };
  return (
    <div className="flex">
      <Navbar>
        <div className="body flex flex-col gap-6 h-full">
          <TitleBar text={"Đăng ký tài khoản"} />
          <form
            onSubmit={collectData}
            className="w-full flex-1 h-full bg-white rounded-md p-6 flex flex-col gap-6"
          >
            <div className="flex flex-row w-full gap-6">
              <div className="flex flex-col flex-1 gap-4">
                <Input
                  placeholder="VD: Trần Văn A"
                  border={true}
                  label="Họ và tên"
                  value={userFullname}
                  onChange={(e) => setUserFullname(e.target.value)}
                />
                <Input
                  placeholder="VD: 0123456789"
                  border={true}
                  label="Số điện thoại"
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                />
                <InputWithIcon
                  placeholder="VD: abc@123"
                  border={true}
                  purpose="password"
                  label="Mật khẩu"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                />
                <InputWithIcon
                  placeholder="VD: abc@123"
                  border={true}
                  purpose="password"
                  label="Nhập lại mật khẩu"
                  value={confirmPass}
                  onChange={(e) => setConfirmPass(e.target.value)}
                />
              </div>
              <div className="flex flex-col flex-1 gap-4">
                <Input
                  placeholder="VD: abc@gmail.com"
                  border={true}
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputSelection
                  options={roleOptions}
                  label="Vai trò"
                  onChange={handleRoleChange}
                />
              </div>
            </div>
            <div className="flex flex-col w-full items-center justify-center gap-4 rounded-md">
              {warning && (
                <div
                  style={{
                    backgroundColor: `${
                      warning !== "Đăng ký thành công" ? "#EB455F" : "#0DA651"
                    }`,
                  }}
                  className="flex flex-row items-center px-4 w-full h-[42px] rounded-md"
                >
                  <p className="text-white text-sm font-bold">{warning}</p>
                </div>
              )}
              <button
                type="submit"
                className="flex flex-row gap-[6px] w-64 h-[42px] bg-primaryText300 rounded-md justify-center items-center"
              >
                <div className="text flex items-center text-white font-bold text-xs h-full">
                  Tạo
                </div>
              </button>
            </div>
          </form>
        </div>
      </Navbar>
    </div>
  );
};

export default UserEnroll;

"use client";
import { ButtonBorder } from "@/components/CommonComponents/Buttons/Button";
import TitleBar from "@/components/CommonComponents/Layout/bars/TitleBar";
import Navbar from "@/components/CommonComponents/Layout/Navbar";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import "@/Style/MTri.css";

import { toast } from "react-toastify";
import InfoBox from "@/components/CommonComponents/Box/InfoBox";
import { InputWithIcon } from "@/components/CommonComponents/Inputs/Inputs";

type EmployeeType = {
  employeeId: string;
  employeeName: string;
  employeeEmail: string;
  employeePhone: string;
  userStatus: string;
  userId: string;
};
type UserAccountType = {
  userId: string;
  userPhone: string;
  userRole: string;
  userEmail: string;
  userStatus: string;
};

const AccountDetailPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [employee, setEmployee] = useState<EmployeeType | null>(null);
  const [user, setUser] = useState<UserAccountType | null>(null);
  const [employeePhone, setEmployeePhone] = useState<string>("");
  const [employeeEmail, setEmployeeEmail] = useState<string>("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const searchParams = useSearchParams();
  const id = searchParams.get("id")?.replace(/'/g, "");
  const phone = searchParams.get("phone")?.replace(/'/g, "");
  const router = useRouter();

  // Lấy thông tin tài khoản
  useEffect(() => {
    const fetchEmployeeData = async () => {
      setIsLoading(true);
      try {
        let queryParam = "";
        if (id !== undefined && id !== null) {
          queryParam = `id=${id}`;
        } else if (phone !== undefined && phone !== null) {
          queryParam = `phone=${phone}`;
        }
        const response = await fetch(
          `http://localhost:5000/api/user/acc?${queryParam}`
        );
        if (!response.ok) {
          throw new Error("Driver not found");
        }
        const result = await response.json();
        console.log(result);
        setEmployee(result.employee);
        setUser(result.user);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEmployeeData();
  }, [id, phone]);

  // Hàm dịch role
  const getUserRole = (role: string) => {
    switch (role) {
      case "Admin": {
        return "Quản trị viên";
      }
      case "Support": {
        return "Nhân viên CSKH";
      }
      case "Saleman": {
        return "Nhân viên kinh doanh";
      }
      default: {
        return "---";
      }
    }
  };

  // Chuyển trạng thái từ xem -> chỉnh sửa
  const onClickToEdit = () => {
    setIsEditing(true);
  };

  // Hàm xác nhận cập nhật
  const handleUpdate = async () => {
    if (newPassword !== confirmPassword) {
      toast("Mật khẩu không trùng khớp!");
      return;
    }
    try {
      const response = await fetch(
        `http://localhost:5000/api/user/updateAccount/${user?.userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            newPassword,
            newPhone: employeePhone,
            newEmail: employeeEmail,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        setIsEditing(false);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        toast.error(data.message || "Có lỗi xảy ra!");
      }
    } catch (error) {
      console.error("Error:", error);
      toast("Không thể đổi mật khẩu. Vui lòng thử lại sau!");
    }
  };

  // Hàm xóa tài khoản
  const handleDelete = async () => {
    setIsDeleteLoading(true);
    try {
      const response = await fetch(
        `http://localhost:5000/api/user/deleteAccount/${user?.userId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        const errorResult = await response.json();
        return toast.error(errorResult.message || "Có lỗi xảy ra!");
      }
      const result = await response.json();
      if (result.status === 400 || result.status === 500) {
        return toast.error(result.message);
      }
      toast.success(result.message);
      setTimeout(() => {
        setIsDeleteLoading(false);
        router.push("/accounts");
      }, 3000);
    } catch (error) {
      console.log(error);
    } finally {
      setIsDeleteLoading(false);
    }
  };

  return (
    <div className="flex">
      <Navbar>
        <div className="body flex flex-col gap-6 h-full">
          <TitleBar text="Chi tiết tài xế" />

          {/* Popup xóa nhân viên*/}
          {isDeleteLoading && (
            <div className="spinnerProcessing-container absolute top-1/2 left-1/2 w-64 h-44 bg-white rounded-md shadow-md">
              <div className="spinner"></div>
              <p className="text-base font-bold text-navbarText">
                Đang xóa dữ liệu...
              </p>
            </div>
          )}

          {/* Lấy dữ liệu chi tiết */}
          {isLoading ? (
            <div className="spinner-container">
              <div className="spinner"></div>
              <p className="text-base font-bold text-navbarText">
                Đang tải dữ liệu...
              </p>
            </div>
          ) : (
            // driver details
            <div className="detailBox flex flex-col h-full bg-white items-center">
              <div className="boxHeader w-full flex flex-row">
                <div className="basicDetail flex flex-row bg-white w-full p-6 rounded-md gap-4 ">
                  <div className="detail flex flex-row flex-1 gap-4 w-full">
                    <div className="profileAvt w-[92px] h-[92px] rounded-full bg-gray-300" />
                    <div className="flex flex-col justify-center gap-1">
                      <div className="textIcon flex flex-row items-center justify-between gap-3">
                        <p className="Name text-base text-navbarText font-bold">
                          {employee ? employee.employeeName : ""}
                        </p>
                      </div>
                      <div className="textIcon flex flex-row items-center justify-between gap-3">
                        {isEditing ? (
                          <input
                            className="placeholder:text-xs outline-none text-xs text-normalText"
                            placeholder={
                              employee && employee.employeePhone
                                ? String(employee.employeePhone)
                                : "Bổ sung"
                            }
                            value={employeePhone}
                            onChange={(e) => setEmployeePhone(e.target.value)}
                          />
                        ) : (
                          <p className="Address text-xs text-navbarText text-wrap">
                            {employee && employee.employeePhone !== null
                              ? employee.employeePhone
                              : "Bổ sung"}
                          </p>
                        )}
                      </div>
                      <div className="textIcon flex flex-row items-center justify-between gap-3">
                        {isEditing ? (
                          <input
                            className="placeholder:text-xs outline-none text-xs text-normalText"
                            placeholder={
                              employee && employee.employeeName
                                ? employee.employeeEmail
                                : "Bổ sung"
                            }
                            value={employeeEmail}
                            onChange={(e) => setEmployeeEmail(e.target.value)}
                          />
                        ) : (
                          <p className="Address text-xs text-navbarText text-wrap">
                            {employee && employee.employeeEmail !== null
                              ? employee.employeeEmail
                              : "Bổ sung"}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 detailsBox h-full bg-white pb-6 flex flex-col w-full gap-6 items-center">
                <div className="driverInfo flex flex-col gap-6 w-full">
                  <p className="text-2xl">Tài khoản</p>
                  <div className="detailsBox flex flex-row w-full gap-6">
                    <div className="flex flex-col gap-3 w-full">
                      <InfoBox
                        label="Mã tài khoản"
                        content={user ? user.userId : "Không có!"}
                      />
                      <InfoBox
                        label="Trạng thái hoạt động"
                        content={
                          user && user.userStatus === "deactive"
                            ? "Không hoạt động"
                            : "Đang hoạt động"
                        }
                        color={
                          user && user.userStatus === "deactive"
                            ? "#ff0000"
                            : "#22bb33"
                        }
                      />
                      {isEditing && (
                        <InputWithIcon
                          purpose="password"
                          placeholder="Nhập mật khẩu"
                          label="Mật khẩu mới"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          border={true}
                        />
                      )}
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                      <InfoBox
                        label="Mã nhân viên"
                        content={employee ? employee.employeeId : "Không có!"}
                      />
                      <InfoBox
                        label="Vai trò"
                        content={getUserRole(user ? user.userRole : "")}
                      />
                      {isEditing && (
                        <InputWithIcon
                          purpose="password"
                          placeholder="Nhập mật khẩu"
                          label="Nhập lại mật khẩu"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          border={true}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row h-full gap-6">
                <div className="flex items-center w-[342px]">
                  {isEditing ? (
                    <button
                      onClick={() => handleUpdate()}
                      className="flex flex-row gap-[6px] w-full h-[42px] bg-primaryText300 rounded-md justify-center items-center"
                    >
                      <div className="text flex items-center text-white font-bold text-xs h-full">
                        Lưu thay đổi
                      </div>
                    </button>
                  ) : (
                    <button
                      onClick={() => onClickToEdit()}
                      className="flex flex-row gap-[6px] w-full h-[42px] bg-primaryText300 rounded-md justify-center items-center"
                    >
                      <div className="text flex items-center text-white font-bold text-xs h-full">
                        Chỉnh sửa
                      </div>
                    </button>
                  )}
                </div>
                <div
                  className="flex items-center w-[342px]"
                  onClick={() => handleDelete()}
                >
                  <ButtonBorder text="Xóa tài khoản" />
                </div>
              </div>
            </div>
          )}
        </div>
      </Navbar>
    </div>
  );
};

export default AccountDetailPage;

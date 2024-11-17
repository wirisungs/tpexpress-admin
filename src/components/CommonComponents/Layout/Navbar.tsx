"use client";
import React, { ReactNode, useEffect, useState } from "react";
import NavbarTab from "./Items/NavbarTab";
import GetToken from "@/app/libs/GetToken";
import RemoveToken from "@/app/libs/RemoveToken";
import { useRouter } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
}

const Navbar: React.FC<LayoutProps> = React.memo(({ children }) => {
  const [userName, setUserName] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);

  const router = useRouter();

  // Kiểm tra và lấy thông tin từ localStorage nếu có
  useEffect(() => {
    const getData = async () => {
      const gettedToken = await GetToken();
      if (!gettedToken) {
        return router.push("/");
      }

      // Kiểm tra nếu đã có thông tin người dùng trong localStorage
      const storedUserName = localStorage.getItem("userName");
      const storedUserRole = localStorage.getItem("userRole");

      if (storedUserName && storedUserRole) {
        setUserName(storedUserName);
        setUserRole(storedUserRole);
      } else {
        if (gettedToken?.value) {
          await fetchUserData(gettedToken.value);
        }
      }
    };
    getData();
  }, [router]);

  // Hàm gọi API để lấy thông tin người dùng
  const fetchUserData = async (token: string) => {
    try {
      const res = await fetch("http://localhost:5000/api/user/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch user data");
      }

      const gettedData = await res.json();
      console.log(gettedData);
      const userNameFromAPI = gettedData.data?.userName;
      const userRoleFromAPI = gettedData.data?.userRole;

      // Lưu thông tin vào state và localStorage
      setUserName(userNameFromAPI);
      setUserRole(userRoleFromAPI);
      localStorage.setItem("userName", userNameFromAPI);
      localStorage.setItem("userRole", userRoleFromAPI);
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userRole");
    RemoveToken();
    router.push("/");
  };

  return (
    <div className="MainContainer flex flex-row min-h-[100vh] w-full">
      <div
        className="NavbarContainer flex flex-col md:w-[20%] lg:w-[15%] gap-3"
        style={{
          backgroundColor: "#ffffff",
          boxShadow: "2px 0px 8px rgb(0 0 0 / 0.1)",
          zIndex: 10,
        }}
      >
        <div className="flex flex-col items-center md:items-start pl-8 pb-4 pt-6 pr-6 h-[78px]">
          <div className="flex flex-row justify-center md:justify-between gap-3 w-full items-center">
            <p className="Username text-base font-bold h-full items-center text-ellipsis hidden md:flex">
              {userName || "Loading..."}
            </p>
            <div className="profileAvt flex w-8 h-8 rounded-full md:hidden"></div>
          </div>
          <p className="Username text-xs text-subtitleText h-full items-center text-ellipsis hidden md:flex">
            {userRole === "Driver" ? "Tài xế" : "Quản trị viên"}
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <NavbarTab />
          {/* Nút đăng xuất */}
          <div className="w-full h-[42px] p-4">
            <button
              className="w-full h-[42px] rounded-md bg-primaryText300 text-sm text-white font-bold"
              onClick={() => logout()}
            >
              Đăng xuất
            </button>
          </div>
        </div>
      </div>
      <div className="bodyContainer bg-[#f9f9f9] md:w-[80%] lg:w-[85%] h-full p-6 overflow-y-auto">
        {children}
      </div>
    </div>
  );
});

Navbar.displayName = "Navbar";
export default Navbar;

"use client";
import React, { ReactNode, useEffect, useState } from "react";
import NavbarTab from "./Items/NavbarTab";
import GetToken from "@/app/libs/GetToken";
import RemoveToken from "@/app/libs/RemoveToken";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { useRole } from "@/contexts/RoleContext";
import { useUserName } from "@/contexts/UsernameContext";

interface LayoutProps {
  children: ReactNode;
}

const Navbar: React.FC<LayoutProps> = React.memo(({ children }) => {
  const [userName, setUserName] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);

  const { role } = useRole();
  const { fullName } = useUserName();

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
      console.log(userRole);
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

  const getRole = (Role: string) => {
    switch (Role) {
      case "Driver": {
        return "Tài xế";
      }
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
        return "Không xác định"; // Xử lý trường hợp Role không khớp
      }
    }
  };
  return (
    <div className="MainContainer flex flex-row min-h-screen w-full">
      {/* Navbar */}
      <div
        className="NavbarContainer flex flex-col min-w-[200px] max-w-[300px] md:w-[20%] lg:w-[15%] gap-3"
        style={{
          backgroundColor: "#ffffff",
          boxShadow: "2px 0px 8px rgb(0 0 0 / 0.1)",
          zIndex: 10,
        }}
      >
        {/* User info */}
        <div className="flex flex-col items-center md:items-start pl-8 pb-4 pt-6 pr-6 h-auto overflow-hidden gap-1">
          <div className="flex flex-row w-full overflow-hidden">
            <p className="Username text-base text-nowrap font-bold hidden md:flex overflow-hidden text-ellipsis whitespace-nowrap max-w-full h-10">
              {fullName ? fullName : "Loading..."}
            </p>
            <div className="profileAvt flex w-8 h-8 rounded-full md:hidden"></div>
          </div>
          <p className="Username text-xs text-subtitleText h-full hidden md:flex overflow-hidden whitespace-nowrap text-ellipsis max-w-full">
            {role ? getRole(role) : "Loading..."}
          </p>
        </div>

        {/* Navbar tabs */}
        <div className="flex flex-col justify-between flex-1">
          <NavbarTab userRole={role ? role : "None"} />
          <div className="w-full h-auto px-4 py-6">
            <button
              className="w-full h-[42px] rounded-md bg-primaryText300 text-sm text-white font-bold"
              onClick={() => logout()}
            >
              Đăng xuất
            </button>
          </div>
        </div>
      </div>

      {/* Body content */}
      <div className="bodyContainer bg-[#f9f9f9] flex-1 min-h-screen p-6 overflow-y-auto">
        <ToastContainer />
        {children}
      </div>
    </div>
  );
});

Navbar.displayName = "Navbar";
export default Navbar;

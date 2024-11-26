import React from "react";
import { SSO } from "@htilssu/wowo";
import TPLogo from "@/Svg/LogoDog";

const Form = () => {
  const subtitle = "Giao hàng bằng cả tính mạng";
  const sso = new SSO("TPE");

  const handleSSOLogin = () => {
    sso.redirectToLogin("http://10.0.2.2:4000/callback");
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        backgroundSize: "cover", // Bao phủ toàn bộ khu vực
        backgroundPosition: "center", // Căn giữa hình ảnh
        width: "100vw", // Đảm bảo chiều rộng bằng 100% màn hình
        height: "100vh", // Đảm bảo chiều cao bằng 100% màn hình
        display: "flex", // Căn giữa nội dung form
        justifyContent: "center", // Căn giữa theo chiều ngang
        alignItems: "center", // Căn giữa theo chiều dọc
        overflow: "hidden", // Ẩn mọi phần thừa
      }}
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        method="POST"
        style={{
          boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.2)",
          padding: "16px",
          borderRadius: "12px",
          margin: "0 auto",
          maxWidth: "400px",
          width: "90%",
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Nền trắng mờ cho form
          display: "flex", // Sử dụng flex để căn giữa nội dung trong form
          flexDirection: "column", // Đặt logo và các phần tử khác theo chiều dọc
          alignItems: "center", // Căn giữa các phần tử theo chiều ngang
        }}
        className="form-container"
      >
        {/* Đặt TPLogo vào form và căn giữa */}
        <TPLogo style={{ marginBottom: "20px" }} /> {/* Khoảng cách giữa logo và các phần tử bên dưới */}

        <div className="title flex flex-col gap-[6px] text-center">
          <p className="titleText text-[24px] font-bold text-primaryText300">
            THIEN PHUC DRIVER
          </p>
          <p className="subtitle text-yellowText font-medium">{subtitle}</p>
        </div>

        <button
          type="button"
          onClick={handleSSOLogin}
          style={{
            width: "100%",
            backgroundColor: "#EB455F",
            color: "white",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            marginTop: "12px"
          }}
        >
          Đăng nhập với WoWo
        </button>
      </form>
    </div>
  );
};

export default Form;

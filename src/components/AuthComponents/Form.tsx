import React from "react";
import { SSO } from '@htilssu/wowo';

const Form = () => {
  const subtitle = "Tinh thần tốc độ - Dịch vụ hoàn hảo";
  const sso = new SSO('TPE');

  const handleSSOLogin = () => {
    // Gọi phương thức redirectToLogin với URL callback
    sso.redirectToLogin('http://tpexpress.ddns.net:4000/callback');
  };

  return (

    <form
      onSubmit={(e) => e.preventDefault()} 
      method="POST"
      style={{
        boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.2)",
        padding: "16px",
        borderRadius: "12px",
        margin: "0 auto",
        maxWidth: "400px", // Giới hạn chiều rộng cho thiết bị di động
        width: "90%", // Đảm bảo form không chiếm quá 90% chiều rộng màn hình
      }}
      className="form-container"
    >
      <div className="login-container flex flex-col gap-4">
        <div className="title flex flex-col gap-[6px] text-center">
          <p className="titleText text-[24px] font-bold text-primaryText300">
            Đăng nhập
          </p>
          <p className="subtitle text-yellowText font-medium">{subtitle}</p>
        </div>
        <button
          type="button" // Đảm bảo rằng button không gửi form
          onClick={handleSSOLogin}
          style={{
            width: "100%",
            backgroundColor: "#EB455F", // Màu sắc tùy chỉnh
            color: "white", // Màu chữ
            padding: "12px", // Padding cho nút
            borderRadius: "8px", // Đường viền nút
            border: "none", // Không có đường viền
            cursor: "pointer", // Con trỏ khi hover
            fontSize: "16px", // Kích thước chữ nút
          }}
        >
          Đăng nhập bằng Wowo
        </button>
       
      </div>
    </form>
  );
};

export default Form;

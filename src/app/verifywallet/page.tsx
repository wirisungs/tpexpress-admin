'use client';

import React, { useState, useEffect } from "react";
import { OrderResponse, WoWoWallet, CreateOrderProps } from "@htilssu/wowo";
import TPLogo from "@/Svg/LogoDog"; // Import logo component

const VerifyWallet: React.FC = () => {
  const [orderResponse, setOrderResponse] = useState<OrderResponse | null>(null);
  const [createOrderProps, setCreateOrderProps] = useState<CreateOrderProps | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null); 
  const subtitle = "Tinh thần tốc độ - Dịch vụ hoàn hảo";
  const wowoWallet = new WoWoWallet("78bebbc1a225514c510c39ebbad0bfacea598596c0b4a50552554b018d8f91fd");

  // Lấy token từ URL nếu có
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get('Token');
    if (tokenFromUrl) {
      setToken(tokenFromUrl); 
    } else {
      console.error("Không tìm thấy token trong URL.");
    }

    // Lấy items và totalPrice từ window object
    if (window.items) {
      setItems(window.items); // Set items được truyền từ React Native
    }
  }, []);

  const orderProps = {
    // orderId: window.orderId,
    money: window.totalPrice || 0,
    serviceName: "TPE",
    items: items.map((item) => ({
      name: item.Item_Name,
      amount: item.amount || 1,
      unitPrice: item.Item_AllValue,
    })),
    callback: {
      successUrl: "http://tpexpress.ddns.net:4000/callbackW",
      returnUrl: "http://tpexpress.ddns.net:4000/walletsuccess",
    },
  };

  const handleCreateOrder = async () => {
    setLoading(true);
    try {
      const response = await wowoWallet.createOrder(orderProps);
      setOrderResponse(response);
      setCreateOrderProps(response); 
    
      if (response?.checkoutUrl) {
        // Lưu các thông tin cần thiết vào localStorage
        localStorage.setItem("checkoutUrl", response.checkoutUrl);
        localStorage.setItem("returnUrl", orderProps.callback.returnUrl);
        localStorage.setItem("tiken", response.id);
  
        // Chuyển hướng đến checkoutUrl
        window.location.href = response.checkoutUrl;
      } else {
        console.error("Không tìm thấy checkoutUrl trong phản hồi đơn hàng.");
        setError("Đã xảy ra lỗi khi tạo đơn hàng. Vui lòng thử lại.");
      }
    } catch (err: any) {
      console.error("Lỗi khi tạo đơn hàng:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <div
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <TPLogo style={{ marginBottom: "20px" }} />

        <div className="title flex flex-col gap-[6px] text-center">
          <p className="titleText text-[24px] font-bold text-primaryText300">
            THIEN PHUC EXPRESS
          </p>
          <p className="subtitle text-yellowText font-medium">{subtitle}</p>
        </div>
       

        <button
          type="button"
          onClick={handleCreateOrder}
          disabled={loading}
          style={{
            width: "100%",
            backgroundColor: loading ? "#ccc" : "#EB455F",
            color: "white",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            cursor: loading ? "not-allowed" : "pointer",
            fontSize: "16px",
            marginTop: "12px",
          }}
        >
          {loading ? "Đang xử lý..." : "Thanh toán bằng WoWo wallet"}
        </button>
      </form>

      {orderResponse && (
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "12px",
          borderRadius: "8px",
          boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.2)",
          maxWidth: "600px",
          width: "90%",
          wordWrap: "break-word",
          overflow: "auto",
        }}
      >
        <h4>Phản hồi từ WoWo Wallet:</h4>
        <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
          {JSON.stringify(orderResponse.id, null, 2)}
        </pre>
      </div>
    )}

      {/* Hiển thị lỗi nếu có */}
      {error && (
        <p
          style={{
            position: "absolute",
            bottom: "20px",
            color: "red",
            fontSize: "14px",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default VerifyWallet;

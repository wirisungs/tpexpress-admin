'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const WalletSuccess = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);

  useEffect(() => {
      // Lấy checkoutUrl từ sessionStorage hoặc bất kỳ nơi nào bạn lưu trữ nó trước đó
      const savedCheckoutUrl = sessionStorage.getItem("checkoutUrl"); // Hoặc localStorage nếu bạn muốn lưu lâu dài

      if (savedCheckoutUrl) {
          setCheckoutUrl(savedCheckoutUrl);
      }
      setLoading(false);
  }, []);

  const handleContinue = () => {
      if (checkoutUrl) {
          // Lấy returnUrl từ phản hồi ví điện tử (nếu có)
          const returnUrl = sessionStorage.getItem("returnUrl"); // Giả sử returnUrl được lưu trước đó

          if (returnUrl) {
              // Nếu có returnUrl, chuyển hướng về trang đó
              window.location.href = returnUrl;
          } else {
              // Nếu không có returnUrl, quay lại trang thanh toán
              window.location.href = checkoutUrl;
          }
      }
  };

  const handleCancel = async () => {
    // Kiểm tra nếu ứng dụng đang chạy trong WebView
    if (window.ReactNativeWebView) {
      // Nếu đang trong WebView, gửi thông điệp về React Native WebView (không cần token)
      window.ReactNativeWebView.postMessage("Cancel action"); // Hoặc bất kỳ thông điệp nào bạn muốn gửi
    } else {
      // Nếu không phải trong WebView, chuyển hướng đến trang dashboard
      console.log("Không phải WebView, chuyển hướng đến dashboard...");
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Chờ 2 giây
      router.push('/dashboard'); // Chuyển hướng đến trang dashboard
    }
  };
  

  return (
      <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f5f5f5",
          padding: "16px",
          textAlign: "center",
      }}>
          {loading ? (
              <p>Đang xử lý thông tin đơn hàng...</p>
          ) : (
              <div>
                  <h2>Đơn hàng của bạn đã được xử lý!</h2>
                  {/* <p style={{ marginBottom: "20px" }}>Đường dẫn thanh toán của bạn: <strong>{checkoutUrl}</strong></p> */}
                  <div style={{ marginTop: "20px" }}>
                      <button onClick={handleContinue} style={{
                          backgroundColor: "#4CAF50",
                          color: "white",
                          padding: "12px",
                          borderRadius: "8px",
                          margin: "0 8px",
                          cursor: "pointer",
                          border: "none"
                      }}>
                          Tiếp tục thanh toán
                      </button>
                      <button onClick={handleCancel} style={{
                          backgroundColor: "#EB455F",
                          color: "white",
                          padding: "12px",
                          borderRadius: "8px",
                          margin: "0 8px",
                          cursor: "pointer",
                          border: "none"
                      }}>
                          Hủy giao dịch
                      </button>
                  </div>
              </div>
          )}
      </div>
  );
};

export default WalletSuccess;

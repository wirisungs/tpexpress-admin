'use client';
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const SuccessPage: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true); // Trạng thái loading

  useEffect(() => {
    const processToken = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token'); // Lấy token từ URL

      if (token) {
        console.log("Token nhận được:", token);

        // Kiểm tra nếu chạy trong WebView
        if (window.ReactNativeWebView) {
          window.ReactNativeWebView.postMessage(token); // Gửi token qua WebView
        } else {
          console.log("Không phải WebView, chuyển hướng đến dashboard...");
          await new Promise((resolve) => setTimeout(resolve, 2000)); // Chờ 2 giây
          router.push('/dashboard'); // Chuyển hướng đến dashboard
        }
      } else {
        console.error("Không tìm thấy token trong URL");
        setLoading(false);

        // Chờ 2 giây rồi chuyển hướng đến login
        await new Promise((resolve) => setTimeout(resolve, 2000));
        router.push('/login');
      }
    };

    processToken();
  }, [router]);

  return (
    <div style={{
      textAlign: 'center',
      padding: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5',
    }}>
      {loading ? (
        <p style={{ fontSize: '18px', color: '#333' }}>Đang xử lý thanh toán, vui lòng đợi...</p>
      ) : (
        <p style={{ fontSize: '18px', color: '#ff0000' }}>Không tìm thấy token. Đang chuyển hướng...</p>
      )}
    </div>
  );
};

export default SuccessPage;

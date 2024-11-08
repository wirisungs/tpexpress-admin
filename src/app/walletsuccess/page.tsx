'use client';
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const SuccessPage: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token'); // Sử dụng 'token' để lấy token từ URL

    if (token) {
      console.log("Token nhận được:", token); // Log token nếu cần

      // Kiểm tra nếu ReactNativeWebView có tồn tại
      if (window.ReactNativeWebView) {
        window.ReactNativeWebView.postMessage(token); // Gửi token về ứng dụng qua WebView
      } else {
        // Chuyển hướng đến dashboard nếu không có ReactNativeWebView
        setTimeout(() => {
          router.push('/dashboard');
        }, 2000);
      }
    } else {
      console.error("Không tìm thấy token trong URL");
      setLoading(false);

      // Chuyển hướng đến trang login nếu không có token
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    }
  }, [router]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {loading ? (
        <p>Đang xử lý...</p>
      ) : (
        <p>Không tìm thấy token. Đang chuyển hướng...</p>
      )}
    </div>
  );
};

export default SuccessPage;

'use client';
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CallbackPage: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('Token');

    if (token) {
      // Gửi token về ứng dụng
      if (window.ReactNativeWebView) {
        window.ReactNativeWebView.postMessage(token); // Gửi giá trị token về ứng dụng
      } else {
        console.error("ReactNativeWebView không được tìm thấy.");
      }

      // Chuyển hướng về trang dashboard sau một khoảng thời gian
      setTimeout(() => {
        router.push('/dashboard');
      }, 2000);
    } else {
      console.error("No token found in the URL");
      setLoading(false);

      // Chuyển hướng về trang login nếu không có token
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

export default CallbackPage;

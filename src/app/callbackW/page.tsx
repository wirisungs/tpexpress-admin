'use client';
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const CallbackPageW: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('Token');

    if (token) {
      // Chuyển hướng đến trang success và truyền token dưới dạng query parameter
      router.push(`/success?token=${token}`);
    }
  }, [router]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <p>Đang xử lý đơn hàng của bạn...</p>
    </div>
  );
};

export default CallbackPageW;

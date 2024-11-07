'use client';
import React from "react";

const TestData: React.FC = () => {
  const handleSendData = () => {
    const valueToSendBack = "ThienPhucExpress"; // Giá trị bạn muốn gửi về ứng dụng
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(valueToSendBack); // Gửi giá trị về ứng dụng
    } else {
      console.error("ReactNativeWebView không được tìm thấy.");
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <p>Đang chuyển dữ liệu về ứng dụng...</p>
      <button onClick={handleSendData} style={{ padding: '10px 20px', marginTop: '20px' }}>
        Gửi dữ liệu về ứng dụng
      </button>
    </div>
  );
};

export default TestData;

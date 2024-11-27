'use client';
import { OrderResponse, WoWoWallet } from "@htilssu/wowo";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const WalletSuccess = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [token, setToken] = useState<string | null>(null); // Chỉ lưu token từ localStorage
  const [orderData, setOrderData] = useState<OrderResponse | null>(null);  
  const wowoWallet = new WoWoWallet("78bebbc1a225514c510c39ebbad0bfacea598596c0b4a50552554b018d8f91fd");

  useEffect(() => {
    // Lấy token từ localStorage nếu có
    const savedToken = localStorage.getItem('tiken');
    if (savedToken) {
      setToken(savedToken);
    } else {
      console.error('Không tìm thấy token trong localStorage.');
    }

    setLoading(false);
  }, []);

  const handleContinue = () => {
    // Lấy checkoutUrl từ localStorage và chuyển hướng
    const savedCheckoutUrl = localStorage.getItem('checkoutUrl');
    if (savedCheckoutUrl) {
      window.location.href = savedCheckoutUrl;
    }
  };

  const handleCancel = async () => {
  
    // await handleGetOrder();
    if (window.ReactNativeWebView) {
      // Tạo payload chứa thông tin cần gửi
      const payload = { 
        id: orderData?.id,       // ID đơn hàng
        status: orderData?.status, // Trạng thái đơn hàng
        money: orderData?.discountMoney, // Số tiền giảm
      };
  
      // Gửi payload về ứng dụng React Native
      window.ReactNativeWebView.postMessage(JSON.stringify(payload));
    } else {
      // Nếu không phải WebView, log thông báo và chuyển hướng
      console.log('Không phải WebView, chuyển hướng đến dashboard...');
  
      // Giả lập delay trước khi chuyển hướng
      await new Promise((resolve) => setTimeout(resolve, 2000));
      router.push('/dashboard');
    }
  };
  

  const handleGetOrder = async () => {
    try {
      const response = await wowoWallet.getOrder(token);
      console.log("Đơn hàng đã được lấy:", response);
      setOrderData(response);  // Lưu dữ liệu vào state
    } catch (err: any) {
      console.error("Lỗi khi hủy đơn hàng:", err.message);  // Log lỗi nếu có
    }
  };
  
  // Theo dõi khi orderData thay đổi
  useEffect(() => {
    if (orderData) {
      // Khi orderData đã được cập nhật, gọi handleCancel
      handleCancel();
    }
  }, [orderData]);
  
 
  

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        padding: '16px',
        textAlign: 'center',
      }}
    >
      {loading ? (
        <p>Đang xử lý thông tin đơn hàng...</p>
      ) : (
        <div>
          <h2>Đơn hàng của bạn đang được xử lý trong vòng 15p!</h2>
          <h2>Nếu đã bấm thanh toán vui lòng quay trở lại TPExpress</h2>
          {orderData && (
            <div style={{ marginTop: '20px' }}>
              <h3>Thông tin đơn hàng:</h3>
              <pre>ID:{JSON.stringify(orderData.id)}</pre> 
              <pre>Status:{JSON.stringify(orderData.status)}</pre>  
              <pre>Money:{JSON.stringify(orderData.discountMoney)}</pre> 
              
            </div>
          )}

           
        
          <div style={{ marginTop: '20px' }}>
            <button
              onClick={handleContinue}
              style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '12px',
                borderRadius: '8px',
                margin: '0 8px',
                cursor: 'pointer',
                border: 'none',
              }}
            >
              Tiếp tục thanh toán
            </button>
            <button
              onClick={handleGetOrder}
              style={{
                backgroundColor: '#EB455F',
                color: 'white',
                padding: '12px',
                borderRadius: '8px',
                margin: '0 8px',
                cursor: 'pointer',
                border: 'none',
              }}
            >
              Quay về ứng dụng
            </button>
            {/* <button
              onClick={handleGetOrder}
              style={{
                backgroundColor: '#EB455F',
                color: 'white',
                padding: '12px',
                borderRadius: '8px',
                margin: '0 8px',
                cursor: 'pointer',
                border: 'none',
              }}
            >
              Lấy Status 
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletSuccess;

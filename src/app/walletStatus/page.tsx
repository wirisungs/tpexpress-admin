'use client';
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { OrderResponse, WoWoWallet } from "@htilssu/wowo";

const WalletStatus = () => {
  const router = useRouter();
  const [idFromApp, setIdFromApp] = useState<string | null>(null);
  const [orderData, setOrderData] = useState<OrderResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Trạng thái loading
  const wowoWallet = new WoWoWallet(
    "78bebbc1a225514c510c39ebbad0bfacea598596c0b4a50552554b018d8f91fd"
  );

  useEffect(() => {
    const id = (window as any).id;
    if (id) {
      console.log("ID nhận từ app:", id);
      setIdFromApp(id);
      handleGetOrder(id);
    } else {
      console.error("Không tìm thấy `id` từ app.");
      setIsLoading(false); // Tắt loading nếu không có id
    }
  }, []);

  const handleCancel = async () => {
    try {
      if (window.ReactNativeWebView) {
        const payload = {
          status: orderData?.status,
        };
        console.log("Gửi phản hồi về ứng dụng:", payload);
        window.ReactNativeWebView.postMessage(JSON.stringify(payload));
      } else {
        console.error("Không phải ReactNativeWebView, fallback về dashboard...");
        router.push('/dashboard');
      }
    } catch (error) {
      console.error("Lỗi khi gửi phản hồi:", error);
    } finally {
      setIsLoading(false); // Tắt loading sau khi xử lý xong
    }
  };

  const handleGetOrder = async (id: string) => {
    try {
      const response = await wowoWallet.getOrder(id);
      console.log("Đơn hàng đã được lấy:", response);
      setOrderData(response); // Lưu dữ liệu vào state
    } catch (err: any) {
      console.error("Lỗi khi lấy đơn hàng:", err.message);
    } finally {
      setIsLoading(false); // Tắt loading ngay cả khi xảy ra lỗi
    }
  };

  useEffect(() => {
    if (orderData) {
      handleCancel();
    }
  }, [orderData]);

  return (
    <div style={{ padding: "16px", textAlign: "center" }}>
      {isLoading ? (
        <div>
          <h2>Đang tải...</h2>
          <p>Vui lòng đợi trong giây lát.</p>
        </div>
      ) : (
        <div>
          <h2>Đã xử lý xong!</h2>
        </div>
      )}
    </div>
  );
};

export default WalletStatus;

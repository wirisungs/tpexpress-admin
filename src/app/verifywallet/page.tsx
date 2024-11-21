'use client'; // Add this line to make the component a Client Component

import React, { useState, useEffect } from 'react';
import { OrderResponse, WoWoWallet } from '@htilssu/wowo';
import TPLogo from "@/Svg/LogoDog"; // Import logo component

const VerifyWallet = () => {
    const [orderResponse, setOrderResponse] = useState<OrderResponse | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [items, setItems] = useState([]);
    const subtitle = "Tinh thần tốc độ - Dịch vụ hoàn hảo";
    const wowoWallet = new WoWoWallet("ngthuythienphuc2002@gmail.com");

    // Get items and totalPrice from window object passed from React Native
    useEffect(() => {
        if (window.items) {
            setItems(window.items); // Set items from React Native
        }
    }, []);

    const orderProps = {
        money: window.totalPrice || 0,
        serviceName: "Dịch vụ giao hàng TPE",
        items: items.map(item => ({
            name: item.Item_Name,
            amount: item.amount || 1,
            unitPrice: item.Item_AllValue
        })),
        callback: {
            successUrl: "http://tpexpress.ddns.net:4000/callbackW",
            returnUrl: "http://tpexpress.ddns.net:4000/walletsuccess"
        }
    };

    const handleCreateOrder = async () => {
        try {
            const response = await wowoWallet.createOrder(orderProps);
            setOrderResponse(response);
            console.log("Đơn hàng đã được tạo:", response);
    
            // Lưu checkoutUrl vào sessionStorage
            if (response?.checkoutUrl) {
                sessionStorage.setItem("checkoutUrl", response.checkoutUrl); // Lưu vào sessionStorage
                window.location.href = response.checkoutUrl; // Chuyển hướng đến trang thanh toán
            }
        } catch (err) {
            console.error("Lỗi khi tạo đơn hàng:", err.message);
            setError(err.message);
        }
    };

    return (
        <div 
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
                backgroundSize: "cover", // Bao phủ toàn bộ khu vực
                backgroundPosition: "center", // Căn giữa hình ảnh
                width: "100vw", // Đảm bảo chiều rộng bằng 100% màn hình
                height: "100vh", // Đảm bảo chiều cao bằng 100% màn hình
                display: "flex", // Căn giữa nội dung form
                justifyContent: "center", // Căn giữa theo chiều ngang
                alignItems: "center", // Căn giữa theo chiều dọc
                overflow: "hidden", // Ẩn mọi phần thừa
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
                    backgroundColor: "rgba(255, 255, 255, 0.9)", // Nền trắng mờ cho form
                    display: "flex", // Sử dụng flex để căn giữa nội dung trong form
                    flexDirection: "column", // Đặt logo và các phần tử khác theo chiều dọc
                    alignItems: "center", // Căn giữa các phần tử theo chiều ngang
                }}
            >
                {/* Đặt TPLogo vào form và căn giữa */}
                <TPLogo style={{ marginBottom: "20px" }} /> {/* Khoảng cách giữa logo và các phần tử bên dưới */}

                <div className="title flex flex-col gap-[6px] text-center">
                    <p className="titleText text-[24px] font-bold text-primaryText300">THIEN PHUC EXPRESS</p>
                    <p className="subtitle text-yellowText font-medium">{subtitle}</p>
                </div>

                <button 
                    type="button" 
                    onClick={handleCreateOrder} 
                    style={{
                        width: "100%",
                        backgroundColor: "#EB455F",
                        color: "white",
                        padding: "12px",
                        borderRadius: "8px",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "16px",
                        marginTop: "12px"
                    }}
                >
                    Thanh toán bằng WoWo wallet
                </button>
            </form>
            {error && <p>Lỗi: {error}</p>}
        </div>
    );
};

export default VerifyWallet;

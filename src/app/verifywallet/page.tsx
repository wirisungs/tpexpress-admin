'use client'; // Add this line to make the component a Client Component

import React, { useState, useEffect } from 'react';
import { OrderResponse, WoWoWallet } from '@htilssu/wowo';

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
            amount: item.amount || 1,  // Adjust based on the item data you pass
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

            // Chờ 3 giây trước khi gửi thông điệp và chuyển trang
            setTimeout(() => {
                if (window.ReactNativeWebView) {
                    window.ReactNativeWebView.postMessage(JSON.stringify(response));
                }
            }, 3000); // Chờ 3 giây

        } catch (err) {
            console.error("Lỗi khi tạo đơn hàng:", err.message);
            setError(err.message);
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f5f5f5" }}>
            <form onSubmit={(e) => e.preventDefault()} method="POST" style={{
                boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.2)",
                padding: "16px",
                borderRadius: "12px",
                margin: "0 auto",
                maxWidth: "400px",
                width: "90%",
                backgroundColor: "white"
            }}>
                <div className="login-container flex flex-col gap-4">
                    <div className="title flex flex-col gap-[6px] text-center">
                        <p className="titleText text-[24px] font-bold text-primaryText300">Thanh toán</p>
                        <p className="subtitle text-yellowText font-medium">{subtitle}</p>
                    </div>
                    <button type="button" onClick={handleCreateOrder} style={{
                        width: "100%",
                        backgroundColor: "#EB455F",
                        color: "white",
                        padding: "12px",
                        borderRadius: "8px",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "16px"
                    }}>
                        Thanh toán bằng WoWo wallet
                    </button>
                    {orderResponse && (
                        <div>
                            <p>Đơn hàng đã được tạo thành công!</p>
                            <p>Total: {orderResponse.money}</p>
                            <p>Items:</p>
                            <ul>
                                {orderResponse.items && orderResponse.items.map((item, index) => (
                                    <li key={index}>
                                        <strong>{item.name}</strong> - {item.amount} x {item.unitPrice} VND
                                    </li>
                                ))}
                            </ul>
                            <p>Checkout URL: {orderResponse.checkoutUrl}</p>
                        </div>
                    )}
                </div>
            </form>
            {error && <p>Lỗi: {error}</p>}
        </div>
    );
};

export default VerifyWallet;

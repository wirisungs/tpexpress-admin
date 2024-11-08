// Định nghĩa kiểu dữ liệu cho đơn hàng
export type CreateOrderProps = {
    orderId?: string;      // Mã đơn hàng (tùy chọn)
    money: number;         // Tổng tiền của hóa đơn
    serviceName: string;   // Tên dịch vụ
    items?: Array<ItemProps>; // Danh sách sản phẩm
    callback: CallbackProps;    // Thông tin callback
}

export type ItemProps = {
    name: string;       
    amount: number;     // Số lượng sản phẩm (phải lớn hơn 0)
    unitPrice: number;  // Giá sản phẩm (phải lớn hơn hoặc bằng 0)
}

export type CallbackProps = {
    successUrl?: string; // URL callback để cập nhật trạng thái đơn hàng khi thanh toán thành công
    returnUrl?: string;  // URL để chuyển hướng người dùng sau khi thanh toán xong
}

// Định nghĩa kiểu dữ liệu cho phản hồi đơn hàng (OrderResponse)
export type OrderResponse = {
    orderId: string;   // Mã đơn hàng
    status: string;    // Trạng thái đơn hàng (ví dụ: "success", "pending", "failed")
    checkoutUrl: string;  // URL để người dùng thanh toán
}

// Hàm tạo đơn hàng (Giả lập API WoWoWallet)
export async function createOrder(props: CreateOrderProps): Promise<OrderResponse> {
    // Gọi API WoWoWallet ở đây nếu có, ví dụ:
    // const response = await fetch('API_ENDPOINT', { ... });

    // Giả lập phản hồi từ API
    const orderResponse: OrderResponse = {
        orderId: "123456",     // Mã đơn hàng giả lập
        status: "success",     // Trạng thái đơn hàng giả lập
        checkoutUrl: "https://example.com/checkout"  // URL thanh toán giả lập
    };

    return orderResponse;
}

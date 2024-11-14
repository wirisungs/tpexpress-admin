import { NextRequest, NextResponse } from "next/server";

const privatePaths = ['/dashboard', '/customers', '/drivers', '/accounts', '/order', '/cskh']
const authPaths = ['/', '/forgot', '/repassword']
export function middleware (request: NextRequest){
    const {pathname} = request.nextUrl
    const sessionToken = request.cookies.get('token');

     // Nếu không có token và người dùng cố gắng truy cập các trang cần bảo mật
     if (!sessionToken && privatePaths.includes(pathname)) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    // Nếu đã có token và người dùng cố gắng truy cập các trang đăng nhập hoặc đăng ký
    if (sessionToken && authPaths.includes(pathname)) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    return NextResponse.next()
}

export const config ={
    matcher: [...privatePaths, ...authPaths]
}
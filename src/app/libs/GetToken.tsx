"use server";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export default async function GetToken() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  return token;
}

export const getRoleFromToken = (token: string): string | null => {
  try {
    const decoded = jwtDecode<{ role: string }>(token);
    return decoded.role || null;
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};

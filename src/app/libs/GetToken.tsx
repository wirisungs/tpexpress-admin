"use server";
import { cookies } from "next/headers";

export default async function GetToken() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  return token;
}

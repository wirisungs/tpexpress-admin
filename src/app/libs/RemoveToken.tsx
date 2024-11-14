"use server";
import { cookies } from "next/headers";

export default async function RemoveToken() {
  const cookieStore = cookies();
  cookieStore.delete("token");
}

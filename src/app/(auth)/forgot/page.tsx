"use client";
import Form from "@/components/AuthComponents/Form";
import AuthLayout from "@/components/CommonComponents/Layout/AuthLayout";
import { useRouter } from "next/navigation"; // Correct import for useRouter in /app directory
import React from "react";

const Page = () => {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/");
  };

  return (
    <div className="w-full">
      <AuthLayout>
        <Form formType="forgot" onSubmit={handleSubmit} />
      </AuthLayout>
    </div>
  );
};

export default Page;

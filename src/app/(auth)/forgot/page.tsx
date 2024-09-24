"use client";
import Form from "@/components/AuthComponents/Form";
import AuthLayout from "@/components/CommonComponents/Layout/AuthLayout";
import React from "react";

const page = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Register");
  };
  return (
    <div className="w-full">
      <AuthLayout>
        <Form formType="forgot" onSubmit={handleSubmit} />
      </AuthLayout>
    </div>
  );
};

export default page;

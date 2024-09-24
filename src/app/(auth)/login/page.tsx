"use client";
import Form from "@/components/AuthComponents/Form";
import AuthLayout from "@/components/CommonComponents/Layout/AuthLayout";
import React from "react";

const login: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Login");
  };
  return (
    <div className="w-full">
      <AuthLayout>
        <Form formType="login" onSubmit={handleSubmit} />
      </AuthLayout>
    </div>
  );
};

export default login;

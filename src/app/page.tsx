"use client";
import Form from "@/components/AuthComponents/Form";
import AuthLayout from "@/components/CommonComponents/Layout/AuthLayout";
import { useRouter } from "next/navigation";

import React from "react";

const Login: React.FC = () => {
  const Router = useRouter();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Router.push("/dashboard");
  };
  return (
    <div className="w-full">
      <AuthLayout>
        <Form formType="login" onSubmit={handleSubmit} />
      </AuthLayout>
    </div>
  );
};

export default Login;

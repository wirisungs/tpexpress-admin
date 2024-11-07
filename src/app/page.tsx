"use client";
import Form from "@/components/AuthComponents/Form";
import AuthLayout from "@/components/CommonComponents/Layout/AuthLayout";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

const Login: React.FC = () => {
  const [phone, setPhone] = useState<string>("");
  const [warning, setWarning] = useState<string>("");
  const Router = useRouter();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (phone.length === 10) {
      // Router.push("/dashboard");
      console.log(phone.length);
    } else {
      setWarning("Phone sai ròi má!");
    }
  };
  return (
    <div className="w-full h-full">
      <AuthLayout>
        <Form
          formType="login"
          onSubmit={handleSubmit}
          phone={phone}
          setPhone={setPhone}
          warning={warning}
        />
      </AuthLayout>
    </div>
  );
};

export default Login;

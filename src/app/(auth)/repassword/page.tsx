"use client";
import ChangePasswordForm from "@/components/AuthComponents/ChangePasswordForm";
import AuthLayout from "@/components/CommonComponents/Layout/AuthLayout";
import React from "react";

const page = () => {
  return (
    <div className="w-full">
      <AuthLayout>
        <ChangePasswordForm />
      </AuthLayout>
    </div>
  );
};

export default page;

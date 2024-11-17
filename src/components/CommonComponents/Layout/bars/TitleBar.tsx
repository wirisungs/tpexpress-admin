"use client";
import React from "react";
import BackIC from "@/Svg/backIC";
import { useRouter } from "next/navigation";

interface titleType {
  text: string;
}

const TitleBar: React.FC<titleType> = ({ text }) => {
  const router = useRouter();
  return (
    <div className="titleBar flex flex-row gap-4 items-center">
      <button
        className="backIcon flex items-center justify-center rounded-md w-8 h-8 bg-backButton"
        onClick={() => router.back()}
      >
        <BackIC />
      </button>
      <p className="title text-normalText text-xl font-bold">{text}</p>
    </div>
  );
};

export default TitleBar;

import React from "react";
import SearchInput from "./SearchInput";
import RegisterButton from "./RegisterButton";

const DriverHeader: React.FC = () => {
  return (
    <section className="flex flex-wrap gap-4 items-center p-6 text-xs bg-zinc-50 max-md:px-5">
      <div className="flex gap-4 items-center self-stretch my-auto min-w-[240px] text-stone-300 w-[443px] max-md:max-w-full">
        <SearchInput placeholder="Nhập mã khách hàng / họ tên / email /...." />
      </div>
      <div className="flex gap-4 items-center self-stretch my-auto text-white min-w-[240px] w-[279px]">
        <RegisterButton text="Đăng ký tài xế" />
      </div>
    </section>
  );
};

export default DriverHeader;

import React from "react";
import Navbar from "@/components/CommonComponents/Layout/Navbar";
import { InputDatePicker } from "@/components/CommonComponents/Inputs/Inputs";
import CommonSpecifications from "../../components/DashboardComponents/CommonSpecifications";
import PendingIC from "@/Svg/pendingIC";
import OrderIC from "@/Svg/orderIC";

const Dashboard: React.FC = () => {
  return (
    <div className="flex ">
      <Navbar>
        <div className="head-reporting flex flex-col gap-4">
          <div className="w-[148px]">
            <InputDatePicker background={true} border={false} />
          </div>
          <div className="flex flex-row gap-6 w-full justify-between">
            <CommonSpecifications
              fluctuationType="none"
              color="#FBECDA"
              quantity={12}
              subtitle="Đơn đang xử lý"
              icon={<PendingIC fill="#FBA333" />}
            />
            <CommonSpecifications
              fluctuationType="none"
              color="#B8DDFF"
              quantity={132}
              subtitle="Đơn hoàn thành"
              icon={<OrderIC stroke="#2B8BE7" />}
            />
            <CommonSpecifications
              fluctuationType="price"
              fluctuationValue={12000}
              color="#81E7A5"
              quantity={12}
              subtitle="Doanh thu"
              icon={<PendingIC fill="#0DA651" />}
            />
            <CommonSpecifications
              fluctuationType="percent"
              fluctuationValue={-26}
              color="#F2DAFB"
              quantity={12}
              subtitle="Tỉ lệ hoàn thành"
              icon={<PendingIC fill="#C03CF1" />}
            />
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Dashboard;

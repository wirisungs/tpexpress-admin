"use client";
import Input, {
  InputSelection,
} from "@/components/CommonComponents/Inputs/Inputs";
import Navbar from "@/components/CommonComponents/Layout/Navbar";
import TitleBar from "@/components/CommonComponents/Layout/bars/TitleBar";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const DriverEnroll = () => {
  const router = useRouter();
  const genderOptions: { [key: string]: number } = { Nam: 1, Nữ: 0 };
  const vehicleTypeOptions: { [key: string]: string } = {
    "Xe gắn máy": "XGM",
    "Xe mô tô": "XMT",
    "Xe ô tô": "XOT",
  };
  const licenseTypeOptions: { [key: string]: string } = {
    "Bằng lái A1": "A1",
    "Bằng lái A2": "A2",
  };
  const xylanhOptions: { [key: string]: number } = {
    "50cc": 50,
    "125cc": 125,
  };
  const bankOptions: { [key: string]: string } = {
    MBBank: "MB",
    Vietcombank: "VCB",
  };

  const [warning, setWarning] = useState<string>("");
  const [driverName, setDriverName] = useState<string>("");
  const [driverEmail, setDriverEmail] = useState<string>("");
  const [driverPhone, setDriverPhone] = useState<string>("");
  const [driverAddress, setDriverAddress] = useState<string>("");
  const [driverBirth, setDriverBirth] = useState<Date | null>();
  const [driverCCCDDate, setDriverCCCDDate] = useState<Date | null>(null);
  const [driverCCCD, setDriverCCCD] = useState<string>("");
  const [driverLicenseId, setDriverLicenseId] = useState<string>("");
  const [driverVehicleBSX, setDriverVehicleBSX] = useState<string>("");
  const [driverLicenseType, setDriverLicenseType] = useState<string>("");
  const [driverGender, setDriverGender] = useState<number>(0);
  const [driverNationality, setDriverNationality] = useState<string>("");
  const [userId, setUserId] = useState<string>("");

  const handleLicenseChange = (value: string) => {
    setDriverLicenseType(value);
  };
  const handleGenderChange = (value: string) => {
    setDriverGender(Number(value));
  };
  const collectData = async (e) => {
    e.preventDefault();

    // Kết nối với database
    try {
      const response = await fetch("http://localhost:5000/api/driver/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          driverName: driverName,
          driverEmail: driverEmail,
          driverPhone: driverPhone,
          driverAddress: driverAddress,
          driverBirth: driverBirth,
          driverCCCD: driverCCCD,
          driverCCCDDate: driverCCCDDate,
          driverLicenseId: driverLicenseId,
          driverLicenseType: driverLicenseType,
          driverVehicleBSX: driverVehicleBSX,
          driverGender: driverGender,
          driverNationality: driverNationality,
          userId: userId,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Data saved:", result);
    } catch (error) {
      console.error("Error collecting data:", error);
    }
  };

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/driver/checkuser/${userId}`
        );
        if (!response.ok) {
          if (response.status === 400 && userId.length === 10) {
            const errorData = await response.json();
            console.log(errorData.message);
            setWarning(errorData.message);
            return;
          } else {
            throw new Error("Lỗi network");
          }
        }
        const result = await response.json();
        console.log(result);
        setWarning("");
      } catch (error) {
        console.log(error);
      }
    };
    fetchAccount();
  }, [userId]);
  return (
    <div className="flex">
      <Navbar>
        <div className="containerBox flex flex-col gap-6">
          <TitleBar text="Chi tiết tài xế" />
          <form
            onSubmit={collectData}
            className="flex flex-col gap-6 bg-white p-6 rounded-md"
          >
            <div className="infoDetails w-full flex flex-col gap-4">
              <p className="title text-2xl">Kiểm tra tài khoản có sẵn</p>
              <div className="inputBox flex flex-row w-full gap-6">
                <div className="boxLeft flex flex-col flex-1 gap-3">
                  <Input
                    placeholder="VD: Trần Văn A"
                    border={true}
                    label="Mã tài khoản của tài xế"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                  />
                  <p className="text-primaryText300 text-xs">
                    {warning !== "" ? warning : ""}
                  </p>
                </div>
              </div>
            </div>
            <div className="infoDetails w-full flex flex-col gap-4">
              <p className="title text-2xl">Thông tin cá nhân</p>
              <div className="inputBox flex flex-row w-full gap-6">
                <div className="boxLeft flex flex-col flex-1 gap-3">
                  <Input
                    placeholder="VD: Trần Văn A"
                    border={true}
                    label="Họ và tên"
                    value={driverName}
                    onChange={(e) => setDriverName(e.target.value)}
                  />
                  <Input
                    placeholder="VD: 12/12/2012"
                    border={true}
                    label="Ngày sinh"
                    value={driverBirth}
                    onChange={(e) => setDriverBirth(e.target.value)}
                  />
                  <InputSelection
                    options={genderOptions}
                    label="Giới tính"
                    onChange={handleGenderChange}
                  />
                  <Input
                    placeholder="VD: Phong Xích Lan, TP HCM"
                    border={true}
                    label="Địa chỉ"
                    value={driverAddress}
                    onChange={(e) => setDriverAddress(e.target.value)}
                  />
                  <Input
                    placeholder="VD: Việt Nam"
                    border={true}
                    label="Quốc tịch"
                    value={driverNationality}
                    onChange={(e) => setDriverNationality(e.target.value)}
                  />
                </div>
                <div className="boxright flex flex-col flex-1 gap-3">
                  <Input
                    placeholder="VD: 038291023"
                    border={true}
                    label="Số điện thoại"
                    value={driverPhone}
                    onChange={(e) => setDriverPhone(e.target.value)}
                  />
                  <Input
                    placeholder="VD: abc@gmail.com"
                    border={true}
                    label="Gmail"
                    value={driverEmail}
                    onChange={(e) => setDriverEmail(e.target.value)}
                  />
                  <Input
                    placeholder="VD: 0000 1111 2222"
                    border={true}
                    label="Số CCCD / CMND"
                    value={driverCCCD}
                    onChange={(e) => setDriverCCCD(e.target.value)}
                  />
                  <Input
                    placeholder="VD: 12/12/2019"
                    border={true}
                    label="Ngày cấp"
                    value={driverCCCDDate}
                    onChange={(e) => setDriverCCCDDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="vehicleDetails w-full flex flex-col gap-4">
              <p className="title text-2xl">Thông tin phương tiện</p>
              <div className="inputBox flex flex-row w-full gap-6">
                <div className="boxLeft flex flex-col flex-1 gap-3">
                  <Input
                    placeholder="VD: 0000 1111 2222"
                    border={true}
                    label="Số bằng lái"
                    value={driverLicenseId}
                    onChange={(e) => setDriverLicenseId(e.target.value)}
                  />
                  <InputSelection
                    options={vehicleTypeOptions}
                    label="Loại phương tiện"
                  />
                  <Input
                    placeholder="VD: Honda Air Blade"
                    border={true}
                    label="Nhãn hiệu, model phương tiện"
                  />
                  <Input
                    placeholder="VD: Đỏ-Đen"
                    border={true}
                    label="Màu sắc phương tiện"
                  />
                </div>
                <div className="boxright flex flex-col flex-1 gap-3">
                  <InputSelection
                    options={licenseTypeOptions}
                    label="Loại phương tiện"
                    onChange={handleLicenseChange}
                  />
                  <Input
                    placeholder="VD: 51B-67890"
                    border={true}
                    label="Biển số xe"
                    value={driverVehicleBSX}
                    onChange={(e) => setDriverVehicleBSX(e.target.value)}
                  />
                  <Input
                    placeholder="VD: 12/12/2022"
                    border={true}
                    label="Năm sản xuất"
                  />
                  <InputSelection
                    options={xylanhOptions}
                    label="Dung tích xy-lanh"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-center mt-6">
              <button
                type="submit"
                className="flex flex-row gap-[6px] w-64 h-[42px] bg-primaryText300 rounded-md justify-center items-center"
              >
                <div className="text flex items-center text-white font-bold text-xs h-full">
                  Tạo
                </div>
              </button>
            </div>
          </form>
        </div>
      </Navbar>
    </div>
  );
};

export default DriverEnroll;

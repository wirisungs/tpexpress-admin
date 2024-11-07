"use client";
import Navbar from "@/components/CommonComponents/Layout/Navbar";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import TitleBar from "@/components/CommonComponents/Layout/bars/TitleBar";
import EditIC from "@/Svg/editIC";
import InfoBox from "@/components/CommonComponents/Box/InfoBox";
import { ButtonBorder } from "@/components/CommonComponents/Buttons/Button";
import "@/Style/MTri/Loading.css";
import { useRouter } from "next/navigation";

interface vehicleDetails {
  vehicleLicenseBSX: string;
  vehicleTypeId: string;
  vehicleBrand: string;
  vehicleManufacture: Date;
  vehicleColor: string;
  vehicleDisplacement: string;
}
interface DriverType {
  driverId: string;
  driverName: string;
  driverEmail: string;
  driverPhone: number;
  driverAddress: string;
  driverBirth: Date;
  driverCCCDDate: Date;
  driverCCCD: string;
  driverLicenseId: string;
  driverVehicleBSX: string;
  driverLicenseType: string;
  driverGender: number;
  driverViolation: number;
  driverStatus: string;
  driverNationality: string;
  activeOrderCount: number;
  vehicleDetails: vehicleDetails;
  userID: string;
}

const DriverDetails = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState<boolean>(false);
  const [driver, setDriver] = useState<DriverType | null>(null);
  const pathName = usePathname();
  const id = pathName.split("/").pop();
  const router = useRouter();

  const formatDate = (datetime: Date) => {
    const date = new Date(datetime);
    console.log(datetime);
    const formattedDate = `${date.getDate().toString().padStart(2, "0")}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`;

    console.log(formattedDate);
    return formattedDate;
  };

  useEffect(() => {
    const fetchDriverData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:5000/api/driver/${id}`);
        console.log(id, response);
        if (!response.ok) {
          throw new Error("Driver not found");
        }
        const result = await response.json();
        console.log(result);
        setDriver(result[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (id) {
      fetchDriverData();
    }
  }, [id]);

  const deleteAccount = async () => {
    setIsDeleteLoading(true);
    try {
      const response = await fetch(
        `http://localhost:5000/api/driver/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      // console.log(id, response);
      if (response.ok) {
        setTimeout(() => {
          setIsDeleteLoading(false);
          router.push("/drivers");
        }, 3000);
      } else {
        console.error("Xóa không thành công!");
        setIsDeleteLoading(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex">
      <Navbar>
        <div className="body flex flex-col gap-6 h-full">
          <TitleBar text="Chi tiết tài xế" />

          {/* Popup xóa nhân viên*/}
          {isDeleteLoading && (
            <div className="spinnerProcessing-container absolute top-1/2 left-1/2 w-64 h-44 bg-white rounded-md shadow-md">
              <div className="spinner"></div>
              <p className="text-base font-bold text-navbarText">
                Đang xóa dữ liệu...
              </p>
            </div>
          )}

          {/* Lấy dữ liệu chi tiết */}
          {isLoading ? (
            <div className="spinner-container">
              <div className="spinner"></div>
              <p className="text-base font-bold text-navbarText">
                Đang tải dữ liệu...
              </p>
            </div>
          ) : (
            // driver details
            <div className="detailBox flex flex-col h-full">
              <div className="boxHeader flex flex-row">
                <div className="basicDetail flex flex-row bg-white w-full p-6 rounded-md gap-4 ">
                  <div className="detail flex flex-row flex-1 gap-4">
                    <div className="profileAvt w-[116px] h-[116px] rounded-full bg-slate-300" />
                    <div className="flex flex-col justify-center gap-1">
                      <p className="Name font-bold text-base">
                        {driver ? driver.driverName : ""}
                      </p>
                      <div className="textIcon flex flex-row items-center justify-between gap-3">
                        <p className="Gmail text-xs text-navbarText">
                          {driver ? driver.driverEmail : ""}
                        </p>
                        <EditIC width={16} height={16} stroke={"#007AFF"} />
                      </div>
                      <div className="textIcon flex flex-row items-center justify-between gap-3">
                        <p className="Sdt text-xs text-navbarText">
                          0383478483
                        </p>
                        <EditIC width={16} height={16} stroke={"#007AFF"} />
                      </div>
                      <div className="textIcon flex flex-row items-center justify-between gap-3">
                        <p className="Address text-xs text-navbarText text-wrap">
                          {driver && driver.driverAddress !== null
                            ? driver.driverAddress
                            : "Bổ sung"}
                        </p>
                        <EditIC width={16} height={16} stroke={"#007AFF"} />
                      </div>
                    </div>
                  </div>

                  <div className="detail flex flex-row flex-1 gap-12 justify-center items-center">
                    <div className="senderCounterTitle flex flex-col items-center gap-3">
                      <p className="text-base text-navbarText font-bold">
                        Đơn đã giao
                      </p>
                      <p className="senderCounter text-normalText font-bold text-sm">
                        3
                      </p>
                    </div>

                    <div className="cancelCounterTitle flex flex-col items-center gap-3">
                      <p className="text-base text-navbarText font-bold">
                        Đơn giao không thành
                      </p>
                      <p className="cancelCounter text-normalText font-bold text-sm">
                        2
                      </p>
                    </div>

                    <div className="cancelCounterTitle flex flex-col items-center gap-3">
                      <p className="text-base text-navbarText font-bold">
                        Khiếu nại
                      </p>
                      <p className="cancelCounter text-normalText font-bold text-sm">
                        0
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Body */}
              {/* Thông tin cá nhân */}
              <div className="px-6 detailsBox bg-white pb-6 flex flex-col w-full gap-6 items-center">
                <div className="driverInfo flex flex-col gap-6 w-full">
                  <p className="text-2xl">Thông tin cá nhân</p>
                  <div className="detailsBox flex flex-row w-full gap-6">
                    <div className="leftBox flex flex-col flex-1 gap-3">
                      <InfoBox
                        label="Mã tài xế"
                        content={driver ? driver.driverId : ""}
                      />
                      <InfoBox
                        label="Ngày sinh"
                        content={
                          driver && driver.driverBirth
                            ? formatDate(driver.driverBirth)
                            : "Bổ sung!"
                        }
                      />
                      <InfoBox
                        label="Giới tính"
                        content={
                          driver
                            ? driver.driverGender === 0
                              ? "Nam"
                              : "Nữ"
                            : ""
                        }
                      />
                      <InfoBox
                        label="Quốc tịch"
                        content={driver ? driver.driverNationality : "Bổ sung!"}
                      />
                    </div>
                    <div className="rightBox flex flex-col flex-1 gap-3">
                      <InfoBox
                        label="Gmail"
                        content={
                          driver && driver.driverEmail
                            ? driver.driverEmail
                            : "Bổ sung!"
                        }
                      />
                      <InfoBox
                        label="CCCD/CMND"
                        content={
                          driver && driver.driverCCCD
                            ? driver.driverCCCD
                            : "Bổ sung!"
                        }
                      />
                      <InfoBox
                        label="Ngày cấp"
                        content={
                          driver && driver.driverCCCDDate
                            ? formatDate(driver.driverCCCDDate)
                            : "Bổ sung!"
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Thông tin xe, bằng lái,... */}
                <div className="vehicleInfo flex flex-col gap-6 w-full">
                  <p className="text-2xl">Thông tin phương tiện</p>
                  <div className="detailsBox flex flex-row w-full gap-6">
                    <div className="leftBox flex flex-col flex-1 gap-3">
                      <InfoBox
                        label="Số bằng lái"
                        content={
                          driver && driver.driverLicenseId
                            ? driver.driverLicenseId
                            : "Bổ sung!"
                        }
                      />
                      <InfoBox
                        label="Loại phương tiện"
                        content={
                          driver && driver.vehicleDetails
                            ? driver.vehicleDetails.vehicleTypeId
                            : "Bổ sung!"
                        }
                      />
                      <InfoBox
                        label="Nhãn hiệu, model phương tiện"
                        content={
                          driver && driver.vehicleDetails
                            ? driver.vehicleDetails.vehicleBrand
                            : "Bổ sung!"
                        }
                      />
                      <InfoBox
                        label="Màu sắc phương tiện"
                        content={
                          driver && driver.vehicleDetails
                            ? driver.vehicleDetails.vehicleBrand
                            : "Bổ sung!"
                        }
                      />
                    </div>
                    <div className="rightBox flex flex-col flex-1 gap-3">
                      <InfoBox
                        label="Loại bằng lái"
                        content={
                          driver && driver.vehicleDetails
                            ? driver.driverLicenseType
                            : "Bổ sung!"
                        }
                      />
                      <InfoBox
                        label="Biển số xe"
                        content={
                          driver && driver.vehicleDetails
                            ? driver.vehicleDetails.vehicleLicenseBSX
                            : "Bổ sung!"
                        }
                      />
                      <InfoBox
                        label="Ngày sản xuất"
                        content={
                          driver && driver.vehicleDetails
                            ? formatDate(
                                driver.vehicleDetails.vehicleManufacture
                              )
                            : "Bổ sung!"
                        }
                      />
                      <InfoBox
                        label="Dung tích xy-lanh"
                        content={
                          driver && driver.vehicleDetails
                            ? driver.vehicleDetails.vehicleDisplacement
                            : "Bổ sung!"
                        }
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="flex items-center w-[342px]"
                  onClick={() => deleteAccount()}
                >
                  <ButtonBorder text="Xóa tài khoản" />
                </div>
              </div>
            </div>
          )}
        </div>
      </Navbar>
    </div>
  );
};

export default DriverDetails;

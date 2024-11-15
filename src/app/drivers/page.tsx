"use client";
import React, { useEffect, useState } from "react";
import Input, {
  InputWithIcon,
} from "@/components/CommonComponents/Inputs/Inputs";
import Navbar from "@/components/CommonComponents/Layout/Navbar";

// Icons && CSS
import SortIC from "@/Svg/sortIC";
import AddEmployeeIC from "@/Svg/addEmployee";
import "@/Style/MTri/TableSetup.css";
import "@/Style/MTri/Loading.css";

import Button from "@/components/CommonComponents/Buttons/Button";
import { useRouter } from "next/navigation";

interface DriverType {
  driverId: string;
  driverName: string;
  driverEmail: string;
  driverPhone: number;
  driverAddress: string;
  driverBirthday: string;
  driverCCCDDate: string;
  driverCCCD: string;
  driverLicense: string;
  driverVehicleBSX: string;
  driverLicenseType: string;
  driverGender: number;
  driverViolation: number;
  driverStatus: string;
  driverNationality: string;
  activeOrderCount: number;
  userID: string;
}

const DriverTable: React.FC = () => {
  const [drivers, setDrivers] = useState<DriverType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();
  const handleClick = (driverId: string) => {
    router.push(`/drivers/${driverId}`);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/driver/", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Network not ok");
      }

      const result = await response.json();
      setDrivers(result);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const getFirstAndMiddleName = (fullname: string) => {
    return fullname.split(" ").slice(0, -1).join(" ");
  };

  const getLastName = (fullname: string) => {
    return fullname.split(" ").slice(-1).join(" ");
  };

  const getCity = (address: string) => {
    const parts = address.split(",");
    return parts[parts.length - 1]?.trim();
  };

  const [sortState, setSortState] = useState<{
    id: boolean;
    status: boolean;
    lastName: boolean;
    firstMiddleName: boolean;
    gender: boolean;
    area: boolean;
    counterReceived: boolean;
    violation: boolean;
  }>({
    id: false,
    status: false,
    lastName: false,
    firstMiddleName: false,
    gender: false,
    area: false,
    counterReceived: false,
    violation: false,
  });

  const sortDrivers = (
    key:
      | "id"
      | "status"
      | "lastName"
      | "firstMiddleName"
      | "gender"
      | "area"
      | "counterReceived"
      | "violation"
  ) => {
    const sortedDrivers = [...drivers].sort(
      (a: DriverType, b: DriverType): number => {
        let comparison = 0;

        switch (key) {
          case "id":
            comparison = a.driverId.localeCompare(b.driverId);
            return sortState.id ? -comparison : comparison;
          case "status":
            comparison = Number(a.driverStatus) - Number(b.driverStatus);
            return sortState.status ? -comparison : comparison;
          case "lastName":
            comparison = getLastName(a.driverName).localeCompare(
              getLastName(b.driverName)
            );
            return sortState.lastName ? -comparison : comparison;
          case "firstMiddleName":
            comparison = getFirstAndMiddleName(a.driverName).localeCompare(
              getFirstAndMiddleName(b.driverName)
            );
            return sortState.firstMiddleName ? -comparison : comparison;
          case "gender":
            comparison = a.driverGender - b.driverGender;
            return sortState.gender ? -comparison : comparison;
          case "area":
            comparison = getCity(a.driverAddress).localeCompare(
              getCity(b.driverAddress)
            );
            return sortState.area ? -comparison : comparison;
          case "counterReceived":
            comparison = a.activeOrderCount - b.activeOrderCount;
            return sortState.counterReceived ? -comparison : comparison;
          case "violation":
            comparison = a.driverViolation - b.driverViolation;
            return sortState.violation ? -comparison : comparison;
          default:
            return 0;
        }
      }
    );

    setDrivers(sortedDrivers);
    setSortState((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="all">
      <Navbar>
        <div className="right flex flex-col gap-4">
          <div className="inputright flex flex-row gap-4">
            <div className="w-[342px]">
              <InputWithIcon
                purpose="search"
                placeholder="Nhập số điện thoại để tìm kiếm"
                background={true}
              />
            </div>
          </div>
          <div className="table">
            <div className="note-container">
              <p className="note">
                Ghi chú: Ấn vào tài xế bất kì để xem hoặc thay đổi thông tin
              </p>
            </div>
            <div className="table-container">
              <table className="driverTable min-w-full bg-white table-fixed rounded-md">
                {/* Title từng cột */}
                <thead>
                  <tr>
                    <th className="h-[42px] break-words p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full w-full justify-end">
                        <p>STT</p>
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Mã tài xế</p>
                        <div className="Sort" onClick={() => sortDrivers("id")}>
                          <SortIC />
                        </div>
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Trạng thái</p>
                        <div
                          className="Sort"
                          onClick={() => sortDrivers("status")}
                        >
                          <SortIC />
                        </div>
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Họ</p>
                        <div
                          className="Sort"
                          onClick={() => sortDrivers("firstMiddleName")}
                        >
                          <SortIC />
                        </div>
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Tên</p>
                        <div
                          className="Sort"
                          onClick={() => sortDrivers("lastName")}
                        >
                          <SortIC />
                        </div>
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Giới tính</p>
                        <div
                          className="Sort"
                          onClick={() => sortDrivers("gender")}
                        >
                          <SortIC />
                        </div>
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Số điện thoại</p>
                        <SortIC />
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Khu vực</p>
                        <div
                          className="Sort"
                          onClick={() => sortDrivers("area")}
                        >
                          <SortIC />
                        </div>
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-center truncate">
                      <div className="flex flex-row gap-[6px] items-center justify-center h-full">
                        <p>Số đơn nhận</p>
                        <div
                          className="Sort"
                          onClick={() => sortDrivers("counterReceived")}
                        >
                          <SortIC />
                        </div>
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center justify-center h-full">
                        <p>Cảnh cáo</p>
                        <div
                          className="Sort"
                          onClick={() => sortDrivers("violation")}
                        >
                          <SortIC />
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                {isLoading ? (
                  <div className="spinner-container">
                    <div className="spinner"></div>
                    <p className="text-base font-bold text-navbarText">
                      Đang tải dữ liệu...
                    </p>
                  </div>
                ) : (
                  <tbody>
                    {drivers.map((driver, index) => (
                      <tr
                        key={index}
                        onClick={() => handleClick(driver.driverId)}
                        className="cursor-pointer"
                      >
                        <td className="h-[42px] break-words p-3 text-left truncate">
                          <div className="flex flex-row gap-[6px] items-center h-full w-full justify-end">
                            <p>{index + 1}</p>
                          </div>
                        </td>
                        <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                          <div className="flex flex-row gap-[6px] items-center h-full">
                            <p>{driver.driverId}</p>
                          </div>
                        </td>
                        <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                          <div className="flex flex-row gap-[6px] items-center h-full">
                            <p
                              style={
                                driver.driverStatus
                                  ? { color: "#0DA651" }
                                  : { color: "#F61317" }
                              }
                            >
                              {driver.driverStatus
                                ? "Đang hoạt động"
                                : "Không hoạt động"}
                            </p>
                          </div>
                        </td>
                        <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                          <div className="flex flex-row gap-[6px] items-center h-full">
                            <p>{getFirstAndMiddleName(driver.driverName)}</p>
                          </div>
                        </td>
                        <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                          <div className="flex flex-row gap-[6px] items-center h-full">
                            <p>{getLastName(driver.driverName)}</p>
                          </div>
                        </td>
                        <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                          <div className="flex flex-row gap-[6px] items-center h-full">
                            <p>{driver.driverGender == 0 ? "Nam" : "Nữ"}</p>
                          </div>
                        </td>
                        <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                          <div className="flex flex-row gap-[6px] items-center h-full">
                            <p>{driver.driverPhone}</p>
                          </div>
                        </td>
                        <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                          <div className="flex flex-row gap-[6px] items-center h-full">
                            <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                              {driver.driverAddress &&
                                driver.driverAddress.split(",").slice(-1)}
                            </p>
                          </div>
                        </td>
                        <td className="h-[42px] items-center break-words  p-3 text-center truncate">
                          <div className="flex flex-row gap-[6px] items-center h-full">
                            <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                              {driver.activeOrderCount}
                            </p>
                          </div>
                        </td>
                        <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                          <div className="flex flex-row gap-[6px] items-center h-full">
                            <p
                              style={{
                                color: `${
                                  driver.driverViolation > 2
                                    ? "#F61317"
                                    : driver.driverViolation > 1
                                    ? "#FBA333"
                                    : "#696969"
                                }`,
                              }}
                              className="w-full text-center overflow-hidden text-ellipsis whitespace-nowrap"
                            >
                              {driver.driverViolation}
                            </p>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default DriverTable;

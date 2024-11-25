"use client";
import React, { useEffect, useState } from "react";
import { InputWithIcon } from "@/components/CommonComponents/Inputs/Inputs";
import Navbar from "@/components/CommonComponents/Layout/Navbar";

// Icons && CSS
import SortIC from "@/Svg/sortIC";
import "@/Style/MTri/TableSetup.css";
import "@/Style/MTri/Loading.css";
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
  const [searchValue, setSearchValue] = useState<string>("");

  // Xử lý điều hướng
  const router = useRouter();
  const handleClick = (driverId: string) => {
    router.push(`/drivers/dri?id=${driverId}`);
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
    if (!address) {
      return;
    }
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
            const genderA = Number(a.driverGender) || 0;
            const genderB = Number(b.driverGender) || 0;
            comparison = genderA - genderB;
            return sortState.gender ? -comparison : comparison;
          case "area":
            const cityA = getCity(a.driverAddress) || "";
            const cityB = getCity(b.driverAddress) || "";
            comparison = cityA.localeCompare(cityB);
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
        <div className="right h-full flex flex-col gap-4 justify-start items-start">
          <div className="inputright flex flex-row gap-4">
            <div className="w-full flex flex-row gap-4 items-center">
              <div className="w-[342px]">
                <InputWithIcon
                  purpose="search"
                  placeholder="Nhập mã / gmail / số điện thoại để tìm"
                  background={true}
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  pageOfAPI="driDetails"
                />
              </div>
            </div>
          </div>
          <div className="h-full flex flex-col">
            <div className="note-container h-auto flex">
              <p className="note">
                Ghi chú: Ấn vào tài xế bất kì để xem hoặc thay đổi thông tin
              </p>
            </div>
            <div className="table-container flex flex-1">
              <table className="driverTable min-w-full h-full bg-white table-fixed rounded-md">
                {/* Title từng cột */}
                <thead className="shadow-sm">
                  <tr>
                    <th className="h-[42px] break-words p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full w-full justify-end">
                        <p>STT</p>
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Mã tài xế</p>
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Trạng thái</p>
                        <button
                          type="button"
                          onClick={() => sortDrivers("status")}
                        >
                          <SortIC />
                        </button>
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Họ</p>
                        <button
                          type="button"
                          onClick={() => sortDrivers("firstMiddleName")}
                        >
                          <SortIC />
                        </button>
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Tên</p>
                        <button
                          type="button"
                          onClick={() => sortDrivers("lastName")}
                        >
                          <SortIC />
                        </button>
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Giới tính</p>
                        <button
                          type="button"
                          onClick={() => sortDrivers("gender")}
                        >
                          <SortIC />
                        </button>
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Số điện thoại</p>
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Khu vực</p>
                        <button
                          type="button"
                          onClick={() => sortDrivers("area")}
                        >
                          <SortIC />
                        </button>
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
                  <tbody className="h-full">
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

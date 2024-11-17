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

type UserAccountType = {
  userId: string;
  userPhone: string;
  userRole: string;
  userEmail: string;
  userVerify: boolean;
  driverDetail: DriverType;
  employeeDetail: EmployeeType;
};

type EmployeeType = {
  employeeId: string;
  employeeName: string;
  employeeEmail: string;
  employeePhone: string;
  employeeStatus: string;
  userID: string;
};
type DriverType = {
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
};

const AccountTable: React.FC = () => {
  const [users, setUsers] = useState<UserAccountType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();
  const handleClick = (driverId: string) => {
    router.push(`/drivers/${driverId}`);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/user/", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Network not ok");
      }

      const result = await response.json();
      setUsers(result);
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
    phone: boolean;
    lastName: boolean;
    firstMiddleName: boolean;
    gmail: boolean;
    area: boolean;
    counterReceived: boolean;
    role: boolean;
  }>({
    id: false,
    phone: false,
    lastName: false,
    firstMiddleName: false,
    gmail: false,
    area: false,
    counterReceived: false,
    role: false,
  });

  const sortUsers = (
    key:
      | "id"
      | "phone"
      | "lastName"
      | "firstMiddleName"
      | "gmail"
      | "area"
      | "counterReceived"
      | "role"
  ) => {
    const sortedUsers = [...users].sort(
      (a: UserAccountType, b: UserAccountType): number => {
        let comparison = 0;

        switch (key) {
          case "id":
            comparison = a.userId.localeCompare(b.userId);
            return sortState.id ? -comparison : comparison;
          case "phone":
            comparison = Number(a.userPhone) - Number(b.userPhone);
            return sortState.phone ? -comparison : comparison;
          case "lastName":
            comparison = getLastName(
              (a.driverDetail && a.driverDetail.driverName) ||
                (a.employeeDetail && a.employeeDetail.employeeName)
            ).localeCompare(
              getLastName(
                (b.driverDetail && b.driverDetail.driverName) ||
                  (b.employeeDetail && b.employeeDetail.employeeName)
              )
            );
            return sortState.lastName ? -comparison : comparison;
          case "firstMiddleName":
            comparison = getFirstAndMiddleName(
              (b.driverDetail && b.driverDetail.driverName) ||
                (b.employeeDetail && b.employeeDetail.employeeName)
            ).localeCompare(
              getFirstAndMiddleName(
                (b.driverDetail && b.driverDetail.driverName) ||
                  (b.employeeDetail && b.employeeDetail.employeeName)
              )
            );
            return sortState.firstMiddleName ? -comparison : comparison;
          case "gmail":
            comparison = a.userEmail.localeCompare(b.userEmail);
            return sortState.gmail ? -comparison : comparison;
          case "role":
            comparison = a.userRole.localeCompare(getCity(b.userRole));
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

    setUsers(sortedUsers);
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
                placeholder="Nhập số điện thoại để tìm kiếm"
                background={true}
                border={false}
              />
            </div>
            <div className="w-[168px]">
              <Button
                text="Đăng ký tài khoản"
                icon={<AddEmployeeIC />}
                customColor="#EB455F"
                href="/accounts/create"
              />
            </div>
          </div>
          <div className="table">
            <div className="note-container">
              <p className="note">
                Ghi chú: Ấn vào tài khoản bất kì để xem hoặc thay đổi thông tin
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
                        <p>Mã tài khoản</p>
                        <div className="Sort" onClick={() => sortUsers("id")}>
                          <SortIC />
                        </div>
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Số điện thoại</p>
                        <div
                          className="Sort"
                          onClick={() => sortUsers("phone")}
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
                          onClick={() => sortUsers("firstMiddleName")}
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
                          onClick={() => sortUsers("lastName")}
                        >
                          <SortIC />
                        </div>
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Email</p>
                        <div
                          className="Sort"
                          onClick={() => sortUsers("gmail")}
                        >
                          <SortIC />
                        </div>
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Trạng thái</p>
                        <SortIC />
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Xác thực</p>
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
                        <p>Vai trò</p>
                        <div className="Sort" onClick={() => sortUsers("role")}>
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
                    {users.map((user, index) => (
                      <tr
                        key={index}
                        onClick={() => handleClick(user.userId)}
                        className="cursor-pointer"
                      >
                        {user.driverDetail && (
                          <>
                            <td className="h-[42px] break-words p-3 text-left truncate">
                              <div className="flex flex-row gap-[6px] items-center h-full w-full justify-end">
                                <p>{index + 1}</p>
                              </div>
                            </td>
                            <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                              <div className="flex flex-row gap-[6px] items-center h-full">
                                <p>{user.userId}</p>
                              </div>
                            </td>
                            <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                              <div className="flex flex-row gap-[6px] items-center h-full">
                                <p>{user.userPhone}</p>
                              </div>
                            </td>
                            <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                              <div className="flex flex-row gap-[6px] items-center h-full">
                                <p>
                                  {getFirstAndMiddleName(
                                    user.driverDetail.driverName
                                  )}
                                </p>
                              </div>
                            </td>
                            <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                              <div className="flex flex-row gap-[6px] items-center h-full">
                                <p>
                                  {getLastName(user.driverDetail.driverName)}
                                </p>
                              </div>
                            </td>
                            <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                              <div className="flex flex-row gap-[6px] items-center h-full  ">
                                <p className=" overflow-hidden text-ellipsis">
                                  {user.driverDetail.driverEmail}
                                </p>
                              </div>
                            </td>
                            <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                              <div className="flex flex-row gap-[6px] items-center h-full">
                                <p>
                                  {user.driverDetail.driverStatus
                                    ? "Hoạt động"
                                    : "Không hoạt động"}
                                </p>
                              </div>
                            </td>
                            <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                              <div className="flex flex-row gap-[6px] items-center h-full">
                                <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                                  {user.userVerify
                                    ? "Đã xác thực"
                                    : "Chưa xác thực"}
                                </p>
                              </div>
                            </td>
                            <td className="h-[42px] items-center break-words  p-3 text-center truncate">
                              <div className="flex flex-row gap-[6px] items-center h-full">
                                <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                                  {user.userRole === "Driver" && "Tài xế"}
                                </p>
                              </div>
                            </td>
                          </>
                        )}
                        {user.employeeDetail && (
                          <>
                            <td className="h-[42px] break-words p-3 text-left truncate">
                              <div className="flex flex-row gap-[6px] items-center h-full w-full justify-end">
                                <p>{index + 1}</p>
                              </div>
                            </td>
                            <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                              <div className="flex flex-row gap-[6px] items-center h-full">
                                <p>{user.userId}</p>
                              </div>
                            </td>
                            <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                              <div className="flex flex-row gap-[6px] items-center h-full">
                                <p>{user.userPhone}</p>
                              </div>
                            </td>
                            <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                              <div className="flex flex-row gap-[6px] items-center h-full">
                                <p>
                                  {getFirstAndMiddleName(
                                    user.employeeDetail.employeeName
                                  )}
                                </p>
                              </div>
                            </td>
                            <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                              <div className="flex flex-row gap-[6px] items-center h-full">
                                <p>
                                  {getLastName(
                                    user.employeeDetail.employeeName
                                  )}
                                </p>
                              </div>
                            </td>
                            <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                              <div className="flex flex-row gap-[6px] items-center h-full  ">
                                <p className=" overflow-hidden text-ellipsis">
                                  {user.employeeDetail.employeeEmail}
                                </p>
                              </div>
                            </td>
                            <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                              <div className="flex flex-row gap-[6px] items-center h-full">
                                <p>
                                  {user.employeeDetail.employeeStatus
                                    ? "Hoạt động"
                                    : "Không hoạt động"}
                                </p>
                              </div>
                            </td>
                            <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                              <div className="flex flex-row gap-[6px] items-center h-full">
                                <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                                  {user.userVerify
                                    ? "Đã xác thực"
                                    : "Chưa xác thực"}
                                </p>
                              </div>
                            </td>
                            <td className="h-[42px] items-center break-words  p-3 text-center truncate">
                              <div className="flex flex-row gap-[6px] items-center h-full">
                                <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                                  {user.userRole === "Admin" && "Quản trị viên"}
                                </p>
                              </div>
                            </td>
                          </>
                        )}
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

export default AccountTable;

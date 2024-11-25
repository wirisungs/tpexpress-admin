"use client";
import React, { useEffect, useState } from "react";
import { InputWithIcon } from "@/components/CommonComponents/Inputs/Inputs";
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

  const getFirstAndMiddleName = (fullname: string | null | undefined) => {
    if (!fullname) return "";
    return fullname.split(" ").slice(0, -1).join(" ");
  };

  const getLastName = (fullname: string | null | undefined) => {
    if (!fullname) return "";
    return fullname.split(" ").slice(-1).join(" ");
  };

  const [sortState, setSortState] = useState<{
    phone: boolean;
    lastName: boolean;
    firstMiddleName: boolean;
    email: boolean;
    role: boolean;
  }>({
    phone: false,
    lastName: false,
    firstMiddleName: false,
    email: false,
    role: false,
  });

  const sortUsers = (
    key: "phone" | "lastName" | "firstMiddleName" | "email" | "role"
  ) => {
    const sortedUsers = [...users].sort(
      (a: UserAccountType, b: UserAccountType): number => {
        let comparison = 0;

        switch (key) {
          case "phone":
            comparison = Number(a.userPhone) - Number(b.userPhone);
            return sortState.phone ? -comparison : comparison;
          case "lastName":
            const driverLastNameA =
              getLastName(a.driverDetail?.driverName) || "";
            const driverLastNameB =
              getLastName(b.driverDetail?.driverName) || "";
            comparison = driverLastNameA.localeCompare(driverLastNameB);
            return sortState.lastName ? -comparison : comparison;
          case "firstMiddleName":
            const driverA =
              getFirstAndMiddleName(a.driverDetail?.driverName) || "";
            const driverB =
              getFirstAndMiddleName(b.driverDetail?.driverName) || "";
            comparison = driverA.localeCompare(driverB);
            return sortState.firstMiddleName ? -comparison : comparison;
          case "email":
            const emailA = a.driverDetail?.driverEmail || "";
            const emailB = b.driverDetail?.driverEmail || "";
            console.log(emailA, emailB);
            comparison = emailA.localeCompare(emailB);
            return sortState.email ? -comparison : comparison;
          case "role":
            const userRoleA = a.userRole || "";
            const userRoleB = b.userRole || "";
            comparison = userRoleA.localeCompare(userRoleB);
            return sortState.role ? -comparison : comparison;
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
        <div className="right h-full flex flex-col gap-4">
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
          <div className="flex flex-col h-full">
            <div className="note-container">
              <p className="note">
                Ghi chú: Ấn vào tài khoản bất kì để xem hoặc thay đổi thông tin
              </p>
            </div>
            <div className="table-container h-full">
              <table className="driverTable min-w-full h-full bg-white table-fixed rounded-md">
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
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Số điện thoại</p>
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Họ</p>
                        <button
                          type="button"
                          onClick={() => sortUsers("firstMiddleName")}
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
                          onClick={() => sortUsers("lastName")}
                        >
                          <SortIC />
                        </button>
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Email</p>
                        <button
                          type="button"
                          onClick={() => sortUsers("email")}
                        >
                          <SortIC />
                        </button>
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Trạng thái</p>
                        <SortIC />
                      </div>
                    </th>

                    <th className="h-[42px] items-center break-words  p-3 text-center truncate">
                      <div className="flex flex-row gap-[6px] items-center justify-start h-full">
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
                  <tbody className="h-full">
                    {users.map((user, index) => (
                      <tr
                        key={index}
                        onClick={() => handleClick(user.userId)}
                        className="cursor-pointer"
                      >
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

                            <td className="h-[42px] items-center break-words  p-3 text-center truncate">
                              <div className="flex flex-row gap-[6px] items-center h-full">
                                <p className="overflow-hidden text-ellipsis whitespace-nowrap">
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

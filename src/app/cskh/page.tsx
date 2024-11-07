"use client";
import React, { useEffect, useState } from "react";
import "@/Style/MTri/TableSetupOrderCSKH.css";
import SortIC from "@/Svg/sortIC";
import Navbar from "@/components/CommonComponents/Layout/Navbar";
import Input from "@/components/CommonComponents/Inputs/Inputs";

type CSKHType = {
  Request_ID: string;
  Cus_ID: string;
  Order_ID: string;
  Driver_ID: string;
  Request_Picture: string;
  Request_Status: string;
  Request_Date: string;
  Request_Type: string;
};
const CSKH: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [requests, setRequests] = useState<CSKHType[]>([]);

  useEffect(() => {
    const fetchRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:5000/api/request/");
        if (!response.ok) {
          throw new Error("Network not ok");
        }
        const result = await response.json();
        setRequests(result);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRequest();
  }, []);
  return (
    <div className="all">
      <Navbar>
        <div className="right flex flex-col gap-4">
          <div className="inputright">
            <Input
              type="search"
              placeholder="Nhập mã khách hàng / họ tên / email /...."
            />
          </div>
          <div className="table">
            <div className="note-container">
              <p className="note">
                Ghi chú: Ấn và khách hàng bất kì để xem hoặc thay đổi thông tin
              </p>
            </div>
            <div className="table-container">
              <table className="cskhTable min-w-full bg-white table-fixed rounded-md">
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
                        <p>Mã yêu cầu</p>
                        <SortIC />
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Mã đơn hàng</p>
                        <SortIC />
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Mã khách hàng</p>
                        <SortIC />
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Vấn đề</p>
                        <SortIC />
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Đính kèm</p>
                        <SortIC />
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
                        <p>Tài xế</p>
                        <SortIC />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((request, index) => (
                    <tr key={index}>
                      <td className="h-[42px] break-words p-3 text-left truncate">
                        <div className="flex flex-row gap-[6px] items-center h-full w-full justify-end">
                          <p>{index + 1}</p>
                        </div>
                      </td>
                      <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                        <div className="flex flex-row gap-[6px] items-center h-full">
                          <p>{request.Request_ID}</p>
                        </div>
                      </td>
                      <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                        <div className="flex flex-row gap-[6px] items-center h-full">
                          <p>{request.Order_ID}</p>
                        </div>
                      </td>
                      <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                        <div className="flex flex-row gap-[6px] items-center h-full">
                          <p>{request.Cus_ID}</p>
                        </div>
                      </td>
                      <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                        <div className="flex flex-row gap-[6px] items-center h-full">
                          <p>
                            {request.Request_Type === "HBV"
                              ? "Hàng bị vỡ"
                              : request.Request_Type === "HBL"
                              ? "Hàng bị lạc"
                              : request.Request_Type === "HCG"
                              ? "Hàng chưa giao"
                              : "Chưa nhận được tiền"}
                          </p>
                        </div>
                      </td>
                      <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                        <div className="flex flex-row gap-[6px] items-center h-full">
                          <p>{request.Request_Picture}</p>
                        </div>
                      </td>
                      <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                        <div className="flex flex-row gap-[6px] items-center h-full">
                          <p>{request.Request_Status}</p>
                        </div>
                      </td>
                      <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                        <div className="flex flex-row gap-[6px] items-center h-full">
                          <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                            {request.Driver_ID}
                          </p>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default CSKH;

"use client";
import React, { useEffect, useState } from "react";
import "@/Style/MTri/TableSetupOrderCSKH.css";
import SortIC from "@/Svg/sortIC";
import Navbar from "@/components/CommonComponents/Layout/Navbar";
import Input, {
  InputSelection,
  InputWithIcon,
} from "@/components/CommonComponents/Inputs/Inputs";
import InfoBox from "@/components/CommonComponents/Box/InfoBox";
import Image from "next/image";
import { toast } from "react-toastify";

type CustomerType = {
  cusId: string;
  cusName: string;
  cusEmail: string;
  cusPhone: number;
  cusAddress: string;
  cusGender: number;
  cusBirthday: string;
};

type CSKHType = {
  Request_ID: string;
  Cus_ID: string;
  Order_ID: string;
  Driver_ID: string;
  Request_Picture: string;
  Request_Status: string;
  Request_Date: string;
  Request_Type: string;
  customer: CustomerType;
};
const CSKH: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [maximize, setMaximize] = useState<boolean>(false);
  const [requests, setRequests] = useState<CSKHType[]>([]);
  const [selectedRequest, setSelectedRequest] = useState<CSKHType | null>(null);
  const [requestStatus, setRequestStatus] = useState<string>("Pending");
  const [isResponse, setIsResponse] = useState<boolean>(false);

  // Mở pop phản hồi
  const handleResponseClick = (request: CSKHType) => {
    setSelectedRequest(request);
    setIsResponse(true);
  };

  const statusRQ: { [key: string]: string } = {
    "Chưa xử lý": "Pending",
    "Đang kiểm tra": "Checking",
    "Chấp nhận yêu cầu": "Agree",
    "Từ chối yêu cầu": "Deny",
  };

  const handleStatusChange = (value: string) => {
    setRequestStatus(value);
    console.log(value);
  };

  // Hàm update trạng thái
  const handleUpdate = async (requestId: string) => {
    try {
      console.log("Updating", requestStatus);
      const response = await fetch(
        `http://localhost:5000/api/request/update/${requestId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Request_Status: requestStatus,
          }),
        }
      );
      const result = await response.json();
      console.log(result);
      if (!response.ok) {
        if (result.message) {
          toast.error(result.message);
        }
        throw new Error("Lỗi kết nối");
      }
      toast.success(result.message);
      setIsResponse(false);
      setTimeout(() => {
        window.location.reload(); // Reload trang sau khi hiển thị toast
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const identifyType = (requestType: string) => {
    let result;
    switch (requestType) {
      case "HBV": {
        result = "Hàng bị vỡ";
        break;
      }
      case "HCVC": {
        result = "Hàng chưa vận chuyển";
        break;
      }
      case "CNT": {
        result = "Chưa nhận được tiền sau khi đã giao thành công";
        break;
      }
      case "HBL": {
        result = "Hàng bị lạc";
        break;
      }
      default: {
        result = "Không có lý do";
        break;
      }
    }
    return result;
  };

  const identifyStatus = (requestStatus: string) => {
    let result;
    switch (requestStatus) {
      case "Pending": {
        result = "Chưa xử lý";
        break;
      }
      case "Checking": {
        result = "Đang xử lý";
        break;
      }
      case "Agree": {
        result = "Chấp nhận yêu cầu";
        break;
      }
      case "Deny": {
        result = "Từ chối yêu cầu";
        break;
      }
      default: {
        result = "Chưa xử lý";
        break;
      }
    }
    return result;
  };

  const handleCancel = () => {
    setIsResponse(false);
  };
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
      {isResponse && selectedRequest && (
        <form
          style={{ background: "rgb(0 0 0 / 0.2)" }}
          className="absolute w-full h-full flex items-center justify-center z-20 py-6"
        >
          {maximize && (
            <div
              style={{ background: "rgb(0 0 0 / 0.8)" }}
              className="absolute w-full h-full flex items-center justify-center z-20 "
              onClick={() => setMaximize(false)}
            >
              <Image
                className="rounded-md bg-slate-200 absolute"
                src={selectedRequest.Request_Picture}
                alt="picture"
                width={648}
                height={648}
                placeholder="blur" // Placeholder cho hiệu ứng blur
                blurDataURL="data:image/svg+xml;base64,...your_base64_string..."
                onClick={() => setMaximize(true)}
              />
            </div>
          )}
          <div className="popup w-[712px] h-full bg-white flex flex-col items-center p-6 gap-6 rounded-md overflow-hidden overflow-y-auto">
            <div className="w-full h-full flex flex-col gap-6 ">
              <p className="text-2xl font-bold text-normalText">
                Thông tin đơn hàng
              </p>
              <div className="flex flex-col gap-3">
                <div className="w-full flex flex-row gap-3">
                  <div className="flex flex-1">
                    <InfoBox
                      label="Họ và tên"
                      content={selectedRequest.customer.cusName}
                    />
                  </div>
                  <div className="flex flex-1">
                    <InfoBox
                      label="Mã đơn cần hỗ trợ"
                      content={selectedRequest.Order_ID}
                    />
                  </div>
                </div>
                <div className="flex">
                  <InfoBox
                    label="Lý do cần hỗ trợ"
                    content={identifyType(selectedRequest.Request_Type)}
                  />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <p className="text-sm text-normalText">Đính kèm</p>
                  <Image
                    className="rounded-md bg-slate-200 cursor-zoom-in"
                    src={selectedRequest.Request_Picture}
                    alt="picture"
                    width={98}
                    height={98}
                    placeholder="blur" // Placeholder cho hiệu ứng blur
                    blurDataURL="data:image/svg+xml;base64,...your_base64_string..."
                    onClick={() => setMaximize(true)}
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col gap-6 ">
              <p className="text-2xl font-bold text-normalText">
                Phản hồi khách hàng
              </p>
              <div className="flex flex-col gap-3">
                <div className="w-full flex flex-col gap-3">
                  <div className="flex w-full">
                    <InputSelection
                      label="Trạng thái yêu cầu"
                      options={statusRQ}
                      onChange={handleStatusChange}
                    />
                  </div>
                  <div className="flex w-full flex-col gap-[4px]">
                    <p className="text-sm text-navbarText">
                      Gửi thông báo đến khách hàng ({" "}
                      <span className="text-primaryText300 font-bold">
                        chỉ điền khi trạng thái là từ chối hoặc đồng ý yêu cầu{" "}
                      </span>{" "}
                      )
                    </p>
                    <Input
                      placeholder="Điền thông báo đến khách hàng ( nếu có )"
                      border={true}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full gap-4">
                <div className="flex flex-row gap-4">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="flex flex-row w-full gap-[6px] h-[42px] border-solid border-[1px] border-primaryText300 bg-none rounded-md justify-center items-center"
                  >
                    <div className="text flex items-center text-primaryText300 font-bold text-xs h-full">
                      Hủy
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleUpdate(selectedRequest.Request_ID)}
                    className="flex flex-row w-full gap-[6px] h-[42px] border-solid border-[1px] border-primaryText300 bg-none rounded-md justify-center items-center"
                  >
                    <div className="text flex items-center text-primaryText300 font-bold text-xs h-full">
                      Cập nhật trạng thái
                    </div>
                  </button>
                </div>
                <button
                  type="submit"
                  onClick={handleCancel}
                  className="flex flex-row bg-primaryText300 gap-[6px] w-full h-[42px] rounded-md justify-center items-center"
                >
                  <div className="text flex items-center text-white font-bold text-xs h-full">
                    Gửi phản hồi khách hàng
                  </div>
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
      <Navbar>
        <div className="right h-full flex flex-col gap-4">
          <div className="inputright w-[342px]">
            <InputWithIcon
              purpose="search"
              placeholder="Nhập mã đơn hàng để tìm kiếm"
              background={true}
            />
          </div>
          <div className="flex flex-col h-full">
            <div className="note-container">
              <p className="note">
                Ghi chú: Ấn vào yêu cầu bất kì để xem hoặc thay đổi thông tin
              </p>
            </div>
            <div className="table-container h-full">
              <table className="cskhTable h-full bg-white table-fixed rounded-md">
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
                      <div className="flex flex-row gap-[6px] items-center justify-center h-full">
                        <p>Đính kèm</p>
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
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Phản hồi</p>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="h-full">
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
                        <div className="flex flex-row gap-[6px] items-center h-full overflow-hidden">
                          <p className="overflow-hidden text-ellipsis">
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
                        <div className="flex flex-row gap-[6px] items-center justify-center h-full">
                          <a
                            href={request.Request_Picture}
                            className="text-ellipsis hover:underline overflow-hidden text-xs text-blue-500"
                            target="_blank"
                          >
                            Xem
                          </a>
                        </div>
                      </td>
                      <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                        <div className="flex flex-row gap-[6px] items-center h-full">
                          <p>{identifyStatus(request.Request_Status)}</p>
                        </div>
                      </td>
                      <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                        <div className="flex flex-row gap-[6px] items-center h-full">
                          <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                            {request.Driver_ID ? request.Driver_ID : "---"}
                          </p>
                        </div>
                      </td>
                      <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                        <div className="flex flex-row gap-[6px] items-center justify-center h-full">
                          <p
                            onClick={() => handleResponseClick(request)}
                            className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-blue-500 hover:underline cursor-pointer"
                          >
                            Phản hồi
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

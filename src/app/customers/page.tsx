import React from "react";
import "@/Style/DTri/styles_customers.css";
<<<<<<< Updated upstream
import downup from "@/Pictures/Images_DT/downup.png";
import ava1 from "@/Pictures/Images_DT/ava1.png";
import Image from "next/image";
import NavbarTab from "@/components/CommonComponents/Layout/Items/NavbarTab";
import IconAndText from "@/components/CommonComponents/Layout/Items/IconAndText";
import Input from "@/components/CommonComponents/Inputs/Inputs";
=======
import Input, {
  InputWithIcon,
} from "@/components/CommonComponents/Inputs/Inputs";
>>>>>>> Stashed changes
import Navbar from "@/components/CommonComponents/Layout/Navbar";
import "@/Style/MTri/Loading.css";

<<<<<<< Updated upstream
const Customers: React.FC = () => {
  // Tạo một mảng giả lập 10 phần tử
  const customerData = Array(12).fill({
    id: "KH001",
    name: "BlueDuck",
    email: "blueduck974@gmail.com",
    phone: "0916607059",
    address: "323 LosLess NewTime",
  });
=======
import SortIC from "@/Svg/sortIC";
import { useRouter } from "next/navigation";
interface CustomerType {
  cusId: string;
  cusName: string;
  cusEmail: string;
  cusPhone: number;
  cusAddress: string;
  cusGender: number;
  cusBirthday: string;
}
const Customers: React.FC = () => {
  const [customers, setCustomers] = useState<CustomerType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleClick = (cus_ID: string) => {
    router.push(`/customers/${cus_ID}`);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/customer/", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Network not ok");
      }

      const result = await response.json();
      setCustomers(result);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
>>>>>>> Stashed changes

  return (
    <div className="all">
      <Navbar>
        <div className="right flex flex-col gap-4">
          <div className="inputright w-[342px]">
            <InputWithIcon
              purpose="search"
              placeholder="Nhập mã khách hàng / họ tên / email /...."
              background={true}
              
            />
          </div>
          <div className="table">
            <div className="note-container">
              <p className="note">
                Ghi chú: Ấn và khách hàng bất kì để xem hoặc thay đổi thông tin
              </p>
            </div>
            <div className="table-container">
              <table className="cusTable min-w-full bg-white table-fixed rounded-md">
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
                        <p>Mã khách hàng</p>
                        <SortIC />
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Họ</p>
                        <SortIC />
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Tên</p>
                        <SortIC />
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Giới tính</p>
                        <SortIC />
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
                        <p>Gmail</p>
                        <SortIC />
                      </div>
                    </th>
                    <th className="h-[42px] items-center break-words  p-3 text-left truncate">
                      <div className="flex flex-row gap-[6px] items-center h-full">
                        <p>Địa chỉ</p>
                        <SortIC />
                      </div>
                    </th>
                  </tr>
                </thead>
<<<<<<< Updated upstream
                <tbody>
                  {customerData.map((customer, index) => (
                    <tr key={index}>
                      <td className="rowdetail">{customer.id}</td>
                      <td className="rowdetail">{customer.name}</td>
                      <td className="email-cell">{customer.email}</td>
                      <td className="rowdetail">{customer.phone}</td>
                      <td className="address-cell">{customer.address}</td>
                    </tr>
                  ))}
                </tbody>
=======
                {isLoading ? (
                  <div className="spinner-container">
                    <div className="spinner"></div>
                    <p className="text-base font-bold text-navbarText">
                      Đang tải dữ liệu...
                    </p>
                  </div>
                ) : (
                  <tbody>
                    {customers.map((cus, index) => (
                      <tr key={index} onClick={() => handleClick(cus.cusId)}>
                        <td className="h-[42px] break-words p-3 text-left truncate">
                          <div className="flex flex-row gap-[6px] items-center h-full w-full justify-end">
                            <p>{index + 1}</p>
                          </div>
                        </td>
                        <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                          <div className="flex flex-row gap-[6px] items-center h-full">
                            <p>{cus.cusId}</p>
                          </div>
                        </td>
                        <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                          <div className="flex flex-row gap-[6px] items-center h-full">
                            <p>
                              {cus.cusName.split(" ").slice(0, -1).join(" ")}
                            </p>
                          </div>
                        </td>
                        <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                          <div className="flex flex-row gap-[6px] items-center h-full">
                            <p>{cus.cusName.split(" ").slice(-1).join(" ")}</p>
                          </div>
                        </td>
                        <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                          <div className="flex flex-row gap-[6px] items-center h-full">
                            <p>{cus.cusGender == 0 ? "Nam" : "Nữ"}</p>
                          </div>
                        </td>
                        <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                          <div className="flex flex-row gap-[6px] items-center h-full">
                            <p>{cus.cusPhone}</p>
                          </div>
                        </td>
                        <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                          <div className="flex flex-row gap-[6px] items-center h-full">
                            <p>{cus.cusEmail}</p>
                          </div>
                        </td>
                        <td className="h-[42px] items-center break-words  p-3 text-left truncate">
                          <div className="flex flex-row gap-[6px] items-center h-full">
                            <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                              {cus.cusAddress}
                            </p>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                )}
>>>>>>> Stashed changes
              </table>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Customers;

"use client";
import React, { useEffect, useState } from "react";
import "@/Style/DTri/styles_customers.css";
import downup from "@/Pictures/Images_DT/downup.png";
import Image from "next/image";
import Input from "@/components/CommonComponents/Inputs/Inputs";
import Navbar from "@/components/CommonComponents/Layout/Navbar";

interface CustomerType {
  cus_ID: string;
  cus_Name: string;
  cus_Email: string;
  cus_Phone: number;
  cus_Address: string;
  cus_Gender: number;
  cus_Birthday: string;
}
const Customers: React.FC = () => {
  const [customers, setCustomers] = useState<CustomerType[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/customer/Customers",
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("Network not ok");
      }

      const result = await response.json();
      setCustomers(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="all">
      <Navbar>
        <div className="right">
          <div className="inputright">
            <Input
              type="search"
              placeholder="Nhập mã khách hàng / họ tên / email /...."
            />
          </div>
          <div className="right-bottom">
            <div className="note-container">
              <p className="note">
                Ghi chú: Ấn và khách hàng bất kì để xem hoặc thay đổi thông tin
              </p>
            </div>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>
                      <div className="header-cell">
                        Mã khách hàng
                        <Image
                          src={downup}
                          alt="downup icon"
                          className="downup-icon"
                        />
                      </div>
                    </th>
                    <th>
                      <div className="header-cell">
                        Họ tên
                        <Image
                          src={downup}
                          alt="downup icon"
                          className="downup-icon"
                        />
                      </div>
                    </th>
                    <th>
                      <div className="header-cell">
                        Email
                        <Image
                          src={downup}
                          alt="downup icon"
                          className="downup-icon"
                        />
                      </div>
                    </th>
                    <th>
                      <div className="header-cell">
                        Số điện thoại
                        <Image
                          src={downup}
                          alt="downup icon"
                          className="downup-icon"
                        />
                      </div>
                    </th>
                    <th>
                      <div className="header-cell">
                        Địa chỉ
                        <Image
                          src={downup}
                          alt="downup icon"
                          className="downup-icon"
                        />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer, index) => (
                    <tr key={index}>
                      <td className="rowdetail">{customer.cus_ID}</td>
                      <td className="rowdetail">{customer.cus_Name}</td>
                      <td className="email-cell">{customer.cus_Email}</td>
                      <td className="rowdetail">{customer.cus_Phone}</td>
                      <td className="address-cell">{customer.cus_Address}</td>
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

export default Customers;

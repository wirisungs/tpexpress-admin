<<<<<<< Updated upstream
import React from 'react'
import Navbar from '@/components/CommonComponents/Layout/Navbar'
import TramCSS from '@/Style/Tram.module.css'
import Link from "next/link"
import BackSvg from '@/Svg/backIC'
import {Box,
  FormControl,
  FormHelperText,
  InputAdornment,
  OutlinedInput,
  TextField
} from '@mui/material'
import Input, {
  InputDatePicker,
  InputFunction,
  InputWithIcon,
  InputSelection,
} from '@/components/CommonComponents/Inputs/Inputs'
import DropdownIC from '@/Svg/dropdown'
import ButtonCPN from '@/components/CommonComponents/Buttons/Button'
=======
"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/CommonComponents/Layout/Navbar";
import TitleBar from "@/components/CommonComponents/Layout/bars/TitleBar";
import Input, {
  InputSelection,
} from "@/components/CommonComponents/Inputs/Inputs";
import Button from "@/components/CommonComponents/Buttons/Button";

interface OrderType {
  Order_ID: string;
  Receiver_Phone: string;
  Receiver_Name: string;
  Receiver_Address: string;
  Order_Note: string;
  Order_COD: number;
  Order_TotalPrice: number;
  Order_Type: string;
  Order_Status: string;
  Services_ID: string;
  Voucher_ID: string;
  Order_Date: string;
  Payment_ID: string;
  Cus_ID: string;
  Driver_ID: string;
  customerDetails: CustomerDetails;
  driverDetails: DriverDetails;
  deliveryStatus: DeliveryStatus;
}
interface CustomerDetails {
  cus_Id: string;
  cus_Name: string;
  email: string;
}

interface DriverDetails {
  driver_Id: string;
  driver_Name: string;
}

interface DeliveryStatus {
  Status_ID: string;
  Status_Name: string;
}
>>>>>>> Stashed changes

const CreateOrderPage = () => {
  const [order, setOrder] = useState<OrderType | null>(null);
  const [senderName, setSenderName] = useState<string>("");
  const [senderAddress, setSenderAddress] = useState<string>("");
  const [senderPhone, setSenderPhone] = useState<string>("");
  const [receiverName, setReceiverName] = useState<string>("");
  const [receiverAddress, setReceiverAddress] = useState<string>("");
  const [receiverPhone, setReceiverPhone] = useState<string>("");
  const [cod, setCod] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const areaOptions: { [key: string]: string } = {
    "Trong khu vực Tp. HCM": "Nội thành",
    "Ngoài khu vực Tp. HCM": "Ngoại thành",
  };
  const serviceOptions: { [key: string]: string } = {
    "Giao hàng tiết kiệm": "S001",
    "Giao hàng nhanh": "S002",
    "Giao hàng hỏa tốc": "S003",
    "Giao hàng Thiên Phúc": "S004",
  };
  const fragileOptions: { [key: string]: boolean } = { Không: false, Có: true };

  // Select khu vực
  const [selectedArea, setSelectedArea] = useState<string>("Nội thành");
  const handleAreaChange = (value: string) => {
    // console.log(value);
    setSelectedArea(value);
  };

  // Select dịch vụ
  const [selectedService, setSelectedService] = useState<string>("S001");
  const handleServiceChange = (value: string) => {
    // console.log(value);
    setSelectedService(value);
  };

  // Select fragile
  const [selectedFragile, setSelectedFragile] = useState<boolean>(false);
  const handleFragileChange = (value: string) => {
    // console.log(value);
    setSelectedFragile(value);
  };

  // Lấy dữ liệu từ form
  const collectData = async (e) => {
    e.preventDefault();

    // Kết nối với database
    try {
      const response = await fetch("http://localhost:5000/api/order/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Sender_Name: senderName,
          Sender_Address: senderAddress,
          Sender_Phone: senderPhone,
          Receiver_Name: receiverName,
          Receiver_Address: receiverAddress,
          Receiver_Phone: receiverPhone,
          Order_COD: cod,
          Order_Weight: weight,
          Order_Type: selectedArea,
          Services_ID: selectedService,
          Order_IsFragile: selectedFragile,
        }),
      });

      console.log(selectedArea, selectedService);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Data saved:", result);
    } catch (error) {
      console.error("Error collecting data:", error);
    }
  };
  return (
    <div className="flex">
      <Navbar>
<<<<<<< Updated upstream
        <main className={TramCSS.body}>
          <div className={TramCSS.title}>
            <Link href='/order'>
              <button className={TramCSS.backBTN}>
                <BackSvg/>
              </button>
            </Link>
            <h1 style={{fontSize:'32px',fontWeight:'700'}}>Tạo đơn hàng</h1>
          </div>
          <div className={TramCSS.form}>
            <div className={TramCSS.orderPark}>
              <span className={TramCSS.inputTitle}>Tên đơn hàng</span>
              <FormControl sx={{m:0,width: '100%' }} variant="outlined">
              <OutlinedInput
                id="outlined-adornment-weight"
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  'aria-label': 'weight',
                }}
                placeholder='Đồ điện tử...'/>
              </FormControl>
            </div>
            <div className={TramCSS.orderContain}>
              <div className={TramCSS.containRight}>
                <div className={TramCSS.orderPark}>
                  <span className={TramCSS.inputTitle}>Mã người gửi</span>
                  <FormControl sx={{m:0,width: '100%' }} variant="outlined">
                    <OutlinedInput
                      id="outlined-adornment-weight"
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        'aria-label': 'weight',}}
                      placeholder='D34F486MG...'/>
                  </FormControl>
                </div>
                <div className={TramCSS.orderPark}>
                  <span className={TramCSS.inputTitle}>Mã người nhận</span>
                  <FormControl sx={{m:0,width: '100%' }} variant="outlined">
                    <OutlinedInput
                      id="outlined-adornment-weight"
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        'aria-label': 'weight',}}
                      placeholder='D34F486MG...'/>
                  </FormControl>
                </div>
                <div className={TramCSS.orderPark}>
                  <span className={TramCSS.inputTitle}>Thu hộ&nbsp;(Nếu có)</span>
                  <FormControl sx={{m:0,width: '100%' }} variant="outlined">
                    <OutlinedInput
                      id="outlined-adornment-weight"
                      endAdornment={<InputAdornment position="end">VNĐ</InputAdornment>}
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        'aria-label': 'weight',}}
                      placeholder='1.000.000'/>
                  </FormControl>
                </div>
                {/* có thể sử dụng autocomplete của mui */}
                <div className={TramCSS.orderPark}>
                  <span className={TramCSS.inputTitle}>Phạm vi</span>
                  <FormControl sx={{m:0,width: '100%' }} variant="outlined">
                    <OutlinedInput
                      id="outlined-adornment-weight"
                      endAdornment={<InputAdornment position="end">
                        <button style={{height:'25px', width:'25px', justifyContent:'center', alignItems:'center'}}><DropdownIC fill='#CBCBCB'/></button>
                        </InputAdornment>}
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        'aria-label': 'weight',}}
                      placeholder='Trong phạm vi Tp HCM'/>
                  </FormControl>
                </div>
                <div className={TramCSS.orderPark}>
                  <span className={TramCSS.inputTitle}>Dịch vụ</span>
                  <FormControl sx={{m:0,width: '100%' }} variant="outlined">
                    <OutlinedInput
                      id="outlined-adornment-weight"
                      endAdornment={<InputAdornment position="end">
                        <button style={{height:'25px', width:'25px', justifyContent:'center', alignItems:'center'}}><DropdownIC fill='#CBCBCB'/></button>
                        </InputAdornment>}
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        'aria-label': 'weight',}}
                      placeholder='Giao hàng tiết kiệm'/>
                  </FormControl>
                </div>
                <div className={TramCSS.orderPark}>
                  <span className={TramCSS.inputTitle}>Dễ vỡ?</span>
                  <FormControl sx={{m:0,width: '100%' }} variant="outlined">
                    <OutlinedInput
                      id="outlined-adornment-weight"
                      endAdornment={<InputAdornment position="end">
                        <button style={{height:'25px', width:'25px', justifyContent:'center', alignItems:'center'}}><DropdownIC fill='#CBCBCB'/></button>
                        </InputAdornment>}
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        'aria-label': 'weight',}}
                      placeholder='Không'/>
                  </FormControl>
                </div>
              </div>
              <div className={TramCSS.containLeft}>
                <div className={TramCSS.orderPark}>
                  <span className={TramCSS.inputTitle}>Nơi gửi</span>
                  <FormControl sx={{m:0,width: '100%' }} variant="outlined">
                    <OutlinedInput
                      id="outlined-adornment-weight"
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        'aria-label': 'weight',}}
                      placeholder='12/3/4/2/4 Phạm Ngũ Lão, Quận 1, Tp HCM'/>
                  </FormControl>
                </div>
                <div className={TramCSS.orderPark}>
                  <span className={TramCSS.inputTitle}>Nơi nhận</span>
                  <FormControl sx={{m:0,width: '100%' }} variant="outlined">
                    <OutlinedInput
                      id="outlined-adornment-weight"
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        'aria-label': 'weight',}}
                      placeholder='12/3/4/2/4 Phạm Ngũ Lão, Quận 1, Tp HCM'/>
                  </FormControl>
                </div>
                <div className={TramCSS.orderPark}>
                  <span className={TramCSS.inputTitle}>Khối lượng</span>
                  <FormControl sx={{m:0,width: '100%' }} variant="outlined">
                    <OutlinedInput
                      id="outlined-adornment-weight"
                      endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        'aria-label': 'weight',}}
                      placeholder='1, 2, 3, ....'
                      type='number'/>
                  </FormControl>
                </div>
                <div className={TramCSS.orderPark}>
                  <span className={TramCSS.inputTitle}>Chiều dài</span>
                  <FormControl sx={{m:0,width: '100%' }} variant="outlined">
                    <OutlinedInput
                      id="outlined-adornment-weight"
                      endAdornment={<InputAdornment position="end">m</InputAdornment>}
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        'aria-label': 'weight',}}
                      placeholder='1, 2, 3, ....'
                      type='number'/>
                  </FormControl>
                </div>
                <div className={TramCSS.orderPark}>
                  <span className={TramCSS.inputTitle}>Chiều rộng</span>
                  <FormControl sx={{m:0,width: '100%' }} variant="outlined">
                    <OutlinedInput
                      id="outlined-adornment-weight"
                      endAdornment={<InputAdornment position="end">m</InputAdornment>}
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        'aria-label': 'weight',}}
                      placeholder='1, 2, 3, ....'
                      type='number'/>
                  </FormControl>
                </div>
                <div className={TramCSS.orderPark}>
                  <span className={TramCSS.inputTitle}>Chiều cao</span>
                  <FormControl sx={{m:0,width: '100%' }} variant="outlined">
                    <OutlinedInput
                      id="outlined-adornment-weight"
                      endAdornment={<InputAdornment position="end">m</InputAdornment>}
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        'aria-label': 'weight',}}
                      placeholder='1, 2, 3, ....'
                      type='number'/>
                  </FormControl>
                </div>
              </div>
            </div>
            <ButtonCPN text={'Lên đơn'} customColor={'#eb455f'}/>
          </div>
        </main>
=======
        <TitleBar text="Tạo đơn hàng" />
        <form
          onSubmit={collectData}
          className="formBox flex flex-col items-center w-full h-full bg-white mt-6 rounded-md p-6 gap-6"
        >
          {/* Thông tin người gửi / nhận */}
          <div className="flex flex-col w-full">
            <p className="tittle text-2xl text-navbarText font-bold">
              Thông tin người nhận / gửi
            </p>
            <div className="flex flex-row w-full gap-6">
              <div className="flex flex-col gap-3 mt-3 w-full">
                <div className="flex flex-col gap-3">
                  <Input
                    placeholder="Trần Văn A"
                    label="Tên người gửi *"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    border={true}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Input
                    placeholder="TPExpress CN1"
                    label="Nơi gửi *"
                    value={senderAddress}
                    onChange={(e) => setSenderAddress(e.target.value)}
                    border={true}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Input
                    placeholder="0488392043"
                    label="Số điện thoại người gửi *"
                    value={senderPhone}
                    onChange={(e) => setSenderPhone(e.target.value)}
                    border={true}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-3 w-full">
                <div className="flex flex-col gap-3">
                  <Input
                    placeholder="Trần Văn B"
                    label="Tên người nhận *"
                    value={receiverName}
                    onChange={(e) => setReceiverName(e.target.value)}
                    border={true}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Input
                    placeholder="23/11 Phòng bóng bàn"
                    label="Nơi nhận *"
                    value={receiverAddress}
                    onChange={(e) => setReceiverAddress(e.target.value)}
                    border={true}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Input
                    placeholder="0488392043"
                    label="Số điện thoại người nhận *"
                    value={receiverPhone}
                    onChange={(e) => setReceiverPhone(e.target.value)}
                    border={true}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Thông tin đơn hàng */}
          <div className="flex flex-col w-full">
            <p className="tittle text-2xl text-navbarText font-bold">
              Thông tin đơn hàng
            </p>
            <div className="flex flex-row w-full gap-6">
              <div className="flex flex-col gap-3 mt-3 w-full">
                <div className="flex flex-col gap-3">
                  <Input
                    placeholder="---"
                    label="Thu hộ (Nếu có)"
                    value={cod}
                    onChange={(e) => setCod(e.target.value)}
                    border={true}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <InputSelection
                    label="Khu vực *"
                    options={areaOptions}
                    onChange={handleAreaChange}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <InputSelection
                    label="Dịch vụ *"
                    options={serviceOptions}
                    onChange={handleServiceChange}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-3 w-full">
                <div className="flex flex-col gap-3">
                  <Input
                    placeholder="8 kg"
                    label="Cân nặng *"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    border={true}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <InputSelection
                    label="Dễ vỡ? *"
                    options={fragileOptions}
                    onChange={handleFragileChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Tạm tính */}
          <div className="flex flex-col w-full">
            <p className="tittle text-2xl text-navbarText font-bold">
              Tạm tính
            </p>
            <div className="flex flex-row w-full gap-6">
              <div className="flex flex-col gap-3 mt-3 w-full">
                <div className="service flex flex-row justify-between text-navbarText text-base">
                  <p>Dịch vụ:</p>
                  <p>
                    {selectedService === "S001"
                      ? "Giao hàng tiết kiệm"
                      : selectedService === "S002"
                      ? "Giao hàng nhanh"
                      : selectedService === "S003"
                      ? "Giao hàng hỏa tốc"
                      : "Giao hàng Thiên Phúc"}
                  </p>
                </div>
                <div className="service flex flex-row justify-between text-navbarText text-base">
                  <p>Phí thu hộ:</p>
                  <p>{cod}</p>
                </div>
                <div className="service flex flex-row justify-between text-navbarText text-base">
                  <p>Phí vận chuyển:</p>
                  <p>30.000đ</p>
                </div>
              </div>
            </div>
          </div>
          <Button text="Lên đơn" customColor="#EB455F" />
        </form>
>>>>>>> Stashed changes
      </Navbar>
    </div>
  )
}

export default CreateOrderPage
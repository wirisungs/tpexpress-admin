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

const CreateOrderPage = () => {
  return (
    <div>
      <Navbar>
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
      </Navbar>
    </div>
  )
}

export default CreateOrderPage
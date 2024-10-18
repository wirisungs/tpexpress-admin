import React from 'react'
import TramCSS from '@/Style/Tram.module.css'
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

const CreateForm = () => {
  return (
    <main>
        <div className={TramCSS.form}>
            <div className={TramCSS.personPart}>
              <span style={{fontSize:'24px',fontWeight:'700'}}>Thông tin người gửi / nhận</span>
              <div className={TramCSS.orderContain}>
                <div className={TramCSS.containRight}>
                  <div className={TramCSS.orderInput}>
                    <span className={TramCSS.inputTitle}>Tên người gửi</span>
                    <FormControl sx={{m:0,width: '100%' }} variant="outlined">
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                          'aria-label': 'weight',}}
                        placeholder='Trần Văn A'/>
                    </FormControl>
                  </div>
                  <div className={TramCSS.orderInput}>
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
                  <div className={TramCSS.orderInput}>
                    <span className={TramCSS.inputTitle}>Số điện thoại người gửi</span>
                    <FormControl sx={{m:0,width: '100%' }} variant="outlined">
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                          'aria-label': 'weight',}}
                        placeholder='0396 *** 947'/>
                    </FormControl>
                  </div>
                </div>
                <div className={TramCSS.containLeft}>
                  <div className={TramCSS.orderInput}>
                    <span className={TramCSS.inputTitle}>Tên người nhận</span>
                    <FormControl sx={{m:0,width: '100%' }} variant="outlined">
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                          'aria-label': 'weight',}}
                        placeholder='Trần Văn A'/>
                    </FormControl>
                  </div>
                  <div className={TramCSS.orderInput}>
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
                  <div className={TramCSS.orderInput}>
                    <span className={TramCSS.inputTitle}>Số điện thoại người nhận</span>
                    <FormControl sx={{m:0,width: '100%' }} variant="outlined">
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                          'aria-label': 'weight',}}
                        placeholder='0396 *** 947'/>
                    </FormControl>
                  </div>
                </div>
              </div>
            </div>
            <div className={TramCSS.orderPart}>
              <span style={{fontSize:'24px',fontWeight:'700'}}>Thông tin đơn hàng</span>
              <div className={TramCSS.orderContain}>
                <div className={TramCSS.orderInput}>
                    <span className={TramCSS.inputTitle}>Tên đơn hàng</span>
                    <FormControl sx={{m:0,width: '100%' }} variant="outlined">
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                          'aria-label': 'weight',}}
                        placeholder='Đồ điện tử...'/>
                    </FormControl>
                  </div>
                <div className={TramCSS.containRight}>
                  <div className={TramCSS.orderInput}>
                    <span className={TramCSS.inputTitle}>Thu hộ&nbsp;(Nếu có)</span>
                    <FormControl sx={{m:0,width: '100%' }} variant="outlined">
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={<InputAdornment position="end">VNĐ</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                          'aria-label': 'weight',}}
                        placeholder='1 000 000'/>
                    </FormControl>
                  </div>
                  <div className={TramCSS.orderInput}>
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
                  <div className={TramCSS.orderInput}>
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
                  <div className={TramCSS.orderInput}>
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
                  <div className={TramCSS.orderInput}>
                    <span className={TramCSS.inputTitle}>Cân năng</span>
                    <FormControl sx={{m:0,width: '100%' }} variant="outlined">
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                          'aria-label': 'weight',}}
                        placeholder='1, 2, 3, ....'/>
                    </FormControl>
                  </div>
                  <div className={TramCSS.orderInput}>
                    <span className={TramCSS.inputTitle}>Chiều dài</span>
                    <FormControl sx={{m:0,width: '100%' }} variant="outlined">
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={<InputAdornment position="end">m</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                          'aria-label': 'weight',}}
                        placeholder='1, 2, 3, ....'/>
                    </FormControl>
                  </div>
                  <div className={TramCSS.orderInput}>
                    <span className={TramCSS.inputTitle}>Chiều rộng</span>
                    <FormControl sx={{m:0,width: '100%' }} variant="outlined">
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={<InputAdornment position="end">m</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                          'aria-label': 'weight',}}
                        placeholder='1, 2, 3, ....'/>
                    </FormControl>
                  </div>
                  <div className={TramCSS.orderInput}>
                    <span className={TramCSS.inputTitle}>Chiều cao</span>
                    <FormControl sx={{m:0,width: '100%' }} variant="outlined">
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={<InputAdornment position="end">m</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                          'aria-label': 'weight',}}
                        placeholder='1, 2, 3, ....'/>
                    </FormControl>
                  </div>
                </div>
              </div>
            </div>
            <ButtonCPN text={'Lên đơn'} customColor={'#eb455f'} width={342}/>
          </div>
    </main>

  )
}

export default CreateForm
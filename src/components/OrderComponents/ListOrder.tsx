import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip
} from '@mui/material'
import TramCSS from '@/Style/Tram.module.css'
import Link from "next/link"
import "@/components/CommonComponents/Buttons/Button"
import ButtonCPN from '@/components/CommonComponents/Buttons/Button'
import PlusIC from '@/Svg/plusIC'
import SortIC from '@/Svg/sortIC'

function orderData(
  stt: string,
  id: string,
  sender: string,
  receiver: string,
  place: string,
  address:string,
  driver: string,
  status: string,
  bikenumber:string
) {
  return { stt, id, sender, receiver, place,address, driver, status, bikenumber}
}
const Order = [
  orderData('01','DH001','Nguyễn Văn B','Nguyễn Văn C','Quận 7, TP.HCM','63/5, QL34, Đường...','Nguyễn Văn A','Đang vận chuyển', '51B-67890'),
  orderData('02','DH005','Nguyễn Văn H','Nguyễn Văn D','---','63/5, QL34, Đường...','---','Đã hủy', '---'),
  orderData('01','DH001','Nguyễn Văn B','Nguyễn Văn C','Quận 7, TP.HCM','63/5, QL34, Đường...','Nguyễn Văn A','Đang vận chuyển', '51B-67890'),
  orderData('02','DH005','Nguyễn Văn H','Nguyễn Văn D','---','63/5, QL34, Đường...','---','Đã hủy', '---'),
  orderData('01','DH001','Nguyễn Văn B','Nguyễn Văn C','Quận 7, TP.HCM','63/5, QL34, Đường...','Nguyễn Văn A','Đang vận chuyển', '51B-67890'),
  orderData('02','DH005','Nguyễn Văn H','Nguyễn Văn D','---','63/5, QL34, Đường...','---','Đã hủy', '---'),
  orderData('01','DH001','Nguyễn Văn B','Nguyễn Văn C','Quận 7, TP.HCM','63/5, QL34, Đường...','Nguyễn Văn A','Đang vận chuyển', '51B-67890'),
  orderData('02','DH005','Nguyễn Văn H','Nguyễn Văn D','---','63/5, QL34, Đường...','---','Đã hủy', '---'),
  orderData('01','DH001','Nguyễn Văn B','Nguyễn Văn C','Quận 7, TP.HCM','63/5, QL34, Đường...','Nguyễn Văn A','Đang vận chuyển', '51B-67890'),
  orderData('02','DH005','Nguyễn Văn H','Nguyễn Văn D','---','63/5, QL34, Đường...','---','Đã hủy', '---'),
  orderData('01','DH001','Nguyễn Văn B','Nguyễn Văn C','Quận 7, TP.HCM','63/5, QL34, Đường...','Nguyễn Văn A','Đang vận chuyển', '51B-67890'),
  orderData('02','DH005','Nguyễn Văn H','Nguyễn Văn D','---','63/5, QL34, Đường...','---','Đã hủy', '---'),
  orderData('01','DH001','Nguyễn Văn B','Nguyễn Văn C','Quận 7, TP.HCM','63/5, QL34, Đường...','Nguyễn Văn A','Đang vận chuyển', '51B-67890'),
  orderData('02','DH005','Nguyễn Văn H','Nguyễn Văn D','---','63/5, QL34, Đường...','---','Đã hủy', '---'),
]

const ListOrder = () => {
  return (
    <main>
        <div className={TramCSS.list}>
                <Link href='/order/create'>
                <ButtonCPN text={'Tạo đơn'} customColor={'#eb455f'} icon={<PlusIC fill={"#fff"} />}/>
                </Link>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer  sx={{ maxHeight: 600 }}>
                    <Table stickyHeader style={{boxShadow:'#cbcbcb'}}>
                    <TableHead>
                        <TableRow>
                        <TableCell className={TramCSS.tbHead}>STT<SortIC fill='#CBCBCB'/></TableCell>
                        <TableCell className={TramCSS.tbHead}>Mã đơn<SortIC fill='#CBCBCB'/></TableCell>
                        <TableCell className={TramCSS.tbHead}>Người gửi<SortIC fill='#CBCBCB'/></TableCell>
                        <TableCell className={TramCSS.tbHead}>Người nhận<SortIC fill='#CBCBCB'/></TableCell>
                        <TableCell className={TramCSS.tbHead}>Vị trí đơn<SortIC fill='#CBCBCB'/></TableCell>
                        <TableCell className={TramCSS.tbHead}>Địa chỉ<SortIC fill='#CBCBCB'/></TableCell>
                        <TableCell className={TramCSS.tbHead}>Tài xế<SortIC fill='#CBCBCB'/></TableCell>
                        <TableCell className={TramCSS.tbHead}>Trạng thái<SortIC fill='#CBCBCB'/></TableCell>
                        <TableCell className={TramCSS.tbHead}>Biển số<SortIC fill='#CBCBCB'/></TableCell>
                        <TableCell className={TramCSS.tbHead}>Thêm<SortIC fill='#CBCBCB'/></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Order.map((row) => (
                        <TableRow
                            key={row.id}
                            /*sx={{ '&:last-child td, &:last-child th': { border: 0 } }}*/>
                            <TableCell className={TramCSS.tbBody}>{row.stt}</TableCell>
                            <TableCell className={TramCSS.tbBody}>{row.id}</TableCell>
                            <TableCell className={TramCSS.tbBody}>{row.sender}</TableCell>
                            <TableCell className={TramCSS.tbBody}>{row.receiver}</TableCell>
                            <TableCell className={TramCSS.tbBody}>{row.place}</TableCell>
                            <TableCell className={TramCSS.tbBody}>{row.address}</TableCell>
                            <TableCell className={TramCSS.tbBody}>{row.driver}</TableCell>
                            <TableCell className={TramCSS.tbBody}>
                            <Chip
                                variant="outlined"
                                label={row.status}
                                color={row.status === 'Đang vận chuyển' ? 'success' : 'error'}
                                // size="small"
                            />
                            </TableCell>
                            <TableCell className={TramCSS.tbBody}>{row.bikenumber}</TableCell>
                            <TableCell className={TramCSS.tbBody}>icon</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>
                </Paper>
        </div>

    </main>
  )
}

export default ListOrder
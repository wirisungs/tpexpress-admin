import React from 'react'

import TrackCard from '@/components/OrderComponents/TrackCard'
import TramCSS from '@/Style/Tram.module.css'
import "@/components/CommonComponents/Buttons/Button"
import Navbar from '@/components/CommonComponents/Layout/Navbar'
import WarehouseIC from '@/Svg/warehouseIC'
import BuildingIC from '@/Svg/buildingIC'
import FlagIC from '@/Svg/flagIC'
import BoxIC from '@/Svg/boxIC'
import Input, {
  InputDatePicker,
  InputFunction,
  InputWithIcon,
  InputSelection,
} from '@/components/CommonComponents/Inputs/Inputs'
import OrderList from '@/components/OrderComponents/ListOrder'

const OrderPage = () => {
  return (
    <div>
      <Navbar>
        <main className={TramCSS.body}>
          <InputDatePicker/>
          <div className={TramCSS.trackingPark}>
            <TrackCard text='Đơn trong kho' number='122' icon={<WarehouseIC/>} customColor='#FBECDA'/>
            <TrackCard text='Đơn thành phố' number='12' icon={<BuildingIC fill='#007AFF'/>} customColor='#B8DDFF'/>
            <TrackCard text='Đơn toàn quốc' number='54' icon={<FlagIC fill='#0DA651'/>} customColor='#9DEEB9'/>
            <TrackCard text='Đơn đang giao' number='8' icon={<BoxIC fill='#FDF7B9' color='#F1E01D'/>} customColor='#FDF7B9'/>
          </div>
          <div className={TramCSS.map}>
            <div className={TramCSS.mapTitle}>
              <h1 style={{fontSize:'24px', fontWeight:'bold'}}>Bản đồ vận chuyển</h1>
              <div className={TramCSS.searchBox}>
                <InputWithIcon purpose="search" placeholder="Tên / Mã tài xế" />
              </div>
            </div>
            <div className={TramCSS.importMap}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.290109478603!2d106.59804621069134!3d10.865525089244048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b088de30f3b%3A0xd2140740d360f705!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBOZ2_huqFpIG5n4buvIC0gVGluIGjhu41jIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCAoSFVGTElUKSBDxqEgc-G7nyBIw7NjIE3DtG4!5e0!3m2!1svi!2s!4v1728607609859!5m2!1svi!2s" className={TramCSS.importMap}></iframe>
              {/* width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" */}
            </div>
          </div>
          <OrderList/>
        </main>
      </Navbar>
    </div>
  )
}

export default OrderPage

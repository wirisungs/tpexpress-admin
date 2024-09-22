import React from 'react'
// import TrackCard from '@/components/TrackCard'
import OrderCSS from './order.module.css'
import WarehouseSvg from '../../Svg/Warehouse';
import SearchSvg from '../../Svg/Search'
import Link from "next/link";
import TrackCard from '@/components/TrackCard'

const OrderPage = () => {
  return (
    <main className={OrderCSS.body}>
      <div className={OrderCSS.trackingPark}>

        <TrackCard type="Đơn trong kho"/>
        <TrackCard type="Đơn thành phố"/>
        <TrackCard type="Đơn toàn quốc"/>
        <TrackCard type="Đơn đang giao"/>

        {/* <div className={OrderCSS.card}>
          <div style={{backgroundColor: '#FBECDA'}} className={OrderCSS.cardIcon}>
            <WarehouseSvg/>
          </div>
          <div>
            <h2>122</h2>
            <p>Đơn thành phố</p>
          </div>
        </div>

        <div className={OrderCSS.card}>
          <div style={{backgroundColor: '#FBECDA'}} className={OrderCSS.cardIcon}>
            <WarehouseSvg/>
          </div>
          <div>
            <h2>122</h2>
            <p>Đơn thành phố</p>
          </div>
        </div>

        <div className={OrderCSS.card}>
          <div style={{backgroundColor: '#FBECDA'}} className={OrderCSS.cardIcon}>
            <WarehouseSvg/>
          </div>
          <div>
            <h2>122</h2>
            <p>Đơn thành phố</p>
          </div>
        </div>

        <div className={OrderCSS.card}>
          <div style={{backgroundColor: '#FBECDA'}} className={OrderCSS.cardIcon}>
            <WarehouseSvg/>
          </div>
          <div>
            <h2>122</h2>
            <p>Đơn thành phố</p>
          </div>
        </div> */}

      </div>
      <div className={OrderCSS.map}>
          <div className={OrderCSS.mapTitle}>
            <h1>Bản đồ vận chuyển</h1>
            <div className={OrderCSS.searchBox}>
              <input type="text" placeholder='Tên / Mã tài xế'
              className={OrderCSS.input}/>
              <button className={OrderCSS.btnSearch}>
                <SearchSvg/>
              </button>
            </div>
          </div>
          <div className={OrderCSS.importMap}></div>
      </div>
      <div className={OrderCSS.list}>

          <Link href='order/create'>Tạo đơn</Link>

        <table className={OrderCSS.table}>

        </table>
      </div>
    </main>
  )
}

export default OrderPage

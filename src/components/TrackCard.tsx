import React from 'react'
import OrderCSS from '../app/order/order.module.css'
import WarehouseSvg from '../Svg/Warehouse';

const TrackCard = ({type}:{type:string}) => {
  return (
    <div className={OrderCSS.card}>
    <WarehouseSvg/>
        <h2>122</h2>
        <p>{type}</p>
    </div>
  )
}

export default TrackCard


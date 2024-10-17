import React from 'react'
import Navbar from '@/components/CommonComponents/Layout/Navbar'
import TramCSS from '@/Style/Tram.module.css'
import Link from "next/link"
import BackSvg from '@/Svg/backIC'
import FormCreate from '@/components/OrderComponents/CreateForm'



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
          <FormCreate/>
        </main>
      </Navbar>
    </div>
  )
}

export default CreateOrderPage
import React from 'react';
import '@/Style/DTri/styles_popupc.css';
import downup from '@/Pictures/Images_DT/downup.png';
import siunhan from '@/Pictures/Images_DT/avasiunhan.png'
import Image from 'next/image';

const PopupC: React.FC = () => {
  const cusdetalData = Array(12).fill({
    id: 'DH001',
    ng: 'gửi',
    name: 'Trần Văn B',
    Tu: '64 Hồng Bàng, TpHCM',
    Den: '457 Huỳnh Tấn Phát, Q7',
    Ngay: '28/03/2024',
    Trangthai: 'Đã giao',
  });

  return (
    <div className='all'>
       <div className='top'>
        <div className='top-left'>
            <div className='top-left1'>
               <Image src={siunhan} alt="downup icon" />
            </div>
            <div className='top-left2'>
              <p className='name'>Trần Văn A</p>
              <p className='detail'>tranvana@gmail.com</p>
              <p className='detail'>0916607554</p>
              <p className='detail'>49 Nhà bè, Q7, TPHCM</p>
            </div>
        </div>
        <div className='top-right'>
            <div className='top-right1'>
                <p className='detail'>Đơn gửi</p>
                <p className='name'>1</p>
            </div>
            <div className='top-right1'>
                <p className='detail'>Đơn nhận</p>
                <p className='name'>30</p>
            </div>
            <div className='top-right1'>
                <p className='detail'>Đơn nhận</p>
                <p className='name'>3</p>
            </div>
        </div>
       </div>

         <div className='topic'>      
            <p>Lịch sử đơn</p>
        </div>
      <div className='table-container'>
        <table>
          <thead>
            <tr>
              <th>
                <div className="header-cell">
                  Mã đơn
                  <Image src={downup} alt="downup icon" className='downup-icon' />
                </div>
              </th>
              <th>
                <div className="header-cell">
                  Nhận/gửi
                  <Image src={downup} alt="downup icon" className='downup-icon' />
                </div>
              </th>
              <th>
                <div className="header-cell">
                  Người nhận/gửi
                  <Image src={downup} alt="downup icon" className='downup-icon' />
                </div>
              </th>
              <th>
                <div className="header-cell">
                  Từ
                  <Image src={downup} alt="downup icon" className='downup-icon' />
                </div>
              </th>
              <th>
                <div className="header-cell">
                  Đến
                  <Image src={downup} alt="downup icon" className='downup-icon' />
                </div>
              </th>
              <th>
                <div className="header-cell">
                  Ngày
                  <Image src={downup} alt="downup icon" className='downup-icon' />
                </div>
              </th>
              <th>
                <div className="header-cell">
                  Trạng thái
                  <Image src={downup} alt="downup icon" className='downup-icon' />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {cusdetalData.map((customer, index) => (
              <tr key={index}>
                <td className='rowdetail'>{customer.id}</td>
                <td className='rowdetail'>{customer.ng}</td>
                <td className='rowdetail'>{customer.name}</td>
                <td className='rowdetail'>{customer.Tu}</td>
                <td className='rowdetail'>{customer.Den}</td>
                <td className='rowdetail'>{customer.Ngay}</td>
                <td className='rowdetail'>{customer.Trangthai}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PopupC;

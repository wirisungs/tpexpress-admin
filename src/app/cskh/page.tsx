import React from 'react';
import '@/Style/DTri/styles_customers.css';
import downup from '@/Pictures/images/downup.png';
import ava1 from '@/Pictures/Images/ava1.png'
import Image from 'next/image';
import NavbarTab from '@/components/CommonComponents/Layout/Items/NavbarTab';
import IconAndText from '@/components/CommonComponents/Layout/Items/IconAndText';
import Input from '@/components/CommonComponents/Inputs/Inputs';


const Customers: React.FC = () => {
  // Tạo một mảng giả lập 10 phần tử
  const cskhData = Array(12).fill({
    stt: '1',
    madon: 'DH0001',
    name: 'Nguyễn Đức Duza',
    vande: 'Hàng tôi bị vỡ',
    hinhanh: 'photo.png',
    hanhdong: 'kiểm tra',
    trangthai: 'Đã xử lí',
    phanhoi: 'Phản hồi',
  });

  return (
    <div className='all'>
      <div className='left'>
          <IconAndText
            Text={<span className="textnav">Trần Hữu Minh Trí</span>}
            Icon={<Image src={ava1} alt="Avatar" width={40} height={40} />}
          />
          <div className='nav'>
            <NavbarTab/>
          </div>
      </div>

      <div className='right'>
        <div className='right-bottom'>
        <div className='table-container'>
        <table>
          <thead>
            <tr>
              <th>
                <div className="header-cell">
                  STT
                  <Image src={downup} alt="downup icon" className='downup-icon' />
                </div>
              </th>
              <th>
                <div className="header-cell">
                  Mã đơn
                  <Image src={downup} alt="downup icon" className='downup-icon' />
                </div>
              </th>
              <th>
                <div className="header-cell">
                  Người yêu cầu
                  <Image src={downup} alt="downup icon" className='downup-icon' />
                </div>
              </th>
              <th>
                <div className="header-cell">
                  Vấn đề
                  <Image src={downup} alt="downup icon" className='downup-icon' />
                </div>
              </th>
              <th>
                <div className="header-cell">
                  Hình ảnh
                  <Image src={downup} alt="downup icon" className='downup-icon' />
                </div>
              </th>
              <th>
                <div className="header-cell">
                  Hành động
                  <Image src={downup} alt="downup icon" className='downup-icon' />
                </div>
              </th>
              <th>
                <div className="header-cell">
                  Trạng thái 
                  <Image src={downup} alt="downup icon" className='downup-icon' />
                </div>
              </th>
              <th>
                <div className="header-cell">
                  Phản hồi
                  <Image src={downup} alt="downup icon" className='downup-icon' />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {cskhData.map((cskh, index) => (
              <tr key={index}>
                <td>{cskh.stt}</td>
                <td>{cskh.madon}</td>
                <td >{cskh.name}</td>
                <td>{cskh.vande}</td>
                <td >{cskh.hinhanh}</td>
                <td >{cskh.hanhdong}</td>
                <td >{cskh.trangthai}</td>
                <td >{cskh.phanhoi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


        </div>
        
      </div>
      
    </div>
  );
};

export default Customers;

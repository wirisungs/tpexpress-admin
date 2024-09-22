import React from 'react';
import './styles.css';
import downup from '@/Pictures/images/downup.png';
import Image from 'next/image';

const cskh: React.FC = () => {
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
      {/* <div className="note-container">
        <p className='note'>Ghi chú: Ấn và khách hàng bất kì để xem hoặc thay đổi thông tin</p>
      </div> */}

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
  );
};

export default cskh;

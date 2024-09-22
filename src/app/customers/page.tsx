import React from 'react';
import './styles.css';
import downup from '@/Pictures/images/downup.png';
import Image from 'next/image';

const Customers: React.FC = () => {
  // Tạo một mảng giả lập 10 phần tử
  const customerData = Array(12).fill({
    id: 'KH001',
    name: 'BlueDuck',
    email: 'blueduck974@gmail.com',
    phone: '0916607059',
    address: '323 LosLess NewTime',
  });

  return (
    <div className='all'>
      <div className="note-container">
        <p className='note'>Ghi chú: Ấn và khách hàng bất kì để xem hoặc thay đổi thông tin</p>
      </div>

      <div className='table-container'>
        <table>
          <thead>
            <tr>
              <th>
                <div className="header-cell">
                  Mã khách hàng
                  <Image src={downup} alt="downup icon" className='downup-icon' />
                </div>
              </th>
              <th>
                <div className="header-cell">
                  Họ tên
                  <Image src={downup} alt="downup icon" className='downup-icon' />
                </div>
              </th>
              <th>
                <div className="header-cell">
                  Email
                  <Image src={downup} alt="downup icon" className='downup-icon' />
                </div>
              </th>
              <th>
                <div className="header-cell">
                  Số điện thoại
                  <Image src={downup} alt="downup icon" className='downup-icon' />
                </div>
              </th>
              <th>
                <div className="header-cell">
                  Địa chỉ
                  <Image src={downup} alt="downup icon" className='downup-icon' />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {customerData.map((customer, index) => (
              <tr key={index}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td className='email-cell'>{customer.email}</td>
                <td>{customer.phone}</td>
                <td className='address-cell'>{customer.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;

import React from 'react';
import '@/Style/DTri/styles_customers.css';
import downup from '@/Pictures/images/downup.png';
import ava1 from '@/Pictures/Images/ava1.png'
import Image from 'next/image';
import NavbarTab from '@/components/CommonComponents/Layout/Items/NavbarTab';
import IconAndText from '@/components/CommonComponents/Layout/Items/IconAndText';
import Input from '@/components/CommonComponents/Inputs/Inputs';
import PopupC from '@/components/CommonComponents/PopupCus/PopupC';


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
    // <div className='all'>
    //   <div className='left'>
    //       <IconAndText
    //         Text={<span className="textnav">Trần Hữu Minh Trí</span>}
    //         Icon={<Image src={ava1} alt="Avatar" width={40} height={40} />}
    //       />
    //       <div className='nav'>
    //         <NavbarTab/>
    //       </div>
    //   </div>

    //   <div className='right'>
    //     <div className='inputright'>
    //       <Input type="search" placeholder="Nhập mã khách hàng / họ tên / email /...."  />
    //     </div>
    //     <div className='right-bottom'>
    //     <div className="note-container">
    //           <p className='note'>Ghi chú: Ấn và khách hàng bất kì để xem hoặc thay đổi thông tin</p>
    //        </div>
    //   <div className='table-container'>
    //     <table>
    //       <thead >
    //       <tr>
    //           <th>
    //             <div className="header-cell">
    //               Mã khách hàng
    //               <Image src={downup} alt="downup icon" className='downup-icon' />
    //             </div>
    //           </th>
    //           <th>
    //             <div className="header-cell">
    //               Họ tên
    //               <Image src={downup} alt="downup icon" className='downup-icon' />
    //             </div>
    //           </th>
    //           <th>
    //             <div className="header-cell">
    //               Email
    //               <Image src={downup} alt="downup icon" className='downup-icon' />
    //             </div>
    //           </th>
    //           <th>
    //             <div className="header-cell">
    //               Số điện thoại
    //               <Image src={downup} alt="downup icon" className='downup-icon' />
    //             </div>
    //           </th>
    //           <th>
    //             <div className="header-cell">
    //               Địa chỉ
    //               <Image src={downup} alt="downup icon" className='downup-icon' />
    //             </div>
    //           </th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {customerData.map((customer, index) => (
    //           <tr key={index}>
    //             <td className='rowdetail'>{customer.id}</td>
    //             <td className='rowdetail'>{customer.name}</td>
    //             <td className='email-cell'>{customer.email}</td>
    //             <td className='rowdetail'>{customer.phone}</td>
    //             <td className='address-cell'>{customer.address}</td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    //     </div>
    //   </div>
      
    // </div>
    <PopupC/>
  );
};

export default Customers;

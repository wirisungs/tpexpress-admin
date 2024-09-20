import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'Online' | 'Offline';
}

const UserList: React.FC<{ users: User[] }> = ({ users }) => {
  return (
    <TableContainer component={Paper} className="mt-4">
      <Table>
        <TableHead>
          <TableRow className="bg-gray-100">
            <TableCell>Mã chi sự</TableCell>
            <TableCell>Trạng thái</TableCell>
            <TableCell>Họ và tên</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Số điện thoại</TableCell>
            <TableCell>CCCD</TableCell>
            <TableCell>Ghi phép bổ xung</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded ${user.status === 'Online' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                  {user.status}
                </span>
              </TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserList;

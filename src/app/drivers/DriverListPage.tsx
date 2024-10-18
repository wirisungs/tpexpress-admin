import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  TextField,
  IconButton,
  Box
} from '@mui/material';
import { Container } from '@mui/system';
import DriverRegistrationForm from '@/components/drivers/DriverRegistrationForm';
import Plus from '@/Svg/Plus';
import Filter from '@/Svg/Filter';
import Search from '@/Svg/Search';

import { Chip } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment'; // Add this import


interface Driver {
  id: string;
  status: string;
  name: string;
  email: string;
  phone: string;
  cccd: string;
  license: string;
}

const drivers: Driver[] = [
  {
    id: 'TX001',
    status: 'Online',
    name: 'Trần Văn A',
    email: 'tranvana@gmail.com',
    phone: '0312343422',
    cccd: '012374422948',
    license: '3241 2342 3245'
  },
  {
    id: 'TX002',
    status: 'Offline',
    name: 'Trần Văn B',
    email: 'tranvanb@gmail.com',
    phone: '0312343422',
    cccd: '012374422948',
    license: '3241 2342 3245'
  },
  {
    id: 'TX001',
    status: 'Online',
    name: 'Trần Văn A',
    email: 'tranvana@gmail.com',
    phone: '0312343422',
    cccd: '012374422948',
    license: '3241 2342 3245'
  },
  {
    id: 'TX001',
    status: 'Online',
    name: 'Trần Văn A',
    email: 'tranvana@gmail.com',
    phone: '0312343422',
    cccd: '012374422948',
    license: '3241 2342 3245'
  },
  {
    id: 'TX001',
    status: 'Online',
    name: 'Trần Văn A',
    email: 'tranvana@gmail.com',
    phone: '0312343422',
    cccd: '012374422948',
    license: '3241 2342 3245'
  },
  {
    id: 'TX001',
    status: 'Online',
    name: 'Trần Văn A',
    email: 'tranvana@gmail.com',
    phone: '0312343422',
    cccd: '012374422948',
    license: '3241 2342 3245'
  },
  {
    id: 'TX001',
    status: 'Online',
    name: 'Trần Văn A',
    email: 'tranvana@gmail.com',
    phone: '0312343422',
    cccd: '012374422948',
    license: '3241 2342 3245'
  },
  {
    id: 'TX001',
    status: 'Online',
    name: 'Trần Văn A',
    email: 'tranvana@gmail.com',
    phone: '0312343422',
    cccd: '012374422948',
    license: '3241 2342 3245'
  },
  {
    id: 'TX001',
    status: 'Online',
    name: 'Trần Văn A',
    email: 'tranvana@gmail.com',
    phone: '0312343422',
    cccd: '012374422948',
    license: '3241 2342 3245'
  },
  {
    id: 'TX001',
    status: 'Online',
    name: 'Trần Văn A',
    email: 'tranvana@gmail.com',
    phone: '0312343422',
    cccd: '012374422948',
    license: '3241 2342 3245'
  },
  {
    id: 'TX002',
    status: 'Offline',
    name: 'Trần Văn B',
    email: 'tranvanb@gmail.com',
    phone: '0312343422',
    cccd: '012374422948',
    license: '3241 2342 3245'
  },
  {
    id: 'TX002',
    status: 'Offline',
    name: 'Trần Văn B',
    email: 'tranvanb@gmail.com',
    phone: '0312343422',
    cccd: '012374422948',
    license: '3241 2342 3245'
  },
  {
    id: 'TX002',
    status: 'Offline',
    name: 'Trần Văn B',
    email: 'tranvanb@gmail.com',
    phone: '0312343422',
    cccd: '012374422948',
    license: '3241 2342 3245'
  },
  {
    id: 'TX002',
    status: 'Offline',
    name: 'Trần Văn B',
    email: 'tranvanb@gmail.com',
    phone: '0312343422',
    cccd: '012374422948',
    license: '3241 2342 3245'
  },
  {
    id: 'TX002',
    status: 'Offline',
    name: 'Trần Văn B',
    email: 'tranvanb@gmail.com',
    phone: '0312343422',
    cccd: '012374422948',
    license: '3241 2342 3245'
  },
  {
    id: 'TX002',
    status: 'Offline',
    name: 'Trần Văn B',
    email: 'tranvanb@gmail.com',
    phone: '0312343422',
    cccd: '012374422948',
    license: '3241 2342 3245'
  },
  {
    id: 'TX002',
    status: 'Offline',
    name: 'Trần Văn B',
    email: 'tranvanb@gmail.com',
    phone: '0312343422',
    cccd: '012374422948',
    license: '3241 2342 3245'
  },
];

const DriverListPage: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="lg" className="py-6">
      <Typography variant="h6" className="flex items-center mb-2 gap-4" sx={{ padding: '24px' }}>
        <Box
          sx={{
            display: 'flex',
            gap: '16px',
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Nhập mã khách hàng / họ tên / email /..."
            size="small"
            sx={{ width: '443px', borderRadius: '6px' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search color={'#696969'}/>
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            onClick={handleOpen}
            className="whitespace-nowrap"
            sx={{ backgroundColor: '#EC6E70', borderRadius: '6px' }}
          >
            <Plus filter="#fff" />
            Đăng ký tài xế
          </Button>
        </Box>
      </Typography>

      <Typography variant="body2" color="error" className="mb-2" sx={{ paddingBottom: '16px' }}>
        Ghi chú: Ấn vào khách hàng bất kì để xem hoặc thay đổi thông tin
      </Typography>

      <TableContainer component={Paper} elevation={2} className="mt-3" style={{ maxHeight: '400px', overflowY: 'auto' }} sx={{
        overflowY: 'scroll',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}>
        <Table stickyHeader>
          <TableHead style={{ paddingBottom: '70px'}}>
            <TableRow>
              <TableCell className="flex items-center gap-3" sx={{ color: '#696969', fontWeight: 700, fontSize: '16px' }}>
                STT
                <IconButton size="small" sx={{ marginLeft: '12px', color: '#CBCBCB' }}>
                  <Filter size="small"/>
                </IconButton>
              </TableCell>
              <TableCell className="flex items-center gap-2" sx={{ color: '#696969', fontWeight: 700, fontSize: '16px' }}>
                Trạng thái
                <IconButton size="small" sx={{ marginLeft: '12px' }}>
                <Filter size="small" />
                </IconButton>
              </TableCell>
              <TableCell className="flex items-center gap-2" sx={{ color: '#696969', fontWeight: 700, fontSize: '16px' }}>
                Họ và tên
                <IconButton size="small" sx={{ marginLeft: '12px' }}>
                  <Filter size="small" />
                </IconButton>
              </TableCell>
              <TableCell className="flex items-center gap-2" sx={{ color: '#696969', fontWeight: 700, fontSize: '16px' }}>
                Email
                <IconButton size="small" sx={{ marginLeft: '12px' }}>
                    <Filter size="small" />
                </IconButton>
              </TableCell>
              <TableCell className="flex items-center gap-2" sx={{ color: '#696969', fontWeight: 700, fontSize: '16px' }}>
                Số điện thoại
                <IconButton size="small" sx={{ marginLeft: '12px' }}>
                      <Filter size="small" />
                </IconButton>
              </TableCell>
              <TableCell className="flex items-center gap-2" sx={{ color: '#696969', fontWeight: 700, fontSize: '16px' }}>
                CCCD
                <IconButton size="small" sx={{ marginLeft: '12px' }}>
                    <Filter size="small" />
                </IconButton>
              </TableCell>
              <TableCell className="flex items-center gap-2" sx={{ color: '#696969', fontWeight: 700, fontSize: '16px' }}>
                Giấy phép lái xe
                <IconButton size="small" sx={{ marginLeft: '12px' }}>
                    <Filter size="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {drivers.map((driver) => (
              <TableRow key={driver.id} className="gap-3">
                <TableCell sx={{ color: '#696969' }}>{driver.id}</TableCell>
                <TableCell>
                  <Chip
                    label={driver.status}
                    color={driver.status === 'Online' ? 'success' : 'error'}
                    size="small"
                  />
                </TableCell>
                <TableCell sx={{ color: '#696969' }}>{driver.name}</TableCell>
                <TableCell sx={{ color: '#696969' }}>{driver.email}</TableCell>
                <TableCell sx={{ color: '#696969' }}>{driver.phone}</TableCell>
                <TableCell sx={{ color: '#696969' }}>{driver.cccd}</TableCell>
                <TableCell sx={{ color: '#696969' }}>{driver.license}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <DriverRegistrationForm open={open} onClose={handleClose} />
    </Container>
  );
};

export default DriverListPage;
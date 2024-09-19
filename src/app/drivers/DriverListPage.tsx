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
  IconButton
} from '@mui/material';
import { Container } from '@mui/system';
import FilterListIcon from '@mui/icons-material/FilterList';
import DriverRegistrationForm from '@/components/DriverRegistrationForm';
import { Chip } from '@mui/material';
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
  }
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
      <div className="flex items-center mb-2 gap-2">
        <TextField
          className="w-[443px]"
          variant="outlined"
          placeholder="Nhập mã khách hàng / họ tên / email /..."
          size="small"
        />
        <Button
          variant="contained"
          onClick={handleOpen}
          className="whitespace-nowrap"
          sx={{ backgroundColor: '#EC6E70', borderRadius: '6px' }}
        >
          + Đăng ký tài xế
        </Button>
      </div>

      <Typography variant="body2" color="error" mb={2}>
        Ghi chú: Ấn và khách hàng bất kì để xem hoặc thay đổi thông tin
      </Typography>

      <TableContainer component={Paper} elevation={2}>
        <Table className="flex flex-col gap-12">
          <TableHead>
            <TableRow>
              <TableCell className="flex items-center gap-2">
                STT
                <IconButton size="small">
                  <FilterListIcon fontSize="small" />
                </IconButton>
              </TableCell>
              <TableCell className="flex items-center gap-2">
                Trạng thái
                <IconButton size="small">
                  <FilterListIcon fontSize="small" />
                </IconButton>
              </TableCell>
              <TableCell className="flex items-center gap-2">
                Họ và tên
                <IconButton size="small">
                  <FilterListIcon fontSize="small" />
                </IconButton>
              </TableCell>
              <TableCell className="flex items-center gap-2">
                Email
                <IconButton size="small">
                  <FilterListIcon fontSize="small" />
                </IconButton>
              </TableCell>
              <TableCell className="flex items-center gap-2">
                Số điện thoại
                <IconButton size="small">
                  <FilterListIcon fontSize="small" />
                </IconButton>
              </TableCell>
              <TableCell className="flex items-center gap-2">
                CCCD
                <IconButton size="small">
                  <FilterListIcon fontSize="small" />
                </IconButton>
              </TableCell>
              <TableCell className="flex items-center gap-2">
                Giấy phép lái xe
                <IconButton size="small">
                  <FilterListIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {drivers.map((driver) => (
              <TableRow key={driver.id} className="gap-3">
                <TableCell>{driver.id}</TableCell>
                <TableCell>
                  <Chip
                    label={driver.status}
                    color={driver.status === 'Online' ? 'success' : 'error'}
                    size="small"
                  />
                </TableCell>
                <TableCell>{driver.name}</TableCell>
                <TableCell>{driver.email}</TableCell>
                <TableCell>{driver.phone}</TableCell>
                <TableCell>{driver.cccd}</TableCell>
                <TableCell>{driver.license}</TableCell>
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

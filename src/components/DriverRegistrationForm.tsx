import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography
} from '@mui/material';

interface DriverRegistrationFormProps {
  open: boolean;
  onClose: () => void;
}

const DriverRegistrationForm: React.FC<DriverRegistrationFormProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Đăng ký tài xế</DialogTitle>
      <DialogContent dividers>
        <form className="space-y-4">
          <Typography variant="h6">Thông tin cá nhân</Typography>
          <TextField label="Họ và tên" fullWidth margin="normal" />
          <TextField label="Ngày sinh" fullWidth margin="normal" />
          <TextField label="Số điện thoại" fullWidth margin="normal" />
          <TextField label="Địa chỉ thường trú" fullWidth margin="normal" />
          <TextField label="Gmail" fullWidth margin="normal" />
          <TextField label="CCCD / CMND" fullWidth margin="normal" />
          <FormControl fullWidth margin="normal">
            <InputLabel>Giới tính</InputLabel>
            <Select>
              <MenuItem value="male">Nam</MenuItem>
              <MenuItem value="female">Nữ</MenuItem>
            </Select>
          </FormControl>
          <Typography variant="h6">Phương tiện và giấy phép lái xe</Typography>
          <TextField label="Tên phương tiện" fullWidth margin="normal" />
          <TextField label="Giấy phép lái xe" fullWidth margin="normal" />
          <TextField label="Bảo hiểm xe" fullWidth margin="normal" />
          <TextField label="Loại bằng lái" fullWidth margin="normal" />
          <TextField label="Biển số xe" fullWidth margin="normal" />
          <Typography variant="h6">Thanh toán</Typography>
          <TextField label="Tên ngân hàng" fullWidth margin="normal" />
          <TextField label="Số thẻ ngân hàng" fullWidth margin="normal" />
          <TextField label="Tên chủ tài khoản" fullWidth margin="normal" />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Tạo
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DriverRegistrationForm;

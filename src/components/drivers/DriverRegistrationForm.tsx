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
import AvatarDriver from '@/Svg/AvatarDriver';

interface DriverRegistrationFormProps {
  open: boolean;
  onClose: () => void;
}

const DriverRegistrationForm: React.FC<DriverRegistrationFormProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <DialogTitle className="text-center text-lg font-bold">Đăng ký tài xế</DialogTitle>
      <DialogContent dividers>
        <form className="space-y-6">
          {/* Avatar and Personal Information Section */}
          <div className="flex flex-col items-center mb-6">
            <AvatarDriver className="w-16 h-16 rounded-full mb-4" />
            <Typography variant="h6" className="text-center">Thông tin cá nhân</Typography>
          </div>

          <div className="flex flex-col gap-4">

              <TextField label="Họ và tên" />
              <TextField label="Ngày sinh" />
              <TextField label="Số điện thoại" />
              <TextField label="Địa chỉ thường trú" />
              <TextField label="Gmail" />
              <TextField label="CCCD / CMND" />

            <div className="col-span-1">
              <FormControl>
                <InputLabel>Giới tính</InputLabel>
                <Select defaultValue="">
                  <MenuItem value="male">Nam</MenuItem>
                  <MenuItem value="female">Nữ</MenuItem>
                </Select>
              </FormControl>
              <div className="flex justify-between">
                <div className="flex-1">
                  <Typography variant="body2">Ảnh chụp mặt trước</Typography>
                  <Button variant="outlined" className="w-full">+</Button>
                </div>
                <div className="flex-1 ml-4">
                  <Typography variant="body2">Ảnh chụp mặt sau</Typography>
                  <Button variant="outlined" className="w-full">+</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Vehicle Information Section */}
          <Typography variant="h6" className="mt-6">Phương tiện và giấy phép lái xe</Typography>
          <div className="flex flex-col gap-4">
            <div className="col-span-1">
              <TextField label="Tên phương tiện" />
              <TextField label="Giấy phép lái xe" />
              <TextField label="Bảo hiểm xe" />
              <TextField label="Loại bằng lái" />
              <TextField label="Biển số xe" />
            </div>
            <div className="col-span-1">
              <div className="flex justify-between">
                <div className="flex-1">
                  <Typography variant="body2">Ảnh chụp mặt trước</Typography>
                  <Button variant="outlined" className="w-full">+</Button>
                </div>
                <div className="flex-1 ml-4">
                  <Typography variant="body2">Ảnh chụp mặt sau</Typography>
                  <Button variant="outlined" className="w-full">+</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Information Section */}
          <Typography variant="h6" className="mt-6">Thanh toán</Typography>
          <div className="flex flex-col gap-4">
            <div className="col-span-1">
              <TextField label="Tên ngân hàng" />
              <TextField label="Số thẻ ngân hàng" />
              <TextField label="Tên chủ tài khoản" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <Button variant="contained" color="primary" type="submit" sx={{ backgroundColor: '#EC6E70', borderRadius: '6px' }}>
              Tạo
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DriverRegistrationForm;
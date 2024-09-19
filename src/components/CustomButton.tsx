import React from 'react';
import { Button as MuiButton } from '@mui/material';

interface CustomButtonProps {
  label: string;
  onClick: () => void;
  color?: 'primary' | 'secondary' | 'error';
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, onClick, color = 'primary' }) => {
  return (
    <MuiButton
      variant="contained"
      color={color}
      onClick={onClick}
      className="px-4 py-2 rounded"
    >
      {label}
    </MuiButton>
  );
};

export default CustomButton;

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" className="bg-blue-600">
      <Toolbar>
        <Typography variant="h6" component="div" className="flex-grow">
          Tim Mu Tran
        </Typography>
        <Button color="inherit">Menu Item 1</Button>
        <Button color="inherit">Menu Item 2</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

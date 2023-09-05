import React from 'react';
import { IconButton } from '@mui/material';
import { LightMode } from '@mui/icons-material';
import { DarkMode } from '@mui/icons-material';

const ThemeToggle = ({ onClick, theme }) => {
  const buttonTitle =
    theme.palette.type === 'dark' ? 'Light Mode' : 'Dark Mode';

  return (
    <IconButton
      aria-label={buttonTitle}
      title={buttonTitle}
      color="inherit"
      onClick={onClick}
      size="small"
    >
      {theme.palette.type === 'light' ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
};

export default ThemeToggle;

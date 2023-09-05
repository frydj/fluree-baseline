import React, { useState } from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { blueGrey, cyan, grey, red, blue } from '@mui/material/colors';

const ThemeToggleContext = React.createContext();
export const useTheme = () => React.useContext(ThemeToggleContext);

const constants = createTheme({
  constants: {
    drawerWidth: 220,
    bannerHeight: 42,
    toolbarHeight: 26,
  },
});

const darkThemeBase = createTheme({
  palette: {
    meow: {
      mainbg: blue[900],
    },
    main: {
      background: 'black',
      text: 'snow',
      transition: '0.25s ease-in-out',
      borderColor: blueGrey[900],
    },
    test: {
      background: blueGrey[900],
    },
    pre: {
      background: blueGrey[800],
      key: cyan[100],
      value: blueGrey[200],
    },
    primary: {
      main: blueGrey[900],
    },
    secondary: {
      main: red['A200'],
      background: grey[800],
    },
    text: {
      main: '#FFF',
      inverse: blueGrey[500],
    },
    type: 'dark',
  },
  typography: {},
});

const darkTheme = createTheme(
  {
    components: {
      MuiAccordion: {
        root: {
          backgroundColor: red[300],
          color: grey[50],
        },
      },
      MuiIconButton: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            fontSize: '1rem',
            color: 'snow',
          },
        },
      },
    },
  },
  darkThemeBase,
  constants
);

const lightThemeBase = createTheme({
  palette: {
    meow: {
      mainbg: blue[600],
    },
    main: {
      background: 'white',
      text: 'black',
      transition: '0.25s ease-in-out',
      borderColor: blueGrey[200],
    },
    test: {
      background: blueGrey[300],
    },
    pre: {
      background: blueGrey['A100'],
      key: red['A200'],
      value: blueGrey[900],
    },
    primary: {
      main: grey[100],
    },
    secondary: {
      main: red['A200'],
      background: 'blue',
    },
    text: {
      main: blueGrey[800],
      inverse: '#FFF',
    },
    type: 'light',
  },
  typography: {},
});

const lightTheme = createTheme(
  {
    components: {
      MuiAccordion: {
        root: {
          backgroundColor: red[300],
          color: grey[50],
        },
      },
      MuiIconButton: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            fontSize: '1rem',
            color: 'snow',
          },
        },
      },
    },
  },
  lightThemeBase,
  constants
);

const paletteTypeKey = 'paletteType';
const storedType = localStorage.getItem(paletteTypeKey);
const currentTheme = storedType === 'light' ? lightTheme : darkTheme;

const CustomThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(currentTheme);
  const {
    palette: { type },
  } = theme;

  const toggle = () => {
    const updatedTheme = type === 'dark' ? lightTheme : darkTheme;
    localStorage.setItem(paletteTypeKey, updatedTheme.palette.type);
    setTheme(updatedTheme);
  };

  return (
    <ThemeToggleContext.Provider value={{ ...theme, toggle: toggle }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default CustomThemeProvider;

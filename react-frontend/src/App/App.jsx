import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CustomThemeProvider from '../theme/ThemeContext';
import './App.css';

import 'react-tippy/dist/tippy.css';

import AppRoutes from '../AppRoutes';
import Viewport from '../components/Bits/Viewport/Viewport';
import { GlobalProvider } from '../hooks/useGlobal';
import Drawer from '../components/Sections/Drawer/Drawer';
import Container from '../components/Bits/Container/Container';
import MainArea from '../components/Bits/MainArea/MainArea';
import Banner from '../components/Sections/Banner/Banner';
import Toolbar from '../components/Sections/Toolbar/Toolbar';

const App = () => {
  return (
    <GlobalProvider>
      <CustomThemeProvider>
        <BrowserRouter>
          <Viewport>
            <Drawer open={true} />
            <MainArea>
              <Toolbar />
              <AppRoutes />
            </MainArea>
            <Banner />
          </Viewport>
        </BrowserRouter>
      </CustomThemeProvider>
    </GlobalProvider>
  );
};

export default App;

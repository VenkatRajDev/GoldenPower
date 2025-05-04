import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ThemeProvider from './ThemeProvider';

// import different UIs
import LoginNav from './src/LoginUI/LoginNav';
import CustomerStackNav from './src/CustomerUI/CustomerStackNav';

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        {/* <LoginNav/> */}
        <CustomerStackNav />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;

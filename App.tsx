/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@rneui/themed';
import { theme } from './src/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = (): React.JSX.Element => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer children={undefined} />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;

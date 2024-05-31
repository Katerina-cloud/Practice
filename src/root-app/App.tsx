import React from 'react';
import { ThemeProvider } from '@rneui/themed';
import { theme } from '../theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigation } from '../navigation/AppNavigation';

const App = (): React.JSX.Element => {
  // const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <AppNavigation />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;

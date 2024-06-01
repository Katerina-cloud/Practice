import React from 'react';
import { ThemeProvider } from '@rneui/themed';
import { theme } from '../theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigation } from '../navigation/AppNavigation';
import { initI18N } from '../utils/translation';
import 'intl-pluralrules';

initI18N();

const App = (): React.JSX.Element => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <AppNavigation />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;

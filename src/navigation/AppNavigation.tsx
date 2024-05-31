import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './TabNavigator.tsx';

export const AppNavigation = () => {
  // const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

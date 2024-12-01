import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './TabNavigator.tsx';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { APP_ROUTES, RootStackParamList } from './navigation.types';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name={APP_ROUTES.MAIN} component={TabNavigator} />
      </Navigator>
    </NavigationContainer>
  );
};

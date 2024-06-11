import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './TabNavigator.tsx';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/LoginScreen';

const getIsSignedIn = () => {
  return false;
};

const { Navigator, Screen } = createNativeStackNavigator();

const AuthenticationStack = createNativeStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator>
      <AuthenticationStack.Screen name="Login" component={LoginScreen} />
    </AuthenticationStack.Navigator>
  );
};

export const AppNavigation = () => {
  const isSignedIn = getIsSignedIn();

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        {isSignedIn ? (
          <Screen name="MainStack" component={TabNavigator} />
        ) : (
          <Screen name="AuthenticationStack" component={AuthenticationNavigator} />
        )}
      </Navigator>
    </NavigationContainer>
  );
};

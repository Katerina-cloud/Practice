import React from 'react';
import { HomeScreen } from '../../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ToolsScreen } from '../../screens/ToolsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { APP_ROUTES, TabNavigatorParamList } from '../navigation.types';
import { Header } from '../../components';
import { HomeIcon } from '../../assets/icons';

const Tab = createBottomTabNavigator<TabNavigatorParamList>();
const Stack = createNativeStackNavigator();

const HomeStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{ header: () => <Header title="Home" /> }}
    />
  </Stack.Navigator>
);

const ToolsStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ToolsScreen"
      component={ToolsScreen}
      options={{ header: () => <Header title="Tools" /> }}
    />
  </Stack.Navigator>
);

const getTabBarIcon = (routeName: string, color: string, size: number) => {
  let iconName: string;

  if (routeName === APP_ROUTES.HOME) {
    return <HomeIcon color={color} width={size} height={size} />;
  } else if (routeName === APP_ROUTES.TOOLS) {
    iconName = 'construct-outline';
  } else {
    iconName = 'alert-circle-outline';
  }

  return <Icon name={iconName} size={size} color={color} />;
};

export const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName={APP_ROUTES.HOME}
    screenOptions={({ route }) => ({
      tabBarActiveTintColor: '#e91e63',
      headerShown: false,
      tabBarIcon: ({ color, size }) => getTabBarIcon(route.name, color, size),
    })}
  >
    <Tab.Screen name={APP_ROUTES.HOME} component={HomeStackScreen} />
    <Tab.Screen name={APP_ROUTES.TOOLS} component={ToolsStackScreen} />
  </Tab.Navigator>
);

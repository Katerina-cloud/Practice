import React from 'react';
import { HomeScreen } from '../../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ToolsScreen } from '../../screens/ToolsScreen';
import { ImageBackground, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderImage from '../../assets/img/header.png';
import Icon from 'react-native-vector-icons/Ionicons';
import { APP_ROUTES } from '../navigation.types';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Header = ({ title }: { title: string }) => (
  <ImageBackground
    source={HeaderImage}
    style={{
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>{title}</Text>
    <Text>settings</Text>
    <Icon name="settings-outline" color="red" />
  </ImageBackground>
);

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
    iconName = 'home-outline';
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

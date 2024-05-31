import { HomeScreen } from '../../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ToolsScreen } from '../../screens/ToolsScreen';
import { ImageBackground, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderImage from '../../assets/img/header.png';
import Icon from 'react-native-vector-icons/Ionicons';

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
      name="Home"
      component={HomeScreen}
      options={{ header: () => <Header title="Home" /> }}
    />
  </Stack.Navigator>
);

const ToolsStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Tools"
      component={ToolsScreen}
      options={{ header: () => <Header title="Tools" /> }}
    />
  </Stack.Navigator>
);

export const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      tabBarActiveTintColor: '#e91e63',
      headerShown: false,
    }}
  >
    <Tab.Screen name="Home" component={HomeStackScreen} />
    <Tab.Screen name="Tools" component={ToolsStackScreen} />
  </Tab.Navigator>
);

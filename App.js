import "./global.css"


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

import { Home, User } from "lucide-react-native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: '#0284c7', // Tailwind sky-600
        tabBarInactiveTintColor: '#636f80ff',
        tabBarStyle: { backgroundColor: '#f8fafc' },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size}) => (
              <Home color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="About" 
          component={AboutScreen}
          options={{
            tabBarIcon: ({ color, size}) => (
              <User color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


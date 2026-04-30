import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home/Home';

const MainNavigation = () => {
  const Stack = createNativeStackNavigator<any>();
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
};

export default MainNavigation;

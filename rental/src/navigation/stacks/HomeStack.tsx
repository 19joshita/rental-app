import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeWrapper from '../../screens/home/HomeWrapper';
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeWrapper} />
    </Stack.Navigator>
  );  
};

export default HomeStack;

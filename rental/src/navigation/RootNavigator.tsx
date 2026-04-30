import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigation from './MainNavigation';
import AuthNavigator from './AuthNavigator';
const Stack = createNativeStackNavigator<any>();
const RootNavigator = () => {
  const user = false;
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="Main" component={MainNavigation} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;

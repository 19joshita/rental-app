import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  EllipsisVertical,
  HomeIcon,
  ShoppingBag,
  ShoppingCart,
  UserRoundCog,
} from 'lucide-react-native';
import ProductWrapper from '../screens/Product/ProductWrapper';
import CartWrapper from '../screens/cart/CartWrapper';
import ProfileWrapper from '../screens/profile/ProfileWrapper';
import BrowseWrapper from '../screens/browse/BrowseWrapper';
import HomeStack from './stacks/HomeStack';
const Tab = createBottomTabNavigator<any>();
const TabItems = [
  {
    name: 'Home',
    icon: HomeIcon,
    label: 'Home',
    component: HomeStack,
  },
  {
    name: 'Product',
    icon: ShoppingBag,
    label: 'Product',
    component: ProductWrapper,
  },
  {
    name: 'Cart',
    icon: ShoppingCart,
    label: 'Cart',
    component: CartWrapper,
  },
  {
    name: 'Profile',
    icon: UserRoundCog,
    label: 'Profile',
    component: ProfileWrapper,
  },
  {
    name: 'More',
    icon: EllipsisVertical,
    label: 'More',
    component: BrowseWrapper,
  },
];
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const current = TabItems?.find(tab => tab.name === route.name);
        const Icon = current?.icon;
        return {
          headerShown: false,
          tabBarActiveTintColor: '#1C1C1C',
          tabBarInactiveTintColor: '#959595',
          tabBarIcon: ({ color, size }) =>
            Icon ? <Icon color={color} size={size} /> : null,
        };
      }}
    >
      {TabItems?.map(tab => {
        return (
          <Tab.Screen
            key={tab?.name}
            name={tab?.name}
            component={tab?.component}
            options={{
              tabBarLabel: tab?.label,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});

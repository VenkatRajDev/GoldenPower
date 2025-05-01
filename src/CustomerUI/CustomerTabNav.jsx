import {StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './Screens/Home/HomeScreen';
import ShopScreen from './Screens/Shop/ShopScreen';
import ORDERS from './Screens/Orders/ORDERS';
import PROFILE from './Screens/Profile/PROFILE';

import TabBar from '../custom/TabBar';
import {useTheme} from '../../ThemeProvider';

const CustomerTab = createBottomTabNavigator();

const IconNames = {
  Home: ['home', 'home-outline'],
  Shop: ['cart', 'cart-outline'],
  Orders: ['chatbubble-ellipses', 'chatbubble-ellipses-outline'],
  Profile: ['person', 'person-outline'],
};

const CustomerTabNav = () => {
  return (
    <>
      <CustomerTab.Navigator
        screenOptions={{headerShown: false}}
        tabBar={props => <TabBar {...props} IconNames={IconNames} />}>
        <CustomerTab.Screen name="Home" component={HomeScreen} />
        <CustomerTab.Screen name="Shop" component={ShopScreen} />
        <CustomerTab.Screen name="Orders" component={ORDERS} />
        <CustomerTab.Screen name="Profile" component={PROFILE} />
      </CustomerTab.Navigator>
    </>
  );
};

export default CustomerTabNav;

const styles = StyleSheet.create({});

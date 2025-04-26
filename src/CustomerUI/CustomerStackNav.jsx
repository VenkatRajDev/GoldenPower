import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const CustomerStack = createStackNavigator()

import CustomerTabNav from './CustomerTabNav'
import ProductDetailsScreen from './Screens/ProductDetails/ProductDetailsScreen'
import AllBrandsScreen from './Screens/AllBrands/AllBrandsScreen'
import ProductsByEachBrandScreen from './Screens/ProductsByEachBrand/ProductsByEachBrandScreen'

const CustomerStackNav = () => {
  return (
    <CustomerStack.Navigator screenOptions={{headerShown: false}}>
      <CustomerStack.Screen name='stackHome' component={CustomerTabNav}/>
      <CustomerStack.Screen name='productDetails' component={ProductDetailsScreen}/>
      <CustomerStack.Screen name='allBrands' component={AllBrandsScreen} />
      <CustomerStack.Screen name='productsByEachBrand' component={ProductsByEachBrandScreen}/>
    </CustomerStack.Navigator>
  )
}

export default CustomerStackNav

const styles = StyleSheet.create({})
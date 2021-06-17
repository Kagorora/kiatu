/** @format */

import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Platform, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import CartScreen from './src/screens/CartScreen.js';
import { Provider } from 'react-redux';
import store from './src/store/store';
import GlobalStyles from './src/components/GlobalSheet';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: 'Home', headerShown: false }}
            />
            <Stack.Screen
              name="Product"
              component={ProductScreen}
              options={{ title: 'Product', headerShown: false }}
            />

            <Stack.Screen
              name="Cart"
              component={CartScreen}
              options={{ title: 'Cart', headerShown: false }}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}

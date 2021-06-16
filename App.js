/** @format */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import { Provider } from 'react-redux';
import store from './src/store/store.js';

export default function App() {
  return (
    <Provider store={store}>
      <ScrollView>
        <HomeScreen />
      </ScrollView>
    </Provider>
  );
}

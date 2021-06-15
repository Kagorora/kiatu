/** @format */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../store/actions/viewSneakers.js';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProductCards from '../components/Cards/ProductCards';

const HomeScreen = (props) => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productsList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.homeHeader}>
        <Text style={styles.homeTitle}>Recent Sneakers</Text>
        <View style={styles.cart}>
          <MaterialCommunityIcons name="cart-outline" style={styles.cartIcon} />
        </View>
      </View>

      <View style={styles.searchArea}>
        <MaterialCommunityIcons name="magnify" style={styles.magnify} />
        <TextInput
          style={styles.input}
          value={String}
          placeholder="What are you looking for ?"
          keyboardType="string"
        />
      </View>

      <ProductCards />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  homeHeader: {
    width: '90%',
    height: (Dimensions.get('screen').width * 10) / 100,
    marginBottom: 21,
    flexDirection: 'row',
  },

  cart: {
    width: 45,
    height: 45,
    backgroundColor: '#F6F6F6',
    position: 'absolute',
    top: 0,
    right: 0,
  },

  cartIcon: {
    fontSize: 25,
    textAlignVertical: 'center',
    textAlign: 'center',
    width: '100%',
    height: '100%',
  },

  homeTitle: {
    fontSize: 26,
    fontWeight: 'bold',
  },

  searchArea: {
    width: '90%',
    height: (Dimensions.get('screen').width * 16) / 100,
    backgroundColor: '#F6F6F6',
    marginBottom: 17,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  magnify: {
    width: '15%',
    height: '100%',
    fontSize: 28,
    color: '#6C6C6C',
    textAlignVertical: 'center',
    textAlign: 'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },

  input: {
    width: '85%',
    height: '100%',
    fontSize: 14,

    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});

export default HomeScreen;

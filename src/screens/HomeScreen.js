/** @format */

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../store/actions/viewSneakers';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProductCards from '../components/Cards/ProductCards';

const HomeScreen = (props) => {
  const [productItems, setProductItems] = useState();

  const [searchQuery, setSearchQuery] = useState('');

  const dispatch = useDispatch();

  const { navigation } = props;

  const productList = useSelector((state) => ({
    products: state.productsList.products,
    loading: state.productsList.loading,
    error: state.productsList.error,
  }));

  const { loading, error, products } = productList;

  const loadProducts = useCallback(async () => {
    setIsRefreshing(true);
    await dispatch(listProducts());
    setIsRefreshing(false);
  }, [dispatch, setIsRefreshing]);

  useEffect(() => {
    listProducts()(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (products) {
      setProductItems(products);
    }
  }, [products]);

  const onChangeSearch = (query) => {
    setSearchQuery(query);

    if (products && products.length > 0) {
      const filterProduct = products.filter((item) =>
        item.brandName.toLowerCase().includes(query.toLowerCase())
      );

      if (filterProduct.length > 0) {
        setProductItems(filterProduct);
      } else {
        setProductItems(products);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
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
          value={searchQuery}
          placeholder="What are you looking for ?"
          keyboardType="default"
          onChangeText={onChangeSearch}
        />
      </View>
      {productItems && (
        <ScrollView>
          {productItems.length > 0 ? (
            productItems.map((product, i) => (
              <ProductCards
                key={i}
                item={product}
                onPress={() =>
                  navigation.navigate('Product', { productId: product.id })
                }
              />
            ))
          ) : (
            <View>
              <Text>no result found</Text>
            </View>
          )}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
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
    width: '100%',
    height: (Dimensions.get('screen').width * 14) / 100,
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
    fontSize: 20,
    color: '#6C6C6C',
    textAlignVertical: 'center',
    textAlign: 'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },

  input: {
    width: '90%',
    height: '100%',
    fontSize: 14,

    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});

export default HomeScreen;

/** @format */

import React, { useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Header_Back from '../components/Header_Back';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import CartCard from '../components/Cards/CartCard';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { viewCartListAction } from '../store/actions/viewSneakers';
import { ScrollView } from 'react-native';

function CartScreen(props) {
  const { navigation } = props;

  const dispatch = useDispatch();

  const selector = useSelector((state) => ({
    loading: state.productsList.cartListLoading,
    error: state.productsList.cartListError,
    cart: state.productsList.cartListSuccess,
  }));

  const { loading, error, cart } = selector;

  useEffect(() => {
    viewCartListAction()(dispatch);
  }, [dispatch]);

  return (
    <ScrollView style={styles.Cart}>
      {/* <Header_Back /> */}

      <View style={styles.homeHeader}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}
        >
          <MaterialCommunityIcons
            name="chevron-left"
            style={styles.rightIcon}
          />
        </TouchableOpacity>
        <View style={styles.cartConctainer}>
          <MaterialCommunityIcons name="cart-outline" style={styles.cartIcon} />
        </View>
      </View>

      <PageHeader>Carts</PageHeader>
      {cart && (
        <View>
          {cart.length > 0 ? (
            cart.map((order, i) => <CartCard key={i} item={order} />)
          ) : (
            <View>
              <Text>no result found</Text>
            </View>
          )}
        </View>
      )}
      {/* <View style={styles.Bill}>
        <View style={styles.Qty}>
          <Text style={styles.QuantityLabel}>Quantity</Text>
          <Text style={styles.QuantityValue}>2</Text>
        </View>

        <View>
          <Text style={styles.TotalLabel}>Total</Text>
          <Text style={styles.TotalValue}>$ 120</Text>
        </View>
      </View> */}

      {/* <View style={styles.FooterCart}>
        <Footer />
      </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Cart: {
    flex: 1,
    paddingTop: 45,
    paddingLeft: 20,
    paddingRight: 20,
  },

  QuantityLabel: {
    fontSize: 18,
  },

  Qty: {
    marginBottom: 20,
  },

  QuantityValue: {
    fontSize: 35,
    fontWeight: 'bold',
  },

  QuantityLabel: {
    fontSize: 15,
  },

  QuantityValue: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  TotalLabel: {
    fontSize: 15,
  },

  TotalValue: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  Bill: {
    height: '25%',
    bottom: '15%',
    width: '100%',
    marginLeft: 20,
    position: 'absolute',
  },

  FooterCart: {
    height: 60,
    width: '100%',
    bottom: 25,
    position: 'absolute',
    marginLeft: 20,
    marginRight: 20,
  },

  homeHeader: {
    width: '100%',
    height: (Dimensions.get('screen').width * 10) / 100,
    marginBottom: 21,
    flexDirection: 'row',
  },

  back: {
    width: 45,
    height: 45,
    backgroundColor: '#F6F6F6',
    position: 'absolute',
    top: 0,
    left: 0,
  },

  rightIcon: {
    fontSize: 25,
    textAlignVertical: 'center',
    textAlign: 'center',
    width: '100%',
    height: '100%',
  },

  cartConctainer: {
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
});

export default CartScreen;

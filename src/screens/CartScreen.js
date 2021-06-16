/** @format */

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header_Back from '../components/Header_Back';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import CartCard from '../components/Cards/CartCard';

function CartScreen(props) {
  return (
    <View style={styles.Cart}>
      <Header_Back />
      <PageHeader >Carts</PageHeader>
      <CartCard />
      <View style={styles.Bill}>
        <View style={styles.Qty}>
          <Text style={styles.QuantityLabel}>Quantity</Text>
          <Text style={styles.QuantityValue}>2</Text>
        </View>

        <View>
          <Text style={styles.TotalLabel}>Total</Text>
          <Text style={styles.TotalValue}>$ 120</Text>
        </View>
      </View>

      <View style={styles.FooterCart}>
        <Footer />
      </View>
    </View>
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
});

export default CartScreen;

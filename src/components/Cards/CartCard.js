/** @format */
import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CartCard = (props) => {
  return (
    <View style={styles.productCard}>
      <View style={styles.productImageHolder}>
        <Image
          style={styles.productImage}
          source={require('../../assets/air-zoom-pegasus-37-mens-running-shoe-KLvDcj.jpeg')}
        />
      </View>

      <View style={styles.productInformation}>
        <Text style={styles.cardHeader}>Nike One</Text>
        <Text style={styles.cardReleaseDate}>November 23, 2021</Text>
        <Text style={styles.cartPrice}>$ 30</Text>

        <View style={styles.CartIncrease}>
          <View style={styles.increase}>
            <MaterialCommunityIcons name="plus" style={styles.plusIcon} />
          </View>
          <Text style={styles.quantity}>1</Text>
          <View style={styles.decrease}>
            <MaterialCommunityIcons name="minus" style={styles.minusIcon} />
          </View>
        </View>
      </View>

      <View style={styles.productSlectionBtn}>
        <MaterialCommunityIcons
          name="delete-outline"
          style={styles.rightIcon}
        />
      </View>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  productCard: {
    width: '100%',
    height: (Dimensions.get('screen').width * 32) / 100,
    flexDirection: 'row',
    backgroundColor: '#F6F6F6',
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 10,
    overflow: 'hidden',
  },

  productImageHolder: {
    width: '33%',
    height: '100%',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },

  productImage: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },

  productInformation: {
    width: '50%',
    height: '100%',
    paddingLeft: 16,
    paddingTop: 10,
  },

  cardHeader: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 1,
  },

  cardReleaseDate: {
    fontSize: 10,
    marginBottom: 1,
  },

  cartPrice: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  CartIncrease: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '3%',
  },

  increase: {
    backgroundColor: '#EEEEEE',
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginRight: 10,
  },

  quantity: {
    marginRight: 20,
    marginLeft: 20,
  },

  decrease: {
    backgroundColor: '#EEEEEE',
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },

  plus: {
    fontSize: 8,
    color: 'red',
  },

  minus: {
    fontSize: 8,
  },

  productSlectionBtn: {
    backgroundColor: '#EEEEEE',
    width: '20%',
    height: '100%',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  rightIcon: {
    fontSize: 25,
    width: '100%',
    textAlign: 'center',
  },

  plusIcon: {
    color: '#000000',
    fontSize: 15,
  },

  minusIcon: {
    color: '#000000',
    fontSize: 15,
  },
});

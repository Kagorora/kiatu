/** @format */

import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
} from 'react-native';
import Footer from '../components/Footer.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ProductScreen(props) {
  return (
    <View style={styles.productScreen}>
      <View style={styles.homeHeader}>
        <View style={styles.back}>
          <MaterialCommunityIcons
            name="chevron-left"
            style={styles.rightIcon}
          />
        </View>
        <View style={styles.cartConctainer}>
          <MaterialCommunityIcons name="cart-outline" style={styles.cartIcon} />
        </View>
      </View>

      <View style={styles.OneProductInfo}>
        <Text style={styles.OneProductModel}>Nike One Orange</Text>
        <View style={styles.OneShoeImage}>
          <Image
            style={styles.ShoeImg}
            source={require('../assets/ketch.jpeg')}
          />
        </View>
        <View style={styles.smallShoes}>
          <View style={styles.smallShoes_item}>
            <Image
              style={styles.ShoeImg}
              source={require('../assets/blue.jpeg')}
            />

            <Image
              style={styles.ShoeImg}
              source={require('../assets/gray.jpeg')}
            />

            <Image
              style={styles.ShoeImg}
              source={require('../assets/ketch.jpeg')}
            />
          </View>
        </View>
      </View>

      <View style={styles.OneProduct_Info}>
        <Text style={styles.price}>Nike One Orange</Text>
        <Text style={styles.ReleaseDate}>November 23, 2021</Text>
        <Text style={styles.price}>$ 30</Text>
      </View>

      <View style={styles.Sizes_container}>
        <View style={styles.Sizes}>
          <Text style={styles.Size}>Size 45</Text>
          <Text style={styles.Text}>Available Quantity</Text>
          <Text style={styles.Quantity}>10</Text>
        </View>

        <View style={styles.LineSeparatorContainer}>
          <View style={styles.LineSeparator}></View>
        </View>

        <View style={styles.Sizes}>
          <Text style={styles.Size}>Size 45</Text>
          <Text style={styles.Text}>Available Quantity</Text>
          <Text style={styles.Quantity}>10</Text>
        </View>
      </View>

      <View style={styles.Footer}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productScreen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight + 5,
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

  OneProductInfo: {
    width: '100%',
    height: '50%',
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

  homeTitle: {
    fontSize: 26,
    fontWeight: 'bold',
  },

  OneProductModel: {
    fontWeight: 'bold',
    fontSize: 30,
  },

  OneShoeImage: {
    width: '100%',
    height: (Dimensions.get('screen').width * 65) / 100,
    flexDirection: 'row',
    backgroundColor: '#F6F6F6',
    borderRadius: 5,
    marginBottom: 10,
  },

  smallShoes: {
    width: '100%',
    height: '15%',
  },

  smallShoes_item: {
    width: '15%',
    height: '100%',
    marginLeft: 5,
    flexDirection: 'row',
  },

  ShoeImg: {
    width: '100%',
    height: '100%',
    marginRight: 8,
    borderRadius: 5,
    overflow: 'hidden',
  },

  OneProduct_Info: {
    marginTop: 18,
    height: 60,
  },

  ReleaseDate: {
    marginTop: 3,
    marginBottom: 3,
    fontSize: 12,
  },
  price: {
    fontWeight: 'bold',
  },

  Sizes_container: {
    width: '100%',
    height: 90,
    // backgroundColor: 'black',
    marginTop: 18,
    flexDirection: 'row',
  },

  Sizes: {
    height: '80%',
    width: 110,
    backgroundColor: '#F6F6F6',
    borderRadius: 5,
    paddingTop: 8,
    paddingBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    borderWidth: 1,
    borderColor: '#E4AC4D',
  },

  LineSeparatorContainer: {
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  LineSeparator: {
    borderRightWidth: 1,
    marginLeft: 0,
    marginRight: 15,
    borderColor: '#8C8C8C',
    height: '60%',
  },

  Size: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  Text: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: 3,
    marginBottom: 3,
  },

  Quantity: {
    fontSize: 10,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },

  Footer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    marginLeft: 20,
    marginBottom: 20,
  },
});

export default ProductScreen;

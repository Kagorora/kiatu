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
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Header_Back(props) {
  return (
    <View style={styles.homeHeader}>
      <View style={styles.back}>
        <MaterialCommunityIcons name="chevron-left" style={styles.rightIcon} />
      </View>
      <View style={styles.cartConctainer}>
        <MaterialCommunityIcons name="cart-outline" style={styles.cartIcon} />
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

export default Header_Back;

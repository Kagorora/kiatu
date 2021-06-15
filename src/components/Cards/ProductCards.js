/** @format */
import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ProductCards(props) {
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
        <Text style={styles.cardModel}>Nike</Text>
        <Text style={styles.cardReleaseDate}>November 23, 2021</Text>
        <Text style={styles.cardPrice}>30 $</Text>
      </View>

      <View style={styles.productSlectionBtn}>
        <MaterialCommunityIcons name="chevron-right" style={styles.rightIcon} />
      </View>
    </View>
  );
}

export default ProductCards;

const styles = StyleSheet.create({
  productCard: {
    width: '90%',
    height: (Dimensions.get('screen').width * 32) / 100,
    flexDirection: 'row',
    backgroundColor: '#F6F6F6',
    borderRadius: 5,
    marginBottom: 10,
  },

  productImageHolder: {
    backgroundColor: 'green',
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
    width: '57%',
    height: '100%',
    paddingLeft: 16,
    paddingTop: 10,
  },

  cardHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 7,
  },

  cardModel: {
    backgroundColor: 'black',
    color: 'white',
    width: 60,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 5,
    textAlign: 'center',
    marginBottom: 6,
  },

  cardReleaseDate: {
    fontSize: 10,
  },

  cardPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 10,
    left: 20,
  },

  productSlectionBtn: {
    backgroundColor: '#EEEEEE',
    width: '10%',
    height: '100%',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  rightIcon: {
    height: 20,
    width: 20,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

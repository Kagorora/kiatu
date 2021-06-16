/** @format */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Footer from '../components/Footer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { viewProductDetailAction } from '../store/actions/viewSneakers';

function ProductScreen(props) {
  const { navigation, route } = props;

  const { productId } = route.params;

  const dispatch = useDispatch();

  const selector = useSelector((state) => ({
    loading: state.productsList.productDetailLoading,
    error: state.productsList.productDetailError,
    product: state.productsList.productDetailSuccess,
  }));

  const { product, error, loading } = selector;

  useEffect(() => {
    if (productId) {
      viewProductDetailAction(productId)(dispatch);
    }
  }, [dispatch, productId]);

  return (
    <View style={styles.productScreen}>
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

      {error && error.message && !loading && !product && (
        <View>
          <Text>{error.message}</Text>
        </View>
      )}
      {loading && (
        <View>
          <Text>Loading ...</Text>
        </View>
      )}

      {product && !loading && (
        <View>
          <View style={styles.OneProductInfo}>
            {/* <Text style={styles.OneProductModel}>{product.brandName}</Text> */}
            <View style={styles.OneShoeImage}>
              <Image
                style={styles.ShoeImg}
                source={{ uri: product.picture[0] }}
              />
            </View>

            <View style={styles.smallShoes}>
              <View style={styles.smallShoes_item}>
                {product.picture.length > 0 ? (
                  product.picture.map((image) => (
                    <Image style={styles.ShoeImg} source={{ uri: image }} />
                  ))
                ) : (
                  <View>
                    <Text>no result found</Text>
                  </View>
                )}
              </View>
            </View>
          </View>
          <View style={styles.OneProduct_Info}>
            <Text style={styles.price}>Nike One Orange</Text>
            <Text style={styles.ReleaseDate}>November 23, 2021</Text>
            <Text style={styles.price}>$ 30</Text>
          </View>
          <View style={styles.Sizes_container}>
            {product.sizes.length > 0 &&
              product.sizes.map((size) => (
                <View style={styles.Sizes}>
                  <Text style={styles.Size}>{size.size}</Text>
                  <Text style={styles.Text}>Available Quantity</Text>
                  <Text style={styles.Quantity}>{size.quantity}</Text>
                </View>
              ))}

            {/* <View style={styles.LineSeparatorContainer}>
              <View style={styles.LineSeparator}></View>
            </View> */}
          </View>

          <View style={styles.FooterProduct}>
            <Footer
              onPress={() => navigation.navigate('Cart')}
              style={styles.FooterProduct}
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  productScreen: {
    flex: 1,
    paddingHorizontal: 20,
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
    borderWidth: 1,
    borderColor: 'gold',
    borderRadius: 5,
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
    // bottom: -30,
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

  FooterProduct: {
    height: 60,
    width: '100%',
    bottom: 0,
  },
});

export default ProductScreen;

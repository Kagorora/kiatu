/** @format */

import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

function Footer(props) {
  return (
    <View style={styles.Footer}>
      <View
        style={{
          borderBottomColor: '#000000',
          borderBottomWidth: 1,
          marginBottom: 21,
        }}
      />
      <TouchableOpacity
        style={{
          height: 45,
          backgroundColor: 'black',
          borderRadius: 5,
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            textAlignVertical: 'center',
            color: 'white',
            height: '100%',
          }}
        >
          ADD TO CART
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Footer;

const styles = StyleSheet.create({
  button: {
    color: 'black',
    width: '80%',
    height: 41,
  },

  Footer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    marginLeft: 20,
    marginBottom: 20,
  },
});

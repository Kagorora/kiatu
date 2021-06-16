/** @format */

import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const PageHeader = ({ children }) => {
  return (
    <View>
      <Text style={styles.Cart}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Cart: {
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default PageHeader;

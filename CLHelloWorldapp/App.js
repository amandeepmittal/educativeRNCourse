import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>{/* Enter the text message here */}</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

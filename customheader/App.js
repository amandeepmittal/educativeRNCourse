import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './src/components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Expense Tracker app" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4'
  }
});

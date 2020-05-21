import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header({ title }) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
    backgroundColor: '#6983aa'
  },
  title: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold'
  }
});

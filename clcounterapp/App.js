import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  // define the state variable using useState

  // define the increaseCounter handler function

  // define the decrease counter handler function

  return (
    <View style={styles.container}>
      <Text style={styles.title}>You tapped {count} times.</Text>
      <View>
        {/* This a View component to wrap two buttons */}
        {/* Make sure you provide appropriate styles to align buttons horizontally */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttonContainer: {
    // add custom style property
  },
});

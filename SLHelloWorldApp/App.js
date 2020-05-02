import React from 'react';
// Step 1: Import <Text> component
import {StyleSheet, View, Text} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Step 2: Wrap the message inside <Text></Text> */}
      <Text>Hello World, from React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

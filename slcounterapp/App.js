import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  function increaseCounter() {
    setCount(count + 2);
  }

  function decreaseCounter() {
    setCount(count - 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>You tapped {count} times.</Text>
      <View style={styles.buttonContainer}>
        <Button onPress={increaseCounter} title="Increase" color="red" />
        <Button onPress={decreaseCounter} title="Decrease" color="blue" />
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
    flexDirection: 'row',
  },
});

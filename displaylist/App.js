import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Header from './src/components/Header';

export default function App() {
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenses, setExpenses] = useState([]);

  function touchHandler() {
    return setExpenses((currentExpenses) => [
      ...currentExpenses,
      {id: currentExpenses.length + 1, expenseName, expenseAmount}
    ]);
  }

  return (
    <View style={styles.container}>
      <Header title="Expense Tracker app" />
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Enter the name of your expense</Text>
        <TextInput
          style={styles.input}
          value={expenseName}
          onChangeText={(text) => setExpenseName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Enter the amount</Text>
        <TextInput
          style={styles.input}
          value={expenseAmount}
          onChangeText={(text) => setExpenseAmount(text)}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity onPress={touchHandler} style={styles.button}>
        <Text style={styles.buttonText}>Add expense</Text>
      </TouchableOpacity>
      <ScrollView style={{margin: 10}}>
        {expenses.map((item) => (
          <Text key={item.id}>
            Name: {item.expenseName}, Amount: {item.expenseAmount}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4'
  },
  inputContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5
  },
  inputLabel: {
    marginVertical: 5,
    fontSize: 18
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10
  },
  button: {
    alignSelf: 'center',
    borderRadius: 5,
    padding: 5,
    margin: 10,
    backgroundColor: '#363062',
    width: 180,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600'
  }
});

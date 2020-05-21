import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ListItem({ name, amount, id, onDelete }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{`${name} `}</Text>
      <Text style={[styles.itemText, { fontWeight: 'bold' }]}>$ {amount}</Text>
      <TouchableOpacity onPress={() => onDelete(id)}>
        <Icon color="red" name="delete" size={20} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: '#ebebeb',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemText: {
    color: '#333',
    fontSize: 18
  }
});

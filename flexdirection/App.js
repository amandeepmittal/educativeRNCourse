import React from 'react';
import {Text, View} from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <Text style={{color: 'white', fontSize: 20}}>First Child</Text>
        <Text style={{color: 'white', fontSize: 20}}>33%</Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'gray',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <Text style={{color: 'white', fontSize: 20}}>Second Child</Text>
        <Text style={{color: 'white', fontSize: 20}}>33%</Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <Text style={{color: 'black', fontSize: 20}}>Third Child</Text>
        <Text style={{color: 'black', fontSize: 20}}>33%</Text>
      </View>
    </View>
  );
}

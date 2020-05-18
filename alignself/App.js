import React from 'react';
import {Text, View} from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View
        style={{
          backgroundColor: 'orange',
          width: 150,
          height: 100,
          alignSelf: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, color: 'white'}}>auto</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          width: 150,
          height: 100,
          alignSelf: 'flex-start',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, color: 'white'}}>flex-start</Text>
      </View>
      <View
        style={{
          backgroundColor: 'blue',
          width: 150,
          height: 100,
          alignSelf: 'flex-end',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, color: 'white'}}>flex-end</Text>
      </View>
      <View
        style={{
          backgroundColor: 'black',
          width: 150,
          height: 100,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, color: 'white'}}>center</Text>
      </View>
      <View
        style={{
          backgroundColor: 'gray',
          height: 100,
          alignSelf: 'stretch',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, color: 'black'}}>stretch</Text>
      </View>
    </View>
  );
}

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BooksListScreen from '../screens/BooksListScreen';
import BookDetailScreen from '../screens/BookDetailsScreen';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BooksList">
        <Stack.Screen
          name="BooksList"
          component={BooksListScreen}
          options={{ title: 'Mini Reads' }}
        />
        <Stack.Screen
          name="BookDetails"
          component={BookDetailScreen}
          options={{ title: 'Book Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductsScreen from './src/screens/ProductsScreen'
import PrductDetailScreen from './src/screens/PrductDetailScreen';
import {Provider as ProductProvider} from './src/context/productContext'


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <ProductProvider>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name = 'Home' component = {ProductsScreen}/>
          <Stack.Screen name = 'Detail' component = {PrductDetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ProductProvider>
  );
}

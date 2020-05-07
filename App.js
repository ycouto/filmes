import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/pages/HomeScreen';
import DetailScreen from './src/pages/DetailScreen';



const Stack = createStackNavigator();

function App() {
  return (
    <>
    <StatusBar barStyle="light-content"></StatusBar>
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen name="TeleFree" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />

      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

export default App;
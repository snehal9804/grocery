import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
const Stack=createStackNavigator();
const App=()=>{
  return(
  <NavigationContainer>
    <Stack.Navigator 
    initialRouteName='Splash'
    screenOptions={{
      headerShown:false,
    }}>
      <Stack.Screen name='Splash' component={Splash}/>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='SignUp' component={SignUp}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};
export default App;


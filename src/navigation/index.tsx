import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screen/Splash';
import Home from '../screen/Home';
import Login from '../screen/Login';
import DetailScreen from '../screen/Detail';
const Stack = createStackNavigator();
const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};
export default MainNavigator;

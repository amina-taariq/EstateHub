import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screen/Splash';
import Login from '../screen/Login';
import DetailScreen from '../screen/Detail';
import BottomTabs  from './BottomTabs';
const Stack = createStackNavigator();
const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};
export default MainNavigator;

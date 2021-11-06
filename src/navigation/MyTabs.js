import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Home,
  Recent,
  Exams,
  Profile,
  Contact
} from '../index'
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Recent" component={Recent} />
        <Tab.Screen name="Exams" component={Exams} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Contact" component={Contact} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default MyTabs

import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {
  Home,
  Exams, MyTabs
} from '../index'
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      screenOptions={{
        headerShown:false
      }}
      >
        <Drawer.Screen
          name="MyTabs"
          component={MyTabs}
          options={{
            drawerLabel: () => null,
            title: null,
            drawerIcon: () => null
          }}
        />
        <Drawer.Screen name="Exams" component={Exams} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default MyDrawer
const styles = StyleSheet.create({})

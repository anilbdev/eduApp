import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {
   MyTabs,
   ExamCorner,
   Subscription,
   Analytics,
   Downloads,
   Notifications,
   Referals,
   ShareApp,
   LogOut

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
        <Drawer.Screen name="ExamsCorner" component={ExamCorner} />
        <Drawer.Screen name="Subscription" component={Subscription} />
        <Drawer.Screen name="Analytics" component={Analytics} />
        <Drawer.Screen name="Downloads" component={Downloads} />
        <Drawer.Screen name="Notifications" component={Notifications} />
        <Drawer.Screen name="Referals" component={Referals} />
        <Drawer.Screen name="Share App" component={ShareApp} />
        <Drawer.Screen name="Log Out" component={LogOut} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default MyDrawer
const styles = StyleSheet.create({})

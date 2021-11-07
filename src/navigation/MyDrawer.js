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
   LogOut,
   navigationStrings

} from '../index'
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
   
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
        <Drawer.Screen name={navigationStrings.EXAM_CORNER} component={ExamCorner} />
        <Drawer.Screen name={navigationStrings.SUBSCRIPTION} component={Subscription} />
        <Drawer.Screen name={navigationStrings.ANALYTICS} component={Analytics} />
        <Drawer.Screen name={navigationStrings.DOWNLOADS} component={Downloads} />
        <Drawer.Screen name={navigationStrings.NOTIFICATIONS} component={Notifications} />
        <Drawer.Screen name={navigationStrings.REFERALS} component={Referals} />
        <Drawer.Screen name={navigationStrings.SHARE_APP} component={ShareApp} />
        <Drawer.Screen name={navigationStrings.LOGOUT} component={LogOut} />
      </Drawer.Navigator>
   
  );
}
export default MyDrawer
const styles = StyleSheet.create({})

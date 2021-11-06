import React from 'react'
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import {
  Home,
  Recent,
  Exams,
  Profile,
  Contact
} from '../index'
import { color } from 'react-native-elements/dist/helpers';
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        // screenOptions={{
        //   headerShown: false,
        //   tabBarActiveTintColor: '#00c458',
        //   tabBarInactiveTintColor: '#c8c8c8'
        // }}
        screenOptions={{
          tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: '#ffffff', borderRadius: 15,
            height: 50,
            ...styles.shadow
          }
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarActiveTintColor: '#00c458',
            tabBarInactiveTintColor: '#c8c8c8',
            tabBarIcon: ({ focused }) =>
              focused ? <Icon name='home' size={24} color='#00c458' /> :
                <Icon name='home' size={24} color='#c8c8c8' />
          }}
        />
        <Tab.Screen
          name="Recent"
          component={Recent}
          options={{
            tabBarActiveTintColor: '#00c458',
            tabBarInactiveTintColor: '#c8c8c8',
            tabBarIcon: ({ focused }) =>
              focused ? <Icon name='play-arrow' size={24} color='#00c458' /> :
                <Icon name='play-arrow' size={24} color='#c8c8c8' />
          }}
        />
        <Tab.Screen 
        name="Exams" 
        component={Exams}
        options={{
          tabBarActiveTintColor: '#00c458',
          tabBarInactiveTintColor: '#c8c8c8',
          tabBarIcon: ({ focused }) =>
            focused ? <Icon name='article' size={24} color='#00c458' /> :
              <Icon name='article' size={24} color='#c8c8c8' />
        }}
        />
        <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
          tabBarActiveTintColor: '#00c458',
          tabBarInactiveTintColor: '#c8c8c8',
          tabBarIcon: ({ focused }) =>
            focused ? <Icon name='person' size={24} color='#00c458' /> :
              <Icon name='person' size={24} color='#c8c8c8' />
        }}
        />
        <Tab.Screen 
        name="Contact" 
        component={Contact} 
        options={{
          tabBarActiveTintColor: '#00c458',
          tabBarInactiveTintColor: '#c8c8c8',
          tabBarIcon: ({ focused }) =>
            focused ? <Icon name='mail' size={24} color='#00c458' /> :
              <Icon name='mail' size={24} color='#c8c8c8' />
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#002333',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: .25,
    shadowRadius: 3.5,
    elevation: 5
  }
})
export default MyTabs

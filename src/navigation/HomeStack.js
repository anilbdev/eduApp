import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    Home,
    MyTabs,
    SubjectScreen,
    navigationStrings,
    SubjectScreenStack
} from '../index'

const Stack = createNativeStackNavigator();

export default class HomeStack extends Component {
    render() {
        return (
            // <NavigationContainer>
            <Stack.Navigator
            screenOptions={{headerShown:false}}
            >
                <Stack.Screen 
                name={navigationStrings.MYTABS}
                component={MyTabs}
                />
                 <Stack.Screen 
                name={navigationStrings.SUBJECT_SCREEN_STACK}
                component={SubjectScreenStack}
                />
            </Stack.Navigator>
            // </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({})

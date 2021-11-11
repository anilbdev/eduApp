import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    Home,
    SubjectScreen,
    navigationStrings} from '../index'

const Stack = createNativeStackNavigator();

export default class HomeStack extends Component {
    render() {
        return (
            <Stack.Navigator
            screenOptions={{headerShown:false}}
            >
                <Stack.Screen 
                name={navigationStrings.HOME}
                component={Home}
                />
                 <Stack.Screen 
                name={navigationStrings.SUBJECT_SCREEN}
                component={SubjectScreen}
                />
            </Stack.Navigator>
        )
    }
}

const styles = StyleSheet.create({})

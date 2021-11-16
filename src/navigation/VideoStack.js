import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
    Videos,
    VideoDetail, navigationStrings
} from '../index'
const Stack = createNativeStackNavigator();
export default class VideoStack extends Component {
    render() {
        return (
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name={navigationStrings.VIDEOS} component={Videos} />
               
            </Stack.Navigator>
        )
    }
}

const styles = StyleSheet.create({})

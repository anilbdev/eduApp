import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    SubjectScreen,
    navigationStrings,
    ChapterStack
} from '../index'
const Stack = createNativeStackNavigator();
export default class SubjectScreenStack extends Component {
    render() {
        return (
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name={navigationStrings.SUBJECT_SCREEN} component={SubjectScreen} />
                <Stack.Screen name={navigationStrings.CHAPTER_STACK} component={ChapterStack} />
            </Stack.Navigator>
        )
    }
}
const styles = StyleSheet.create({})

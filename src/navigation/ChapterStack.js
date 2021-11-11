import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    ChapterTab,
    navigationStrings,
    ChapterHeader
} from '../index'

const Stack = createNativeStackNavigator();

export default class ChapterStack extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                screenOptions={{
                    header:()=>(
                        <ChapterHeader/>
                    )
                }}
                >
                    <Stack.Screen name={navigationStrings.CHAPTER_TAB} component={ChapterTab}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({})

import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
    navigationStrings,
    Videos,
    ChapterTest,
    QnBank,
    Resources,
} from '../index'
const Tab = createMaterialTopTabNavigator();
export default class ChapterTab extends Component {
    render() {
        return (
            <Tab.Navigator
                screenOptions={{
                    tabBarLabelStyle: {
                        fontSize: 11,
                        color: '#6f838e'
                    },
                    tabBarStyle: {
                        backgroundColor: '#00202f'
                    },
                }}
            >
                <Tab.Screen name={navigationStrings.VIDEOS} component={Videos} />
                <Tab.Screen name={navigationStrings.CHAPTER_TEST} component={ChapterTest} />
                <Tab.Screen name={navigationStrings.RESOURCES} component={Resources} />
                <Tab.Screen name={navigationStrings.QN_BANK} component={QnBank} />
            </Tab.Navigator>
        )
    }
}
const styles = StyleSheet.create({})

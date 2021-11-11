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
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name={navigationStrings.VIDEOS} component={Videos} />
                    <Tab.Screen name={navigationStrings.CHAPTER_TEST} component={ChapterTest} />
                    <Tab.Screen name={navigationStrings.RESOURCES} component={Resources} />
                    <Tab.Screen name={navigationStrings.QN_BANK} component={QnBank} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}
const styles = StyleSheet.create({})

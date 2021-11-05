import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {
    Header,
    HomeMessge,
    SelectClass,
    SelectSubject,
    RecentCourse
} from '..'
export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Header />
                </View>
                <View style={styles.messageContainer}>
                    <HomeMessge />
                </View>
                <View style={styles.selectClassContainer}>
                    <SelectClass />
                </View>
                <View style={styles.selectSubjectContainer}>
                    <SelectSubject/>
                </View>
                <View style={styles.recentCourseContainer}>
                    <RecentCourse/>
                </View>
                <View style={styles.classSliderContainer}>
                    <Text>classSlider</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
    },
    headerContainer: {
        borderWidth: 2
    },
    messageContainer: {
        borderWidth: 2
    },
    selectClassContainer: {
        borderWidth: 2
    },
    selectSubjectContainer: {
        borderWidth: 2
    },
    recentCourseContainer: {
        borderWidth: 2
    },
    classSliderContainer: {
        borderWidth: 2
    }
})

import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import {
    Header,
    HomeMessge,
    SelectClass,
    SelectSubject,
    RecentCourse,
    ClassCard
} from '..'
export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
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
                        <SelectSubject />
                    </View>
                    <View style={styles.recentCourseContainer}>
                        <RecentCourse />
                    </View>
                    <View style={styles.classSliderContainer}>
                        <ClassCard />
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
    },
    headerContainer: {
        paddingLeft: 15,
    },
    messageContainer: {
        paddingLeft: 15,
    },
    selectClassContainer: {
    },
    selectSubjectContainer: {
        paddingLeft: 15,
    },
    recentCourseContainer: {
        paddingLeft: 15,
    },
    classSliderContainer: {
        marginBottom:65
    }
})

import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native'
import { Icon } from 'react-native-elements'
export default class SubjectScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={styles.backButtonContainer}>
                        <TouchableHighlight>
                            <Icon
                                name='circle'
                            />
                        </TouchableHighlight>
                    </View>
                    <View style={styles.subjectNameContainer}>
                        <Text style={{ fontSize: 28 }} >Biology</Text>
                        <View style={styles.subjectDetailContainer} >
                            <View style={styles.chapterSummary}>
                                <Icon
                                    name='circle'
                                />
                                <Text>Chapters</Text>
                            </View>
                            <View style={styles.hourSummary}>
                                <Icon
                                    name='circle'
                                />
                                 <Text>Hours</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.mainBodyContainer}>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 3
    },
    headerContainer: {
        borderWidth: 3
    },
    mainBodyContainer: {
        borderWidth: 2
    },
    backButtonContainer: {
        borderWidth: 5,
        flexDirection: 'row'
    },
    subjectNameContainer: {
    },
    subjectDetailContainer: {
        flexDirection: 'row'
    },
    chapterSummary: {
        flexDirection: 'row'
    },
    hourSummary: {
        flexDirection: 'row'
    }
})
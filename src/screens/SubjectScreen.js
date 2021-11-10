import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableHighlight,FlatList } from 'react-native'
import { Icon } from 'react-native-elements'
const data = [{
    id:1,
    title:'Chapter 1',
    part:2
},
{
    id:2,
    title:'Chapter 2',
    part:2
},
{
    id:3,
    title:'Chapter 3',
    part:3
},
{
    id:4,
    title:'Chapter 4',
    part:8
},
{
    id:5,
    title:'Chapter 5',
    part:5
},
{
    id:6,
    title:'Chapter 6',
    part:4
}]

const renderItem =({item})=>(
    <Text>{item.title}</Text>
)

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
                    <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    />
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
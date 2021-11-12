import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableHighlight, FlatList } from 'react-native'
import { Icon } from 'react-native-elements'
import { navigationStrings } from '../index'
const data = [{
    id: 1,
    title: 'Chapter 1',
    part: 2,
    hour: 3
},
{
    id: 2,
    title: 'Chapter 2',
    part: 2,
    hour: 2
},
{
    id: 3,
    title: 'Chapter 3',
    part: 3,
    hour: 5
},
{
    id: 4,
    title: 'Chapter 4',
    part: 8,
    hour: 8
},
{
    id: 5,
    title: 'Chapter 5',
    part: 5,
    hour: 6
},
{
    id: 6,
    title: 'Chapter 6',
    part: 4,
    hour: 7
},
{
    id: 7,
    title: 'Chapter 7',
    part: 4,
    hour: 7
},
{
    id: 8,
    title: 'Chapter 8',
    part: 4,
    hour: 7
}
]

export default class SubjectScreen extends Component {
    itemClick = () => {
       
        this.props.navigation.navigate(navigationStrings.CHAPTER_STACK)
    }

    renderItem = ({ item }) => {
    
        return (
            <TouchableHighlight
            onPress={() => this.itemClick(item)}
            >
                <View style={styles.cardContainer}>
                    <Text style={{ fontSize: 23 }} >{item.title}</Text>
                    <View style={styles.cardDetail} >
                        <View style={styles.cardChapterSummary}>
                            <Icon
                                size={17}
                                name='radio-button-checked'
                            />
                            <Text style={{ fontSize: 13, marginLeft: 5 }} >{item.part} Chapters</Text>
                        </View>
                        <View style={styles.cardHourSummary}>
                            <Icon
                                size={17}
                                name='radio-button-checked'
                            />
                            <Text style={{ fontSize: 13, marginLeft: 5 }}>{item.hour} Hours</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
    render() {
        console.log('render function>>>>', this.props.navigation)
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={styles.backButtonContainer}>
                        <TouchableHighlight
                            onPress={() => { this.props.navigation.goBack() }}
                            style={{ borderWidth: 1, borderColor: '#fff', borderRadius: 10, padding: 8 }}>
                            <Icon
                                color='green'
                                size={30}
                                name='chevron-left'
                            />
                        </TouchableHighlight>
                    </View>
                    <View style={styles.subjectNameContainer}>
                        <Text style={{ fontSize: 32, color: '#fff', marginBottom: 5 }} >Biology</Text>
                        <View style={styles.subjectDetailContainer} >
                            <View style={styles.chapterSummary}>
                                <Icon
                                    color='green'
                                    size={17}
                                    name='circle'
                                />
                                <Text style={{ fontSize: 13, marginLeft: 5, color: 'green' }} >Chapters</Text>
                            </View>
                            <View style={styles.hourSummary}>
                                <Icon
                                    color='green'
                                    size={17}
                                    name='circle'
                                />
                                <Text style={{ fontSize: 13, marginLeft: 5, color: 'green' }} >Hours</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.mainBodyContainer}>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={this.renderItem}
                    />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        backgroundColor: '#00202f',
    },
    mainBodyContainer: {
        flex: 1
    },
    backButtonContainer: {
        flexDirection: 'row',
        marginHorizontal: 30,
        marginTop: 15
    },
    subjectNameContainer: {
        marginHorizontal: 30,
        paddingVertical: 40
    },
    subjectDetailContainer: {
        flexDirection: 'row'
    },
    chapterSummary: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    hourSummary: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15
    },
    cardContainer: {
        marginHorizontal: 30,
        marginBottom: 25,
        padding: 10,
        backgroundColor: '#fff',
        shadowColor: "#000000",
        elevation: 5,
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
    cardDetail: {
        flexDirection: 'row'
    },
    cardChapterSummary: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardHourSummary: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15
    },
})
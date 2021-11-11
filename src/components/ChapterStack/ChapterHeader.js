import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native'
import { Icon } from 'react-native-elements'
export default class ChapterHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headingConatiner}>
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
                    <View style={styles.headingTextContainer}>
                        <Text style={{ fontSize: 28, color: '#fff', paddingLeft: 15 }}>Biology</Text>
                    </View>
                </View>
                <View style={styles.descContainer}>
                    <Text style={{ fontSize: 32, color: '#fff', marginBottom: 5 }} >Biology</Text>
                    <View style={styles.subjectDetailContainer} >
                        <View style={styles.chapterSummary}>
                            <Icon
                                color='green'
                                size={17}
                                name='radio-button-checked'
                            />
                            <Text style={{ fontSize: 13, marginLeft: 5, color: 'green' }} >Chapters</Text>
                        </View>
                        <View style={styles.hourSummary}>
                            <Icon
                                color='green'
                                size={17}
                                name='radio-button-checked'
                            />
                            <Text style={{ fontSize: 13, marginLeft: 5, color: 'green' }} >Hours</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00202f'
    },
    headingConatiner: {
        flexDirection: 'row'
    },
    backButtonContainer: {
        flexDirection: 'row',
        marginHorizontal: 30,
        marginTop: 15,
       
    },
    headingTextContainer: {
        
        justifyContent: 'center',
        marginTop: 15,
    },
    descContainer: {
        marginHorizontal: 30,
        paddingVertical:40
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
    
})

import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, FlatList } from 'react-native'
import { ItemButton } from '../../index'
//component//
export default class SelectSubject extends Component {
    render() {
        let subjects = ['Biology', 'Chemistry', 'Physics', 'English']
        return (
            <View style={styles.container}>
                <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                    keyExtractor={(subject) => subject}
                    data={subjects}
                    renderItem={({item}) => {
                        return (
                            <View style={styles.buttonStyle}>
                                <ItemButton subjectName={item} {...this.props} />
                            </View>
                        )
                    }}
                />
              
            
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
    },
    buttonStyle: {
        width: 150,
        padding: 10
    }
})

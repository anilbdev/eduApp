import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Dimensions } from 'react-native'
import { ItemButton } from '../../index'
//component//
export default class SelectSubject extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.buttonStyle}>
                        <ItemButton subjectName='Biology' {...this.props} />
                    </View>
                    <View style={styles.buttonStyle}>
                        <ItemButton subjectName='Biology' />
                    </View>
                    <View style={styles.buttonStyle}>
                        <ItemButton subjectName='Biology' />
                    </View>
                    <View style={styles.buttonStyle}>
                        <ItemButton subjectName='Biology' />
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
    },
    buttonStyle: {
        width: 150,
        padding:10
    }
})

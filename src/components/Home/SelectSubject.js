import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Dimensions } from 'react-native'
import {ItemButton} from '../../index'
//component//
export default class SelectSubject extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal
                >
                    <View style={styles.buttonStyle}>
                    <ItemButton/>
                    </View>
                    
                   
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        borderWidth:3
    },
    buttonStyle:{
        width:300,
        borderWidth:3
    }
})

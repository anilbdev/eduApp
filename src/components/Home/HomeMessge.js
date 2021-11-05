import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class HomeMessge extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <Text> Good Morning </Text>
                <Text style={styles.nameText}> Anil Bhasi </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        
    },
    nameText:{
        fontSize:30
    }
})

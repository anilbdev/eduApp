import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Message extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textHeading}> Heading </Text>
                <Text style={styles.textMessage}>Message</Text>
                <Text style={styles.messagePhoneNumber}>Phone number</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        alignItems:'center'
    },
    textHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical:10
    },
    textMessage: {
        fontSize: 15,
        color: 'grey',
    },
    messagePhoneNumber:{
        fontSize:18,
        marginTop:10
    }
})

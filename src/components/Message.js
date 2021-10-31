import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Message extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        const { content} = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.messageHeading}>{content.messageHeading}</Text>
                <Text style={styles.messageText}>{content.messageText}</Text>
                {content.submitStatus ? <Text style={styles.messagePhoneNumber}>{content.phoneNumber}</Text> : null }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    messageHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        color: '#000'
    },
    messageText: {
        fontSize: 15,
        color: 'grey',
    },
    messagePhoneNumber: {
        fontSize: 18,
        marginTop: 10
    }
})

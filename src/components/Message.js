import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Message extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }


    render() {
        const { messageHeading, messageText, messagePhoneNumber } = this.props.content
        return (
            <View style={styles.container}>
                <Text style={styles.messageHeading}>{messageHeading}</Text>
                <Text style={styles.messageText}>{messageText}</Text>
                {(messagePhoneNumber == '') ? null : <Text style={styles.messagePhoneNumber}>{messagePhoneNumber}</Text>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        alignItems: 'center'
    },
    messageHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10
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

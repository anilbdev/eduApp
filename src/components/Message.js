import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
export default class Message extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { content } = this.props
        console.log('message page>>>>>>>>>',content.submitStatus);
        switch (content.submitStatus) {
            case 'phone':
                return (
                    <View style={styles.container}>
                        <Text style={styles.messageHeading}>{content.messageHeading}</Text>
                        <Text style={styles.messageText}>{content.messageText}</Text>
                        <Text style={styles.messagePhoneNumber}></Text>
                    </View>
                )
            case 'otp':
                return (
                    <View style={styles.container}>
                        <Text style={styles.messageHeading}>{content.messageHeading}</Text>
                        <Text style={styles.messageText}>{content.messageText}</Text>
                        <Text style={styles.messagePhoneNumber}>{content.phoneNumber}</Text>
                    </View>
                )
            default:
                return null
        }
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

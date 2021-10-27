import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableHighlight } from 'react-native'
import { Button } from '.'

export default class Message extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }


    render() {
        const { messageHeading, messageText, messagePhoneNumber } = this.props.content
        return (
            <View style={styles.container}>
                <View style={styles.phoneNumberInput}>
                    <TextInput
                        value='+91'
                        style={styles.phoneCountryCode} />
                    <TextInput style={styles.phoneNunmber} />
                </View>
                <View style={styles.buttonConatainer}>
                    <Button />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        alignItems: 'center',
        width: '75%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    phoneNumberInput: {
        flexDirection: 'row',
        paddingTop: 15
    },
    phoneCountryCode: {
        backgroundColor: '#333634',
        color: 'white',
        borderRadius: 14,
        width: 50,
        marginLeft: 20,
        marginRight: 5,
        fontSize: 18,
        textAlign: 'center'
    },
    phoneNunmber: {
        backgroundColor: '#333634',
        color: 'white',
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        borderRadius: 14,
        marginRight: 20
    },
    buttonConatainer:{
        width:'100%',
        marginVertical:10
    }
})

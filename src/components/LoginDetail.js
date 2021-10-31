import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableHighlight } from 'react-native'
import { Button, ContactUs, InputContainer } from '../index'
export default class Message extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { content, handleButtonPress, handlePhoneNumber } = this.props
        return (
            <View style={styles.container}>
                <InputContainer
                    content={content}
                    handlePhoneNumber={handlePhoneNumber} />
                <View style={styles.buttonConatainer}>
                    <Button content={content}
                        handleButtonPress={handleButtonPress}
                    />
                </View>
                <ContactUs content={content} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        alignItems: 'center',
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 25,
        paddingBottom: 10
    },
    buttonConatainer: {
        width: '100%',
        marginVertical: 10
    }
})

import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableHighlight } from 'react-native'
import { Button, InputDetail, OtpInput, ContactUs } from '../index'
export default class Message extends Component {
    constructor(props) {
        super(props)
       
        }
    
 
    render() {
        const { content,handleButtonPress } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.phoneNumberInput}>
                    {content.submitStatus ? <OtpInput /> : <InputDetail />}
                </View>
                <View style={styles.buttonConatainer}>
                    <Button content={content}
                        handleButtonPress={handleButtonPress}
                        />
                </View>
                <ContactUs />
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
        paddingVertical: 25
    },
    phoneNumberInput: {
        width: '100%',
        marginVertical: 10,
    },
    buttonConatainer: {
        width: '100%',
        marginVertical: 10
    }
})

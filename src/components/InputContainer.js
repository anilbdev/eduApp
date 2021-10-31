import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { OtpInput, InputDetail } from '../index'
export default class InputContainer extends Component {
    render() {
        const { content, handlePhoneNumber } = this.props
        console.log('Input container>>>>', content.submitStatus);
        switch (content.submitStatus) {
            case 'submitPhone':
                return (
                    <View style={styles.container}>
                        <View style={styles.phoneNumberInput}>
                            <InputDetail
                                content={content}
                                handlePhoneNumber={handlePhoneNumber} />
                        </View>
                    </View>
                )
            case 'submitOtp':
                return (
                    <View style={styles.container}>
                        <View style={styles.phoneNumberInput}>
                            <OtpInput />
                        </View>
                    </View>
                )
            default:
                return null
        }
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
    },
    phoneNumberInput: {
        width: '95%',
        marginVertical: 10,
    }
})

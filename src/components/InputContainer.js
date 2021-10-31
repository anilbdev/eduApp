import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { OtpInput, InputDetail } from '../index'

export default class InputContainer extends Component {
    render() {
        const { content, handlePhoneNumber } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.phoneNumberInput}>
                    {content.submitStatus ? <OtpInput /> :
                        <InputDetail
                            content={content}
                            handlePhoneNumber={handlePhoneNumber} />}
                </View>
            </View>
        )
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

import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, KeyboardAvoidingView } from 'react-native'
export default class InputDetail extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { content, handlePhoneNumber } = this.props
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles}
            >
                <View style={styles.container}>
                    <TextInput
                        value='+91'
                        style={styles.phoneCountryCode} />
                    <TextInput
                        placeholder='Mobile number'
                        placeholderTextColor='#76877a'
                        value={content.phoneNunmber}
                        onChangeText={(text) => handlePhoneNumber(text)}
                        style={styles.phoneNunmber} />
                </View>
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
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
        paddingLeft: 15,
        borderRadius: 14,
        marginRight: 20
    },
})

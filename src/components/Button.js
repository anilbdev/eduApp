import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity } from 'react-native'

export default class Button extends Component {
    render() {
        return (
            <TouchableOpacity
            style={styles.button}
        >
            <Text style={{ color: '#fff', fontSize: 18 }}>Continue</Text>
        </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'green',
        alignItems: "center",
        width: '80%',
        alignSelf: "center",
        padding: 14,
        borderRadius: 10
    }
})

import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default class Button extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        const { content,handleButtonPress } = this.props
        
        return (
            <TouchableOpacity
                onPress={handleButtonPress}
                style={styles.button}
            >
                <Text style={{ color: '#fff', fontSize: 18 }}>{content.buttonName}</Text>
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

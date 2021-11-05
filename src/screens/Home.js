import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { ItemButton } from '..'


export default class Home extends Component {
    render() {
        return (
            <View>
                <Text> Home screen </Text>
                <ItemButton/>
            </View>
        )
    }
}

const styles = StyleSheet.create({})

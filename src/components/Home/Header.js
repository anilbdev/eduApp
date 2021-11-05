import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {SquareButton,ItemButton} from '../../index'

export default class Header extends Component {
    render() {
        return (
            <View>
                 <Text> Home screen </Text>
                    <SquareButton />
                    <ItemButton />
            </View>
        )
    }
}

const styles = StyleSheet.create({})

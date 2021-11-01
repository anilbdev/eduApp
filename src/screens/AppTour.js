import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {CardDisplay,CarousalDisplay} from '../index'

export default class AppTour extends Component {
    render() {
        return (
            <View>
                <CarousalDisplay/>
            </View>
        )
    }
}

const styles = StyleSheet.create({})

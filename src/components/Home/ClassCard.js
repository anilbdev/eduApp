import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { CarousalDisplay } from '../..'

export default class ClassCard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CarousalDisplay/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{

    }
})

import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { SquareButton, ItemButton } from '../../index'
//component//
export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <SquareButton />
                    <Image
                    style={{height:45,width:'25%',marginLeft:10}}
                    source={require('../../../assets/logo.png')}/>
                </View>
                <ItemButton />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
    },
    logoContainer: {
        flexDirection: 'row',
        borderWidth: 1
    }
})

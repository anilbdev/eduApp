import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export class Login extends Component {
    render() {
        return (
            <View style={styles.logoImage}>
                <Image
                    source={require('../../../assets/logo.png')} />
            </View>
        )
    }
}

export default Login

const styles = StyleSheet.create({
    logoImage: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
})
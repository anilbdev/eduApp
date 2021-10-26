import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Message from '../../components/Message'

export class Login extends Component {
    render() {
        return (
            <View style={styles.conatianer}>
                <View style={styles.logoImage}>
                    <Image
                        source={require('../../../assets/logo.png')} />
                </View>
                <Message/>
                <Text>Phone Numbergffgndlgdgldbgld</Text>
                <Text>Phone Numbergffgndlgdgldbgld</Text>
            </View>
        )
    }
}

export default Login

const styles = StyleSheet.create({
    conatianer:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderColor:'blue',
        borderWidth:3

    },
    logoImage: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderColor:'blue',
        borderWidth:3
    }
})
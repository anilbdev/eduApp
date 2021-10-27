import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { Message,LoginDetail,Button } from '../../components' 


export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messageHeading: 'Enter your phone number',
            messageText: 'An otp will be sent to your mobile',
            messagePhoneNumber: ''
        }

    }

    render() {
        return (
            <View style={styles.conatianer}>
                <View style={styles.logoImage}>
                    <Image
                        source={require('../../../assets/logo.png')} />
                </View>
                <Message content={this.state} />
                <LoginDetail  content={this.state}/>
                <Button/>
            </View>
        )
    }
}

export default Login

const styles = StyleSheet.create({
    conatianer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderColor: 'blue',
        borderWidth: 3

    },
    logoImage: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderColor: 'blue',
        borderWidth: 3
    }
})
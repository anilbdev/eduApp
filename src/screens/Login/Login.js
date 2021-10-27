import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { Message, LoginDetail } from '../../components'


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
                        style={{width:'65%'}}
                        source={require('../../../assets/logo.png')} />
                </View>
                <View style={styles.messgaeContainer}>
                    <Message content={this.state} />
                </View>
                <View style={styles.loginConatiner}>
                    <LoginDetail content={this.state} />
                </View>
            </View>
        )
    }
}

export default Login

const styles = StyleSheet.create({
    conatianer: {
        // alignItems: 'center',
        // justifyContent: 'center',
        flex: 1,
        borderColor: 'blue',
        borderWidth: 3

    },
    logoImage: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        
      
    },
    messgaeContainer: {
        maxWidth: '85%',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 10


    },
    loginConatiner: {
        width: '85%',
        alignItems: 'center',
        alignSelf: 'center',
        


    }
})
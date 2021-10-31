import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { Message, LoginDetail, Logo } from '../index'
export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messageHeading: 'Enter your phone number',
            messageText: 'An otp will be sent to your mobile',
            roundLogo: false,
            submitStatus: false,
            buttonName: 'Continue',
            phoneNumber: '',
            contactUs: false
        }
    }
    handleButtonPress = () => {
        this.setState({
          submitStatus:true
        })
        console.log('login page detected')
    }
    handlePhoneNumber = (text) => {
        this.setState({
            phoneNumber: text
        })
    }
    componentDidUpdate() {
        if (this.state.submitStatus) {
            this.setState({
                roundLogo: true,
                buttonName: 'Resend OTP',
                contactUs: true,
                messageHeading: 'Verification code',
                messageText: 'Please type the verification code sent to',
                submitStatus:false                
            })
        }
    }
    render() {
        return (
            <View style={styles.conatianer}>
                <View style={styles.logoImage}>
                    <Image
                        style={{ width: '65%' }}
                        source={require('../../assets/logo.png')} />
                    <Logo roundLogo={this.state} />
                </View>
                <View style={styles.messgaeContainer}>
                    <Message content={this.state} />
                </View>
                <View style={styles.loginConatiner}>
                    <LoginDetail content={this.state}
                        handlePhoneNumber={this.handlePhoneNumber}
                        handleButtonPress={this.handleButtonPress} />
                </View>
            </View>
        )
    }
}
export default Login
const styles = StyleSheet.create({
    conatianer: {
        flex: 1,
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
        width: '100%',
        alignItems: 'center',
        alignSelf: 'center',
    }
})
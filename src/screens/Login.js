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
            submitStatus: 'submitPhone',
            buttonName: 'Continue',
            phoneNumber: '',
            contactUs: false,
        }
        this.screen = 'phoneSubmited'
    }
    handleButtonPress = () => {
        console.log(this.screen);
        switch (this.screen) {
            case 'phoneSubmited':
                this.setState({
                    roundLogo: true,
                    buttonName: 'Resend OTP',
                    contactUs: true,
                    messageHeading: 'Verification code',
                    messageText: 'Please type the verification code sent to',
                    submitStatus: 'submitOtp',
                })
                this.screen = 'otpSubmitted'
                break;
            case 'otpSubmitted':
                this.setState({
                    roundLogo: true,
                    buttonName: 'Register',
                    contactUs: false,
                    messageHeading: 'Student Details',
                    submitStatus: 'submitRegister'
                })
                this.screen = 'registerSubmitted'
                break
            case 'registerSubmitted':
                this.setState({
                    roundLogo: true,
                    buttonName: 'Continue',
                    contactUs: false,
                    messageHeading: 'Select your school Board',
                    submitStatus: 'boardDetailSubmit'
                })
                this.screen = 'goToAppTour'
            case 'goToAppTour':
                this.props.navigation.navigate('AppTour')
                console.log('go to app tour point')
                break
            default:
                break;
        }
    }
    handlePhoneNumber = (text) => {
        this.setState({
            phoneNumber: text
        })
    }
    render() {
        console.log('render working>>>>Login');
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
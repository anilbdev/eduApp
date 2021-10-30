import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableHighlight } from 'react-native'
import {Button,InputDetail,OtpInput} from '../index'

export default class Message extends Component {
    constructor(props) {
        super(props)       
        this.state={
            phoneNumber:'',
            submitStatus:false,
            buttonName:'Continue'
        }
    }
    handleSubmit = ()=>{
        this.setState({
            submitStatus:true,
            buttonName:'Resend OTP'
        })
        console.log('button submitted');
    }

    render() {
        const { messageHeading, messageText, messagePhoneNumber } = this.props.content
        return (
            <View style={styles.container}>
                <View style={styles.phoneNumberInput}>                   
                    {this.state.submitStatus ? <OtpInput/> : <InputDetail/>}
                </View>
                <View style={styles.buttonConatainer}>
                    <Button buttonName={this.state.buttonName} handleSubmit={this.handleSubmit} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        alignItems: 'center',
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical:25
    },
    phoneNumberInput: {
        width:'100%',
        marginVertical:10,
        
       
    },    
    buttonConatainer:{
        width:'100%',
        marginVertical:10
    }
})

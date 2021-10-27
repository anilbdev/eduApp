import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableHighlight } from 'react-native'
import { Button,InputDetail } from '.'

export default class Message extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }


    render() {
        const { messageHeading, messageText, messagePhoneNumber } = this.props.content
        return (
            <View style={styles.container}>
                <View style={styles.phoneNumberInput}>                   
                    <InputDetail/>
                </View>
                <View style={styles.buttonConatainer}>
                    <Button />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        alignItems: 'center',
        width: '75%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    phoneNumberInput: {
        width:'100%',
        marginVertical:10,
        borderWidth:4
       
    },    
    buttonConatainer:{
        width:'100%',
        marginVertical:10
    }
})

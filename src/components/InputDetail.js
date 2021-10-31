import React, { Component } from 'react'
import { Text, StyleSheet, View,TextInput } from 'react-native'

export default class InputDetail extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {content,handlePhoneNumber} =this.props
        return (
            <View style={styles.container}>
                <TextInput
                    value='+91'
                    style={styles.phoneCountryCode} />
                <TextInput 
                value={content.phoneNunmber}
                onChangeText={(text)=>handlePhoneNumber(text)}
                style={styles.phoneNunmber} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
    },
    phoneCountryCode: {
        backgroundColor: '#333634',
        color: 'white',
        borderRadius: 14,
        width: 50,
        marginLeft: 20,
        marginRight: 5,
        fontSize: 18,
        textAlign: 'center'
    },
    phoneNunmber: {
        backgroundColor: '#333634',
        color: 'white',
        flex: 1,
        fontSize: 18,
        
        borderRadius: 14,
        marginRight: 20
    },
})

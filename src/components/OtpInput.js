import React, { Component } from 'react'
import { Text, StyleSheet, View,TextInput } from 'react-native'


export default class OtpInput extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.phoneNunmber} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'
    
    },
    phoneNunmber: {
        backgroundColor: '#333634',
        color: 'white',
        width:'65%',             
        fontSize: 18,
        borderRadius: 14,
        marginRight: 20
    }
})

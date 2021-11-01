import React, { Component } from 'react'
import { Text, StyleSheet, View,TextInput } from 'react-native'


export default class OtpInput extends Component {
    constructor(props){
        super(props)
        

    }
    render() {
        const {placeHolderInput} = this.props
        return (
            <View style={styles.container}>
                <TextInput 
                placeholder={placeHolderInput}
                placeholderTextColor='#76877a'
                style={styles.phoneNunmber} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        
        justifyContent:'center',
        alignItems:'center',
       
    
    },
    phoneNunmber: {
        backgroundColor: '#333634',
        color: 'white',
        width:'85%',             
        fontSize: 18,
        borderRadius: 14,
        paddingLeft: 15
        
    }
})

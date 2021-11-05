import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { SquareButton, ItemButton } from '../../index'
//component//
export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <SquareButton />
                    <Image
                    style={{height:45,width:'50%',marginLeft:5,resizeMode:'contain'}}
                    source={require('../../../assets/logo.png')}/>
                </View>
                <View style={styles.buttonStyle}>
                    <ItemButton/>
                    </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        padding:5,
        flexDirection: 'row',
        
    },
    logoContainer: {
        flexDirection: 'row',
       
    },
    buttonStyle:{
        width:150,
       
    }
})

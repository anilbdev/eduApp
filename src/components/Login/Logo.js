import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
export default class Logo extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { roundLogo } = this.props.roundLogo
        
        if(roundLogo){
            return(
                <View style={styles.conatianer}>
                <Image style={styles.logoImage}
                    source={require('../../../assets/logo2.png')} />
            </View>
            )
        }else return null
    }
}
const styles = StyleSheet.create({
    conatianer: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 40,
    },
    logoImage: {
        height: 100,
        width: 100
    }
}
)
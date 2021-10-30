import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
export default class Logo extends Component {
    render() {
        return (
            <View style={styles.conatianer}>
                <Image style={styles.logoImage}
                    source={require('../../assets/logo2.png')} />
            </View>
        )
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
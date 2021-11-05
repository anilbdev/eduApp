import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native'
export default class ItemButton extends Component {
    render() {
        return (
            <View style={styles.container} >
                <TouchableHighlight style={styles.itemButtonStyle}>
                    
                    <Text>helloo</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: '35%',
        borderColor:'grey',
        borderWidth:3,
        borderRadius:10
    },
    itemButtonStyle: {
        height: 50,
        flexDirection: 'row',        
        alignItems: "center",
        width: '100%',
        alignSelf: "center",
        padding: 14,
        borderRadius: 10
    }
})

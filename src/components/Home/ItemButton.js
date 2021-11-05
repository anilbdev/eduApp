import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'
export default class ItemButton extends Component {
    render() {
        const isActive=true
        return (
            <View style={styles.container} >
                <TouchableHighlight style={styles.itemButtonStyle}>
                    <View style={{ flexDirection: 'row', alignItems: "center", }}>
                        <Icon
                            name='circle'                            
                            color={isActive ? 'green' : 'black'}
                            size={18}
                        />
                        <Text style={{fontSize:18,marginLeft:10}}>helloo</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: '35%',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10
    },
    itemButtonStyle: {
        height: 40,
        alignItems: "center",
        width: '100%',
        alignSelf: "center",
        padding: 10,
        borderRadius: 10,
        
    }
})

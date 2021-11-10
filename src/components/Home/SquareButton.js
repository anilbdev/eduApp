import React, { Component } from 'react'
import { StyleSheet, View, TouchableHighlight, Image, Text } from 'react-native'
import { Icon } from 'react-native-elements'
//Component//
export default class SquareButton extends Component {
    render() {
        
        return (
            <View style={styles.container} >
                <TouchableHighlight 
                onPress={()=>{this.props.navigation.openDrawer()}}
                style={styles.itemButtonStyle}>
                    <View style={{ flexDirection: 'row', alignItems: "center", }}>
                        <Icon
                            name='widgets'
                            color='green'
                            size={30}
                        />
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10,
        height:40,
        justifyContent:'center'
    },
    itemButtonStyle: {
        alignItems: "center",
        width: '100%',
        alignSelf: "center",
        padding: 5,
        borderRadius: 10,
    }
})

import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class ContactUs extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const { content,handleButtonPress } = this.props
        return (
            <View>
                {content.contactUs ? <Text>Contact Us</Text> : <Text></Text>}
            </View>
        )
        
    }
}

const styles = StyleSheet.create({})

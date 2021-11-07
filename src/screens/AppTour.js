import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {ImageSlider,Button,navigationStrings} from '../index'

const content={
    buttonName:"Finish"
}


export default class AppTour extends Component {
    constructor(props){
        super(props)
    }
    handleButtonPress=()=>{
        this.props.navigation.navigate(navigationStrings.MYDRAWER)
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headingText}>App Tour</Text>
                <ImageSlider/>
                <View style={styles.buttonContainer}>

                </View>
                <Button content={content} handleButtonPress={this.handleButtonPress}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        
    },
    headingText:{
        textAlign:'center',
        fontSize:20,
        color:'green'
    },
    buttonContainer:{
        marginTop:20
    }
})

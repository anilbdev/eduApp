import React, { Component } from 'react'
import { Text, StyleSheet, View} from 'react-native'
import { Picker } from '@react-native-picker/picker'



export default class PickerInput extends Component {
    constructor(props){
        super(props)
        this.state={
            selectedLanguage:''
        }
    }
    render() {
        return (
            <View>
               <Picker
               selectedValue={this.state.selectedLanguage}
               onValueChange={(itemValue,itemIndex)=>{
                   this.setState({
                       selectedLanguage:itemValue
                   })
               }}
               >
                   <Picker.Item label="Anil" value="Its value" />
                   <Picker.Item label="Bhasi" value="My second name" />
               </Picker>
            </View>
        )
    }
}

const styles = StyleSheet.create({})

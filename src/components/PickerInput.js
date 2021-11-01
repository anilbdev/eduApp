import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
export default class PickerInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedItem: '',
        }
    }
    render() {
        const {data} =this.props
        return (
            <View style={styles.container}>
                <View style={styles.pickerContainer}>
                    <Picker style={styles.pickerStyle}
                        dropdownIconColor='#76877a'
                        selectedValue={this.state.selectedItem}
                        onValueChange={(itemValue, itemIndex) => {
                            this.setState({
                                selectedLanguage: itemValue
                            })
                        }}
                    >
                        <Picker.Item label={data} value="0" />
                        <Picker.Item label="Anil" value="Its value" />
                        <Picker.Item label="Bhasi" value="My second name" />
                    </Picker>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    pickerContainer: {
        borderRadius: 14,
        backgroundColor: '#333634',
        width: '85%',
    }
    ,
    pickerStyle: {
        color: '#76877a',
        fontSize: 18,
        paddingLeft: 15,
    }
})

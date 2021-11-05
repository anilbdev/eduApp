import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
export default class SelectClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedItem: '',
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.pickerContainer}>
                    <Text style={{ color: '#76877a', fontSize: 18,paddingLeft:15,paddingTop:5 }}>Class</Text>
                    <Picker style={styles.pickerStyle}
                        dropdownIconColor='#76877a'                        
                        selectedValue={this.state.selectedItem}
                        onValueChange={(itemValue, itemIndex) => {
                            this.setState({
                                selectedItem: itemValue
                            })
                        }}
                    >
                        {/* act as place holder  */}
                        <Picker.Item label="Plus two Science" value="science" />
                        <Picker.Item label="Plus two Biology" value="Biology" />
                        <Picker.Item label="Plus two Maths" value="Maths" />
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
        backgroundColor: '#002333',
        width: '85%',
        
    }
    ,
    pickerStyle: {
        color: '#76877a',
        fontSize: 18,
        paddingLeft: 15,
      
    }
})

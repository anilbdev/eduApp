import React, { useState, useRef } from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    StatusBar,
    TouchableOpacity,
    Text
} from 'react-native'
import PhoneInput from "react-native-phone-number-input";
import { Colors } from "react-native/Libraries/NewAppScreen"

const Test = () => {
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef<PhoneInput>(null);
    return (
        <View>
            <PhoneInput
            
            defaultValue={value}
            defaultCode=""
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withDarkTheme
            withShadow
            autoFocus
          />
          <TouchableOpacity
            style={styles.button}            
          >
            <Text style={{color:'#fff',fontSize:18}}>Continue</Text>
          </TouchableOpacity>
        </View>
    )
}

export default Test

const styles = StyleSheet.create({
    button:{
        backgroundColor:'green',
        alignItems:"center",
        marginHorizontal:20,
        padding:14,
        borderRadius:10
    }
})

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
    const phoneInput = useRef < PhoneInput > (null);
    return (
        <View>
            <PhoneInput
                value='hello'
                defaultCode=""
                layout="second"
                placeholder='type here'
                onChangeText={(text) => {
                    setValue(text);
                }}
                onChangeFormattedText={(text) => {
                    setFormattedValue(text);
                }}
                withDarkTheme
                withShadow
                autoFocus={true}
                containerStyle={styles.phoneInput}
                textContainerStyle={styles.textInput}
                countryPickerButtonStyle={styles.codeText}
            />
            <TouchableOpacity
                style={styles.button}
            >
                <Text style={{ color: '#fff', fontSize: 18 }}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Test

const styles = StyleSheet.create({
    phoneInput: {
        backgroundColor: 'grey',
        borderWidth: 5,
        borderColor: 'blue',
        marginHorizontal: 20,
        width: '80%',
        alignSelf: "center",
        padding: 0,       
        borderRadius: 10,
        height: 65

    },
    textInput: {
        // backgroundColor: 'orange',
        borderWidth: 3,
        margin: 0,
        padding: 10,
        marginLeft: 10,
        borderRadius: 10,
        color:'#000'

    },
    button: {
        backgroundColor: 'green',
        alignItems: "center",
        width: '80%',
        alignSelf: "center",
        padding: 14,
        borderRadius: 10,

    },
    codeText: {
        backgroundColor: 'orange',
        borderWidth: 3,
        margin: 0,
        padding: 0,
        borderRadius: 10,
    }
})

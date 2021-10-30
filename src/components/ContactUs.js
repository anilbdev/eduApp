import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
export default class ContactUs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timer: 30
        }
    }
    componentDidMount() {
        this.interval = setInterval(
            () => this.setState((prevState) => ({ timer: prevState.timer - 1 })),
            1000
        );
    }
    componentDidUpdate() {
        if (this.state.timer === 0) {
            clearInterval(this.interval);
        }
    }
    render() {
        const { content, handleButtonPress } = this.props
        return (
            <View>
                {content.contactUs ? <View style={styles.conatiner}>
                    <Text style={styles.timerText}>Resend otp after {this.state.timer}</Text>
                    <Text style={styles.contactUsText}>Contact Us</Text>
                </View> : <Text></Text>}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    conatiner: {
        borderWidth: 3,
        justifyContent: 'space-between',
        alignItems:'center',
        
        
    },
    timerText:{
        fontSize:10,
        marginBottom:10
    },
    contactUsText:{
        color:'green',
        fontSize:20
    }
})

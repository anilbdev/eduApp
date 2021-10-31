import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Icon } from 'react-native-elements'
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
                    <View style={{flexDirection:'row'}}>
                        <Icon
                            name='call'
                            color='green'
                            size={20}
                        />
                        <Text style={styles.contactUsText}>Contact Us</Text>
                    </View>
                </View> :
                    <Text></Text>}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    conatiner: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    timerText: {
        fontSize: 10,
        marginBottom: 10
    },
    contactUsText: {
        color: 'green',
        fontSize: 20,
        paddingLeft:10,
    }
})

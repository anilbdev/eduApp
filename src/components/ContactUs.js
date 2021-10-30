import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
export default class ContactUs extends Component {
    constructor(props) {
        super(props)
        this.state={
            timer:3
        }
    }

    componentDidMount(){
        this.interval = setInterval(
          () => this.setState((prevState)=> ({ timer: prevState.timer - 1 })),
          1000
        );
      }
    
      componentDidUpdate(){
        if(this.state.timer === 0){ 
          console.log("-------------------timer count down is leaking")
          clearInterval(this.interval);
          
        }
      }
    
     
    render() {
      
        const { content, handleButtonPress } = this.props
        return (
            <View>
                {content.contactUs ? <View style={styles.conatiner}>
                    <Text>Resend otp after {this.state.timer}</Text>
                    <Text>Contact vsvxvxUs</Text>
                </View> : <Text></Text>}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    conatiner: {
        borderWidth: 3,
        justifyContent: 'space-between'
    }
})

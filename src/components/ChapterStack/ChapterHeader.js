import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableHighlight } from 'react-native'
import { Icon } from 'react-native-elements'

export default class ChapterHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headingConatiner}>
                    <View style={styles.backButtonContainer}>
                        <TouchableHighlight
                            onPress={() => { this.props.navigation.goBack() }}
                            style={{ borderWidth: 1, borderColor: '#fff', borderRadius: 10, padding: 8 }}>
                            <Icon
                                color='green'
                                size={30}
                                name='chevron-left'
                            />
                        </TouchableHighlight>
                    </View>
                    <View style={styles.headingTextContainer}>
                    <Text style={{fontSize:28,color:'#fff',paddingLeft:15}}>Biology</Text>
                    </View>
                    
                </View>
                <View style={styles.descContainer}>
                    <Text>Heading</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'green'
    },
    headingConatiner: {
        flexDirection:'row'
    },
    backButtonContainer: {
        flexDirection: 'row',
        marginHorizontal: 30,
        marginTop: 15,
        borderWidth:3
    },
    headingTextContainer:{
        borderWidth:2,
        justifyContent:'center',
        marginTop: 15,
        
    },
    descContainer: {},


})

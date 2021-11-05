import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
//component//
export default class RecentCourse extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.imageStyle}
                    source={{ uri: 'https://images.pexels.com/photos/9025296/pexels-photo-9025296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' }}
                >
                    <View style={styles.imageTextContainer}>
                        <Icon
                            name='circle'
                            style={{color:'white'}}
                            size={25}
                        />
                        <Text style={styles.imageText}>Hello</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
    },
    imageStyle: {
        height: 200,
        width: '100%',
        justifyContent: 'flex-end'
    },
    imageTextContainer: {
        flexDirection: 'row',
        margin: 15,
        fontSize: 25
    },
    imageText: {
        fontSize: 25,
        marginLeft: 10,
        color: 'white'
    }
})

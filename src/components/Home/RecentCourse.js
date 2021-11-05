import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
//component//
export default class RecentCourse extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: 'https://images.pexels.com/photos/9025296/pexels-photo-9025296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' }}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
    },
    imageStyle: {
        height: 200,
        width: '100%'
    }
})

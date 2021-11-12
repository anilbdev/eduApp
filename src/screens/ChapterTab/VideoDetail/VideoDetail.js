import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
export default class VideoDetail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.videoSection}>
                    <Text>Content</Text>
                </View>
                <View style={styles.contactSection}>
                    <Text>Conatct</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    videoSection: {
        borderWidth: 2
    },
    contactSection: {
        borderWidth: 2
    }
})

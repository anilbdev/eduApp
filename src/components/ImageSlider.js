import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native'

const images = [
    'https://images.pexels.com/photos/861126/pexels-photo-861126.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/815653/pexels-photo-815653.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/947644/pexels-photo-947644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/2261480/pexels-photo-2261480.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
]

export default class ImageSlider extends Component {
    render() {
        return (
            <View style={styles.imageContainer}>
                <ScrollView>
                    {
                        images.map((image, index) => (
                            <Image
                                key={index}
                                source={{ uri: image }}
                                style={styles.imageStyle}
                            />
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imageStyle: {
        width: '100%',
        height: 300,
        resizeMode: 'contain'
    },
    imageContainer: {
        marginTop: 10
    }
})

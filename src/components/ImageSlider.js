import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
const screenHeight =Dimensions.get('window').height
const height = screenHeight*.8
const images = [
    'https://images.pexels.com/photos/861126/pexels-photo-861126.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/815653/pexels-photo-815653.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/947644/pexels-photo-947644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/2261480/pexels-photo-2261480.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
]

export default class ImageSlider extends Component {
    state = {
        active: 0
    }
    handleChange=({nativeEvent})=>{
       const slide =Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width)
       if(slide != this.state.active){
           this.setState({
               active:slide
           })
       }
    }
    render() {
        return (
            <View style={styles.imageContainer}>
                <ScrollView
                    onScroll={this.handleChange}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollViewStyle} >
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
                <View style={styles.paginationDotContainer}>
                    {
                        images.map((i, k) =>
                            <Text key={k} style={k==this.state.active ? styles.paginationDotActive : styles.paginationDot}>⬤</Text>
                        )
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imageStyle: {
        height,
        width,
        resizeMode: 'cover'
    },
    imageContainer: {
        marginTop: 10
    },
    scrollViewStyle: {
        height,
        width
    },
    paginationDotContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    },
    paginationDot: {
        color: '#888',
        margin: 3,
        fontSize:20
    },
    paginationDotActive:{
        color:'#fff',
        margin:3,
        fontSize:20
        
    }

})

import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { Avatar } from 'react-native-elements';

export default class Carousal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            buttonName: 'Finish',
            carouselItems: [
                {
                    title: "Item 1",
                    text: "Text 1",
                    url:'#'
                },
                {
                    title: "Item 2",
                    text: "Text 2",
                    url:'#'
                },
                {
                    title: "Item 3",
                    text: "Text 3",
                    url:'#'
                },
                {
                    title: "Item 4",
                    text: "Text 4",
                    url:'#'
                },
                {
                    title: "Item 5",
                    text: "Text 5",
                    url:'#'
                },
            ]
        }
    }
    _renderItem({ item, index }) {
        return (
            <View style={styles.itemContainer}>
                <View style={styles.itemHeaderImage}>
                    <Avatar
                        rounded
                        size={120}
                        source={{uri:item.url}}
                    />
                </View>
                <View style={styles.itemBody}>
                    <Text>{item.text}</Text>
                </View>
                <View style={styles.itemButton}>
                    <Text>{item.title}</Text>
                </View>
            </View>
        )
    }
    render() {
        const content = {
            buttonName: 'Finish'
        }
        return (
            <View>
                <View style={styles.container}>
                    <Carousel
                        layout={"default"}
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}
                        sliderWidth={350}
                        itemWidth={300}
                        renderItem={this._renderItem}
                        onSnapToItem={index => this.setState({ activeIndex: index })} />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        paddingTop: 20
    },
    itemContainer: {
        backgroundColor: '#bfa45a',
        borderRadius: 15,
        height: '90%',
    },
    itemHeaderImage: {
        
        borderWidth: 3
    },
    itemBody: {
        borderWidth: 2
    },
    itemButton: {
        borderWidth: 3
    }
})

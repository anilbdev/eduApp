import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
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
                },
                {
                    title: "Item 2",
                    text: "Text 2",
                },
                {
                    title: "Item 3",
                    text: "Text 3",
                },
                {
                    title: "Item 4",
                    text: "Text 4",
                },
                {
                    title: "Item 5",
                    text: "Text 5",
                },
            ]
        }
    }
    _renderItem({ item, index }) {
        return (
            <View style={styles.itemContainer}>
                <Text style={{ fontSize: 30 }}>{item.title}</Text>
                <Text>{item.text}</Text>
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
        padding: 0,
        marginLeft: 0,
        marginRight: 0,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

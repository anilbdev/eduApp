import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { Avatar } from 'react-native-elements';
import{Button} from '../../index'

export default class Carousal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            buttonName: 'Watch Now',
            carouselItems: [
                {
                    title: "Item 1",
                    text: "Displays an icon as the main content of the Avatar. Cannot be used alongside title. When used with the source prop it will be used as the placeholder.",
                    url: '#',
                    buttonName:'Watch Now'
        
                },
                {
                    title: "Item 2",
                    text: "Displays an icon as the main content of the Avatar. Cannot be used alongside title. When used with the source prop it will be used as the placeholder.",
                    url: '#',
                    buttonName:'Watch Now'
        
                },
                {
                    title: "Item 3",
                    text: "Displays an icon as the main content of the Avatar. Cannot be used alongside title. When used with the source prop it will be used as the placeholder.",
                    url: '#',
                    buttonName:'Watch Now'
        
                },
                {
                    title: "Item 4",
                    text: "Displays an icon as the main content of the Avatar. Cannot be used alongside title. When used with the source prop it will be used as the placeholder.",
                    url: '#',
                    buttonName:'Watch Now'
        
                },
                {
                    title: "Item 5",
                    text: "Displays an icon as the main content of the Avatar. Cannot be used alongside title. When used with the source prop it will be used as the placeholder.",
                    url: '#',
                    buttonName:'Watch Now'
        
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
                        source={{ uri: item.url }}
                    />
                </View>
                <View style={styles.itemBody}>
                    <Text style={{fontSize:20,color:'#fff',margin:10}}>{item.title}</Text>
                    <Text style={{color:'#99a7ad', marginLeft:10}}>{item.text}</Text>
                </View>
                <View style={styles.itemButton}>
                    <Button content={item} handleButtonPress={null}/>
                    
                </View>
            </View>
        )
    }
    render() {
        
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
        
        paddingTop: 20
    },
    itemContainer: {
        backgroundColor: '#002333',
        borderRadius: 15,
        // height: '90%',
    },
    itemHeaderImage: {
        paddingLeft: 30,
        paddingVertical: 20,
        
        
        
    },
    itemBody: {
        
        padding:10
        
    },
    itemButton: {
        
        marginVertical:25
    }
})

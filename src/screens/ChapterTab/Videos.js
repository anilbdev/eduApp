import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Image, TouchableHighlight } from 'react-native'
import { Icon } from 'react-native-elements'
import {
    navigationStrings,
} from '../../index'
const data = [{
    id: 1,
    title: 'Chapter 1',
    part: 2,
    hour: 3,
    imageUrl: 'https://images.pexels.com/photos/9577102/pexels-photo-9577102.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
},
{
    id: 2,
    title: 'Chapter 2',
    part: 2,
    hour: 2,
    imageUrl: 'https://images.pexels.com/photos/10013232/pexels-photo-10013232.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
},
{
    id: 3,
    title: 'Chapter 3',
    part: 3,
    hour: 5,
    imageUrl: 'https://images.pexels.com/photos/9734976/pexels-photo-9734976.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
},
{
    id: 4,
    title: 'Chapter 4',
    part: 8,
    hour: 8,
    imageUrl: 'https://images.pexels.com/photos/6739402/pexels-photo-6739402.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
},
{
    id: 5,
    title: 'Chapter 5',
    part: 5,
    hour: 6,
    imageUrl: 'https://images.pexels.com/photos/8090820/pexels-photo-8090820.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
},
{
    id: 6,
    title: 'Chapter 6',
    part: 4,
    hour: 7,
    imageUrl: 'https://images.pexels.com/photos/9775676/pexels-photo-9775676.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
},
{
    id: 7,
    title: 'Chapter 7',
    part: 4,
    hour: 7,
    imageUrl: 'https://images.pexels.com/photos/8192969/pexels-photo-8192969.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
},
{
    id: 8,
    title: 'Chapter 8',
    part: 4,
    hour: 7,
    imageUrl: 'https://images.pexels.com/photos/10012587/pexels-photo-10012587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
}
]
export default class Videos extends Component {
    itemClick = (item) => {
        if (item.id == 1) {
            return this.props.navigation.navigate(navigationStrings.VIDEO_DETAIL)
        } else {
            return alert('Yet to update')
        }
    }
    renderItem = ({ item }) => (
        <TouchableHighlight
        style={styles.cardContainer}
        onPress={()=>this.itemClick(item)}
        >
            <View >
                <View style={styles.cardImageContainer}>
                    <Image
                        source={{ uri: item.imageUrl }}
                        style={styles.cardImage}
                    />
                </View>
                <View style={styles.cardDescContainer}>
                    <Text style={{ fontSize: 25, color: '#000', marginBottom: 5 }} >{item.title}</Text>
                    <View style={styles.subjectDetailContainer} >
                        <View style={styles.chapterSummary}>
                            <Icon
                                color='#9f9f9f'
                                size={17}
                                name='radio-button-checked'
                            />
                            <Text style={{ fontSize: 13, marginLeft: 5, color: '#9f9f9f' }} >{item.part} Chapters</Text>
                        </View>
                        <View style={styles.hourSummary}>
                            <Icon
                                color='#9f9f9f'
                                size={17}
                                name='radio-button-checked'
                            />
                            <Text style={{ fontSize: 13, marginLeft: 5, color: '#9f9f9f' }} >{item.hour} Hours</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    )
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    cardContainer: {
        flex: 1,
        marginBottom: 30,
        marginTop: 25,
        marginHorizontal: 20,
        padding: 10,
        backgroundColor: '#fff',
        shadowColor: "#000000",
        elevation: 5,
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        },
        borderRadius: 10
    },
    cardImageContainer: {
        alignItems: 'center'
    },
    cardImage: {
        width: '100%',
        height: 150,
        resizeMode: 'cover'
    },
    cardDescContainer: {
    },
    subjectDetailContainer: {
        flexDirection: 'row',
    },
    chapterSummary: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    hourSummary: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15
    },
})

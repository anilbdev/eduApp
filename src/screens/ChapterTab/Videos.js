import React, { Component } from 'react'
import { Text, StyleSheet, View,FlatList } from 'react-native'

const data = [{
    id: 1,
    title: 'Chapter 1',
    part: 2,
    hour: 3
},
{
    id: 2,
    title: 'Chapter 2',
    part: 2,
    hour: 2
},
{
    id: 3,
    title: 'Chapter 3',
    part: 3,
    hour: 5
},
{
    id: 4,
    title: 'Chapter 4',
    part: 8,
    hour: 8
},
{
    id: 5,
    title: 'Chapter 5',
    part: 5,
    hour: 6
},
{
    id: 6,
    title: 'Chapter 6',
    part: 4,
    hour: 7
},
{
    id: 7,
    title: 'Chapter 7',
    part: 4,
    hour: 7
},
{
    id: 8,
    title: 'Chapter 8',
    part: 4,
    hour: 7
}
]

const renderItem=({item}) => (
    <View style={styles.cardContainer}>
           <Text>{item.title}</Text>
           <Text>{item.part}</Text>
           <Text>{item.title}</Text>
    </View>
 
    
)
export default class Videos extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                data={data}
                keyExtractor={(item)=>item.id}
                renderItem={renderItem}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        borderWidth:3
    },
})

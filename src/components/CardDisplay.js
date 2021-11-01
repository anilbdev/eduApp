import React, { Component } from 'react'
import { Text, StyleSheet, View,Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default class CardDisplay extends Component {
    render() {
        const users = [
            {
               name: 'brynn',
               avatar: 'https://picsum.photos/200/300'
            }
            
           ]
        return (
            <View>
                <Card>
  <Card.Title>CARD WITH DIVIDER</Card.Title>
  <Card.Divider/>
  {
    users.map((u, i) => {
      return (
        <View key={i} style={styles.user}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: u.avatar }}
          />
          <Text style={styles.name}>{u.name}</Text>
        </View>
      );
    })
  }
</Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  image:{
    borderWidth:3,
    width:'80%',
    height:100
  }
})

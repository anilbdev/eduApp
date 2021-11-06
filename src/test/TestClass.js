import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground, FlatList, Alert, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
const data = [
  { id: '1', url: 'https://images.pexels.com/photos/9025296/pexels-photo-9025296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
  { id: '2', url: 'https://images.pexels.com/photos/9651391/pexels-photo-9651391.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' },
  { id: '3', url: 'https://images.pexels.com/photos/3750270/pexels-photo-3750270.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
  { id: '4', url: 'https://images.pexels.com/photos/3989737/pexels-photo-3989737.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
  { id: '5', url: 'https://images.pexels.com/photos/70741/cereals-field-ripe-poppy-70741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
]
renderSeparator = () => {
  return (
    <View
      style={{
        width: 50,
        backgroundColor: "#orange",
      }}
    />
  );
};
renderItem = ({ item }) => {
  console.log(item.url);
  return (
    <View style={styles.imageContainer}>
      <ImageBackground
        style={styles.imageStyle}
        source={{ uri: item.url }} >
        <View style={styles.imageTextContainer}>
          <Icon
            name='circle'
            style={{ color: 'white' }}
            size={25}
          />
          <Text style={styles.imageText}>Hello</Text>
        </View>
      </ImageBackground>
    </View>
  )
}
export default class RecentCourse extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headingText}>Recent Course</Text>
        <FlatList
          horizontal
          data={data}
          renderItem={renderItem}
          ItemSeparatorComponent={renderSeparator}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
  },
  headingText:{
    margin:2
  },
  imageContainer: {
  },
  imageStyle: {
    height: 150,
    width: 200,
    justifyContent: 'flex-end',
  },
  imageTextContainer: {
    flexDirection: 'row',
    margin: 15,
    fontSize: 25
  },
  imageText: {
    fontSize: 25,
    marginLeft: 10,
    color: 'white'
  }
})

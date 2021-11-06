import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import { Icon } from 'react-native-elements'
export default class TestClass extends Component {
  render() {
    return (
      <View>
        <Icon
          name='play-circle-outline' />
      </View>
    )
  }
}

const styles = StyleSheet.create({})

import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import {
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer'

export default class DrawerContent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.topButton}>
                    <Text>Top Button</Text>
                </View>
                <DrawerContentScrollView {...this.props} style={styles.drawerScrollView}>
                    <View style={styles.profileContainer}>
                        <Text>Profile section</Text>
                    </View>
                    <View style={styles.mainContent}>
                        <Text>NAvigation section</Text>
                    </View>

                </DrawerContentScrollView>
                <View style={styles.contactButton}>
                    <Text>Button-contact</Text>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        borderWidth: 3
    },
    drawerScrollView: {
        borderWidth: 5
    },
    topButton:{
        borderColor:'green',
        borderWidth:4
    },
    profileContainer:{
        borderWidth:5
    },
    mainContent:{
        borderWidth:4
    },
    contactButton: {
        borderColor: 'red'
    }
})

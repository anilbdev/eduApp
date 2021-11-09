import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { Avatar } from 'react-native-elements';

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
                        <View style={styles.profileImageConatiner}>
                            <Avatar
                                size={100}
                                rounded
                                source={{
                                    uri:
                                        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                                }}
                            />
                        </View>
                        <View style={styles.profileDetail}>
                            <Text style={{ color: '#ffffff' }}>Name</Text>
                            <Text
                                style={{
                                    color: '#264553',
                                    fontSize: 15
                                }}
                            >Details</Text>
                        </View>
                        <View style={styles.profileArrow}>
                            <Icon
                                color='green'
                                name='navigate-next'
                            />
                        </View>
                    </View>
                    <View style={styles.mainContent}>
                        <View style={styles.menuContainer}>
                            <Icon
                                size={40}
                                color='green'
                                solid

                                name='check-box-outline-blank'
                            />
                            <Text style={styles.menuText}>Exam Corner</Text>
                        </View>
                        <View style={styles.menuContainer}>
                            <Icon
                                size={40}
                                color='green'
                                solid

                                name='check-box-outline-blank'
                            />
                            <Text style={styles.menuText}>Subscriptions</Text>
                        </View>
                        <View style={styles.menuContainer}>
                            <Icon
                                size={40}
                                color='green'
                                solid

                                name='check-box-outline-blank'
                            />
                            <Text style={styles.menuText}>Analytics</Text>
                        </View>
                        <View style={styles.menuContainer}>
                            <Icon
                                size={40}
                                color='green'
                                solid

                                name='check-box-outline-blank'
                            />
                            <Text style={styles.menuText}>Downloads</Text>
                        </View>
                        <View style={styles.menuContainer}>
                            <Icon
                                size={40}
                                color='green'
                                solid

                                name='check-box-outline-blank'
                            />
                            <Text style={styles.menuText}>Notifications</Text>
                        </View>
                        <View style={styles.menuContainer}>
                            <Icon
                                size={40}
                                color='green'
                                solid

                                name='check-box-outline-blank'
                            />
                            <Text style={styles.menuText}>Refferals</Text>
                        </View>
                        <View style={styles.menuContainer}>
                            <Icon
                                size={40}
                                color='green'
                                solid

                                name='check-box-outline-blank'
                            />
                            <Text style={styles.menuText}>Share App</Text>
                        </View>
                        <View style={styles.menuContainer}>
                            <Icon
                                size={40}
                                color='red'
                                solid

                                name='check-box-outline-blank'
                            />
                            <Text style={styles.menuText,{color:'red'}}>Log Out</Text>
                        </View>
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
        borderWidth: 3,
        backgroundColor: '#002130',

    },
    drawerScrollView: {
        borderWidth: 5
    },
    topButton: {
        borderColor: 'green',
        borderWidth: 4
    },
    profileContainer: {
        height: 100,
        width: '100%',
        flexDirection: 'row',
        padding: 20

    },
    profileImageConatiner: {
        justifyContent: 'center'
    },
    profileDetail: {
        justifyContent: 'center',
        marginLeft: 25,

    },
    profileArrow: {
        justifyContent: 'center',
        marginLeft: 25,

    },
    mainContent: {
        borderWidth: 4
    },
    menuContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5
    },
    menuText: {
        color: '#fff'
    },
    contactButton: {
        borderColor: 'red'
    }
})

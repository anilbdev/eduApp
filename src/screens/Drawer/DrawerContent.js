import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { Avatar, Button } from 'react-native-elements';
import {DrawerContentScrollView} from '@react-navigation/drawer'
import{navigationStrings} from '../../index'


export default class DrawerContent extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <View style={styles.mainContainer}>
                <View style={styles.topButton}>
                    <Icon
                        size={20}
                        color='green'
                        name='close' />
                </View>
                <DrawerContentScrollView style={styles.drawerScrollView}>
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
                                name='check-box-outline-blank'
                            />
                            <Text
                                onPress={() => { this.props.navigation.navigate(navigationStrings.EXAM_CORNER) }}
                                style={styles.menuText}>Exam Corner</Text>
                        </View>
                       
                        <View style={styles.menuContainer}>
                            <Icon
                                size={40}
                                color='green'


                                name='check-box-outline-blank'
                            />
                            <Text 
                            onPress={() => { this.props.navigation.navigate(navigationStrings.SUBSCRIPTION) }}
                            style={styles.menuText}>Subscriptions</Text>
                        </View>
                        <View style={styles.menuContainer}>
                            <Icon
                                size={40}
                                color='green'


                                name='check-box-outline-blank'
                            />
                            <Text 
                            onPress={() => { this.props.navigation.navigate(navigationStrings.ANALYTICS) }}
                            style={styles.menuText}>Analytics</Text>
                        </View>
                        <View style={styles.menuContainer}>
                            <Icon
                                size={40}
                                color='green'


                                name='check-box-outline-blank'
                            />
                            <Text 
                            onPress={() => { this.props.navigation.navigate(navigationStrings.DOWNLOADS) }}
                            style={styles.menuText}>Downloads</Text>
                        </View>
                        <View style={styles.menuContainer}>
                            <Icon
                                size={40}
                                color='green'


                                name='check-box-outline-blank'
                            />
                            <Text 
                            onPress={() => { this.props.navigation.navigate(navigationStrings.NOTIFICATIONS) }}
                            style={styles.menuText}>Notifications</Text>
                        </View>
                        <View style={styles.menuContainer}>
                            <Icon
                                size={40}
                                color='green'


                                name='check-box-outline-blank'
                            />
                            <Text 
                            onPress={() => { this.props.navigation.navigate(navigationStrings.REFERALS) }}
                            style={styles.menuText}>Refferals</Text>
                        </View>
                        <View style={styles.menuContainer}>
                            <Icon
                                size={40}
                                color='green'


                                name='check-box-outline-blank'
                            />
                            <Text 
                            onPress={() => { this.props.navigation.navigate(navigationStrings.SHARE_APP) }}
                            style={styles.menuText}>Share App</Text>
                        </View>
                        <View style={styles.menuContainer}>
                            <Icon
                                size={40}
                                color='red'


                                name='check-box-outline-blank'
                            />
                            <Text 
                            onPress={() => { this.props.navigation.navigate(navigationStrings.LOGOUT) }}
                            style={styles.menuText, { color: 'red' }}>Log Out</Text>
                        </View>
                    </View>

                </DrawerContentScrollView>
                <View style={styles.contactButton}>

                    <Button
                        title="Enquire Now"
                        type="outline"
                        buttonStyle={{
                            borderColor: 'green',
                            borderWidth: 2
                        }}
                        titleStyle={{
                            color: 'green'
                        }}
                    />

                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,

        backgroundColor: '#002130',

    },
    drawerScrollView: {

    },
    topButton: {
        borderColor: '#fff',
        borderWidth: 1,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 25,
        marginTop: 15
    },
    profileContainer: {
        height: 100,
        width: '100%',
        flexDirection: 'row',
        padding: 20,
        marginVertical: 20

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
        paddingLeft: 20,
        paddingRight: 20
    },
    menuContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
        borderBottomColor: '#264553',
        borderBottomWidth: 1,
        paddingBottom: 3
    },
    menuText: {
        color: '#fff'
    },
    contactButton: {

        paddingHorizontal: 30,
        paddingVertical: 15
    }
})

import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TextInput } from 'react-native'
import { Icon, } from 'react-native-elements/dist/icons/Icon'
import IconButton from 'react-native-vector-icons/FontAwesome';
import { Avatar, Button } from 'react-native-elements';
export default class VideoDetail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.videoSection}>
                    <View style={styles.videoSectionVideo}>
                        <Image
                            style={{ width: '100%', height: 200, resizeMode: 'cover' }}
                            source={{ uri: 'https://images.pexels.com/photos/5097165/pexels-photo-5097165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' }}
                        />
                    </View>
                    <View style={styles.videoSectionHeading}>
                        <View style={styles.videoSectionHeadingTitle}>
                            <Text style={{ fontSize: 25 }}>Long Chapter name</Text>
                        </View>
                        <View style={styles.videoSectionHeadingIcon}>
                            <Icon
                                name='file-download'
                                size={35}
                                color='red'
                            />
                            <Text>Download</Text>
                        </View>
                    </View>
                    <View style={styles.videoSectionDesc}>
                        <View style={styles.videoSectionDescLeft}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
                                <Icon
                                    name='navigate-before'
                                />
                                <Text style={{ marginLeft: 5 }} >Previous</Text>
                            </View>
                        </View>
                        <View style={styles.videoSectionDescCenter}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
                                <Icon
                                    name='radio-button-checked'
                                    color='green'
                                />
                                <Text style={{ marginLeft: 5, color: 'green' }} >Part 1</Text>
                            </View>
                        </View>
                        <View style={styles.videoSectionDescRight}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
                                <Text style={{ marginLeft: 5 }} >Next</Text>
                                <Icon
                                    name='keyboard-arrow-right'
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.contactSection}>
                    <View style={styles.contactSectionMessage}>
                        <View>
                            <Text style={{ fontSize: 14 }}>Your simple Question can be asked here {"\n"}  no matter how long</Text>
                        </View>
                        <Avatar
                            rounded
                            size={50}
                            source={{
                                uri:
                                    '#',
                            }}
                        />
                    </View>
                    <View style={styles.contactSectionInput}>
                        <TextInput
                            placeholder='Ask a Question?'
                            placeholderTextColor='#315668'
                        />
                        <Button
                            title="Post"
                            titleStyle={{ color: '#000' }}
                            buttonStyle={{ backgroundColor: '#fff', width: 100 }}
                        />
                    </View>
                    <View style={styles.contactSectionButton}>
                        <Button
                            icon={
                                <IconButton
                                    name="whatsapp"
                                    size={25}
                                    color="green"

                                />
                            }
                            titleStyle={{ padding: 25, color: 'green' }}
                            iconRight
                            title="Chat with teacher"
                            buttonStyle={{
                                backgroundColor: "transparent", borderWidth: 2, borderRadius: 5,
                                borderColor: 'green'
                            }}
                        />
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    videoSection: {
        borderWidth: 2
    },
    contactSection: {
        borderWidth: 2
    },
    videoSectionVideo: {},
    videoSectionHeading: {
        borderWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    videoSectionHeadingTitle: {
        justifyContent: 'center',
    },
    videoSectionHeadingIcon: {},
    videoSectionDesc: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    videoSectionDescLeft: {},
    videoSectionDescCenter: {},
    videoSectionDescRight: {},
    contactSection: {},
    contactSectionMessage: {
        borderWidth: 3,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    contactSectionInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#072d40'
    },
    contactSectionButton: {}
})

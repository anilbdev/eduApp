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
                            <Text style={{ fontSize: 25,color:'#fff' }}>Long Chapter name</Text>
                        </View>
                        <View style={styles.videoSectionHeadingIcon}>
                            <Icon
                                name='file-download'
                                size={35}
                                color='#fff'
                            />
                            <Text style={{color:'#fff'}}>Download</Text>
                        </View>
                    </View>
                    <View style={styles.videoSectionDesc}>
                        <View style={styles.videoSectionDescLeft}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
                                <Icon
                                    name='navigate-before'
                                    color='#fff'
                                />
                                <Text style={{ marginLeft: 5,color:'#fff' }} >Previous</Text>
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
                                <Text style={{ marginLeft: 5,color:'#fff' }} >Next</Text>
                                <Icon
                                    name='keyboard-arrow-right'
                                    color='#fff'
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.contactSection}>
                    <View style={styles.contactSectionMessage}>
                        <View>
                            <Text style={{ fontSize: 14,color:'#fff' }}>Your simple Question can be asked here {"\n"} no matter how long</Text>
                        </View>
                        <Avatar
                            rounded
                            size={50}
                            source={{
                                uri:'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png',
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
        justifyContent: 'space-between',
        backgroundColor:'#00202f'
    },
    videoSection: {
       
    },
    contactSection: {
        
    },
    videoSectionVideo: {},
    videoSectionHeading: {
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical:15,
        paddingHorizontal:10
    },
    videoSectionHeadingTitle: {
        justifyContent: 'center',
    },
    videoSectionHeadingIcon: {},
    videoSectionDesc: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth:1,
        borderTopColor:'#c1cacd',
        borderBottomWidth:1,
        borderBottomColor:'#c1cacd',
        paddingVertical:15
        
    },
    videoSectionDescLeft: {},
    videoSectionDescCenter: {},
    videoSectionDescRight: {},
    contactSection: {},
    contactSectionMessage: {
       
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor:'#000000',
        padding:10,
        margin:10,
        borderRadius:10
    },
    contactSectionInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#072d40',
        padding:10,
        margin:10,
        borderRadius:10
    },
    contactSectionButton: {
        
        margin:10
    }
})

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Login,Home} from '../index'
import navigationStrings from '../constants/navigationStrings';

const Stack = createNativeStackNavigator();



export class Routes extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{headerShown:false}}
                    initialRouteName={navigationStrings.LOGIN}>
                    <Stack.Screen  name={navigationStrings.HOME} component={Home} />
                    <Stack.Screen name={navigationStrings.LOGIN} component={Login} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default Routes



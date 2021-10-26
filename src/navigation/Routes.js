import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Home,Login} from '../screens/index'
import navigationStrings from '../constants/navigationStrings';

const Stack = createNativeStackNavigator();



export class Routes extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{headerShown:false}}
                    initialRouteName={navigationStrings.HOME}>
                    <Stack.Screen  name={navigationStrings.HOME} component={Home} />
                    <Stack.Screen name={navigationStrings.LOGIN} component={Login} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default Routes



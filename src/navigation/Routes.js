import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Login,
    Home,
    navigationStrings, 
    AppTour,
    MyTabs,
    MyDrawer
} from '../index'




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
                    <Stack.Screen name={navigationStrings.APPTOUR} component={AppTour} />
                   
                    <Stack.Screen name={navigationStrings.MYDRAWER} component={MyDrawer} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default Routes



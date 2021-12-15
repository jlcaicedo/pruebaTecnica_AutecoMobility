import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home'
import Details from "../pages/Details"

const Stack = createStackNavigator()

export default function NavigationStack() {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: "",
                    headerTransparent: true,
                }}
            />
            <Stack.Screen
                name="Details"
                component={Details}
                options={{
                    title: "",
                    headerTransparent: true,
                }}
            />
        </Stack.Navigator>
    )
}
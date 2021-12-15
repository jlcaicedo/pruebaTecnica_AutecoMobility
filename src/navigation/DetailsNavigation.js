import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Details from '../pages/Details'

const Stack = createStackNavigator()

export default function DetailsNavigation() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    )
}
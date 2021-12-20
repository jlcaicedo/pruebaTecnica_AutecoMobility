import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Account from '../pages/Account'

const Stack = createStackNavigator()

export default function AccountNavigation() {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Account"
                component={Account}
                options={{
                    title: "Account"
                }}/>
        </Stack.Navigator>
    )
}
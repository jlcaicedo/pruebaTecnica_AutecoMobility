import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Favorites from '../pages/Favorites'
import Details from "../pages/Details"

const Stack = createStackNavigator()

export default function FavoritesNavigation() {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Favorites"
                component={Favorites}
                options={{ title: "Favorites", headerTitleAlign: 'center' }}
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
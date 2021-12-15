import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeNavigation from './HomeNavigation'
import AccountNavigation from "./AccountNavigation"
import FavoritesNavigation from "./FavoritesNavigation"

const Stack = createBottomTabNavigator()

export default function StackNavigation() {

    const icons = ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === 'Home') {
                iconName = focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline'
            } else if (route.name === 'Details') {
                iconName = focused
                    ? 'ios-star'
                    : 'ios-star-outline'
            } else if (route.name === 'Favorites') {
                iconName = focused
                    ? 'ios-heart'
                    : 'ios-heart-outline'
            } else if (route.name === 'Account') {
                iconName = focused
                    ? 'ios-cloud'
                    : 'ios-cloud-outline'
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: '#01b4e4',
        tabBarInactiveTintColor: '#90cea1',
    })

    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={icons}>
            <Stack.Screen name="Home" component={HomeNavigation}/>
            <Stack.Screen name="Favorites" component={FavoritesNavigation} />
            <Stack.Screen name="Account" component={AccountNavigation} />
        </Stack.Navigator>
    )
}
import 'react-native-gesture-handler'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import StackNavigation from "./src/navigation/StackNavigation"
import {AuthProvider} from './src/context/AuthContext'

export default function App() {

    return (
        <NavigationContainer>
            <AuthProvider>
                <StackNavigation/>
            </AuthProvider>
        </NavigationContainer>
    )
}
import React from 'react'
import { SafeAreaView } from 'react-native'
import Styles from "../styles/styles"
import LoginForm from "../components/Authentication/LoginForm"
import UserData from "../components/Authentication/UserData"
import UseAuth from "../hooks/UseAuth";


const Account = () => {
    const { auth } = UseAuth();

    return (
        <SafeAreaView style={Styles.container}>
            {auth
                ? <UserData/>
                : <LoginForm/>
            }
        </SafeAreaView>
    )
}

export default Account
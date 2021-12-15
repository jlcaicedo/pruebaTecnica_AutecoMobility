import React from 'react';
import {Text, View, Button, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Styles from "../styles/styles";

const NoLoggedIn = () => {
    const navigation = useNavigation();

    const login = () => {
        navigation.navigate('Account');
    }

    return (
        <View style={Styles.containerCenter}>
            <Text style={Styles.sectionTitle}>
                You are not logged in.
            </Text>
            <Text style={Styles.sectionTitle}>
                Please sign-in in account to continue and see the Favorites
            </Text>
            <TouchableOpacity style={Styles.button} title="Sign In" onPress={login} >
                <Text style={Styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
        </View>
    );
};

export default NoLoggedIn;
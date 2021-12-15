import React, {useCallback, useState} from 'react';
import {useFocusEffect} from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import {size} from 'lodash';
import UseAuth from "../../hooks/UseAuth";
import ItemMenu from "../../components/ItemMenu";
import {getMovieFavoriteAPI} from '../../utils/addFavorites'
import Styles from "../../styles/styles";


const UserData = () => {
    const {
        auth,
        signOut
    } = UseAuth();
    const [TotalMovies, setTotalMovies] = useState(0);

    useFocusEffect(
        useCallback(() => {
            (async () => {
                try{
                    getMovieFavoriteAPI()
                        .then(response => {
                        setTotalMovies(size(response));
                    })
                } catch (e) {
                    setTotalMovies(0);
                }

            })()
        }, [])
    )
    return (
        <View>
            <View style={Styles.title}>
                <Text style={Styles.sectionSubtitle}>Welcome,</Text>
                <Text style={Styles.sectionSubtitle}>{`${auth.firstName} ${auth.lastName}`}</Text>
            </View>
            <View style={{ paddingVertical: 20 }}>
                <ItemMenu title='Name' content={`${auth.firstName} ${auth.lastName}`}/>
                <ItemMenu title='username' content={auth.username}/>
                <ItemMenu title='Email' content={auth.email}/>
                <ItemMenu title='Favorites Total' content={`${TotalMovies} Favorites`}/>
            </View>
            <TouchableOpacity
                style={Styles.button}
                title='Sign Out'
                onPress={signOut}>
                <Text style={Styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
};

export default UserData;
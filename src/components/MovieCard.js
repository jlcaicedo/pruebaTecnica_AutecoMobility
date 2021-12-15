import React from 'react'
import {View, Image, TouchableWithoutFeedback } from "react-native"
import { useNavigation } from '@react-navigation/native'
import Styles from '../styles/styles'


const MovieCard = (props) => {
    const {movie} = props
    const navigation = useNavigation()

    const goToMovie = () => {
        navigation.navigate('Details', {id: movie.id})
    }
    return (
        <TouchableWithoutFeedback onPress={goToMovie}>
            <View style={Styles.card}>
                <View style={Styles.spacing}>
                    <View style={Styles.bgStyles}>
                        <Image source={{ uri: movie.poster_path }} style={Styles.image} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default MovieCard
import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { addMovieFavoriteAPI, isMovieFavoriteAPI, removeMovieFavoriteAPI } from '../utils/addFavorites'
import Styles from "../styles/styles";


const MoviesFavorites = (props) => {
    const { id } = props
    const [isFavorite, setIsFavorite] = useState(false)
    const [checkedFavorite, setCheckedFavorite] = useState(false)
    const icon = isFavorite ? 'ios-heart' : 'ios-heart-outline'

    useEffect(() => {
        (async () => {
            try{
                const response = await isMovieFavoriteAPI(id)
                setIsFavorite(response)
            } catch (e) {
                setIsFavorite(false)
            }
        })()
    }, [id, checkedFavorite])

    const onCheckedFavorite = () => {
        setCheckedFavorite(prevState => !prevState)
    }


    const addFavorites = async () => {
        try {
            await addMovieFavoriteAPI(id)
            onCheckedFavorite()

        } catch (e) {
            console.log(e)
        }
    }

    const removeFavorites = async () => {
        try {
            await removeMovieFavoriteAPI(id)
            onCheckedFavorite()

        } catch (e) {
            console.log(e)
        }    }

    return (
        <>
            <Ionicons
                name={icon}
                color="#000000"
                size={30}
                style={Styles.iconRight}
                title={'Add to favorites'}
                onPress={isFavorite
                    ? removeFavorites
                    : addFavorites}
            />
        </>
    );
};

export default MoviesFavorites;
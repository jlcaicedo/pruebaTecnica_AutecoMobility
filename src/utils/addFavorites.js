import AsyncStorage from '@react-native-async-storage/async-storage'
import {includes, pull} from 'lodash'
import { API } from '../services/user.json'
const { FAVORITE_STORAGE } = API
export async function getMovieFavoriteAPI() {
    try {
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE)
        return JSON.parse(response || '[]')
    } catch (e) {
        throw e
    }
}

export async function addMovieFavoriteAPI(id) {
    try {
        const favorites = await getMovieFavoriteAPI()
        favorites.push(id)
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites))
    } catch (e) {
        throw e
    }
}

export async function isMovieFavoriteAPI(id) {
    try {
        const response = await getMovieFavoriteAPI()
        return includes(response, id)
    } catch (e) {
        throw e
    }
}

export async function removeMovieFavoriteAPI(id) {
    try {
        const favorites = await getMovieFavoriteAPI()
        const newFavorites = pull(favorites, id)
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites))
    } catch (e) {
        throw e
    }
}
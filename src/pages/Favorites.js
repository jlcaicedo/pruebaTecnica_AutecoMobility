import React, { useState, useCallback } from 'react'
import {SafeAreaView, Text} from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import UseAuth from "../hooks/UseAuth";
import { getMovieFavoriteAPI } from "../utils/addFavorites";
import {getMovieDetailsAPI, getMovieReviewsAPI} from "../utils/getMovies";
import Styles from "../styles/styles"
import MovieList from "../components/MovieList";
import NoLoggedIn from "../components/NoLoggedIn";


const Favorites = () => {
    const { auth } = UseAuth();
    const [movies, setMovies] = useState([])
    const [nextUrl, setNextUrl] = useState(1)

    useFocusEffect(
        useCallback(() => {
            if (auth) {
                (async () => {
                    try {
                        const response = await getMovieFavoriteAPI()
                        const moviesIds = []
                        for await (const id of response) {
                            const getMovieDetails = await getMovieDetailsAPI(id)
                            moviesIds.push(getMovieDetails)
                        }
                        const moviesDetails = moviesIds.map(movieDetails => {
                            const getMovieReviews = getMovieReviewsAPI(movieDetails.id, nextUrl)
                            setNextUrl(prevState => prevState + 1)
                            return {...movieDetails,
                                poster_path: movieDetails.poster_path
                                    ? `https://image.tmdb.org/t/p/w154${movieDetails.poster_path}`
                                    : null,
                                overview: movieDetails.overview,
                                release_date: movieDetails.release_date,
                                vote_average: movieDetails.vote_average,
                                isFavorite: true,
                                reviews: getMovieReviews
                            }
                        })
                        setMovies(moviesDetails)
                    } catch (e) {
                        console.error(e)
                    }
                })()
            }
        }, [auth])
    )

    return !auth
        ? <NoLoggedIn/>
        : (
            <SafeAreaView style={Styles.container}>
                {movies.length > 0
                    ? <MovieList movies={movies} loadMovies={undefined}/>
                    : <Text style={Styles.sectionTitle}>
                        You don't have any favorites yet
                    </Text>
                }
            </SafeAreaView>
    )
}
export default Favorites
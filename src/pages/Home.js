import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { getMoviesAPI } from '../utils/getMovies'
import MovieList from '../components/MovieList'
import Styles from "../styles/styles"


export default function Home() {
    const [movies, setMovies] = useState([])
    const [nextUrl, setNextUrl] = useState(1)
    useEffect(() => {
        (async () => {
            await loadMovies()
        })()
    }, [])


    const loadMovies = async () => {
        try {
            const response = await getMoviesAPI(nextUrl)
            setNextUrl(prevState => prevState + 1)
            const movieTempArray = []
            response.results.forEach(movie => {
                movieTempArray.push({...movie, poster_path: movie.poster_path
                        ? `https://image.tmdb.org/t/p/w154${movie.poster_path}`
                        : null})
                })

            setMovies([...movies, ...movieTempArray])

        } catch (e) {
            console.error(e)
        }
    }



    return (
        <SafeAreaView style={Styles.container}>
            <MovieList movies={movies} loadMovies={loadMovies}/>
        </SafeAreaView>
    )
}


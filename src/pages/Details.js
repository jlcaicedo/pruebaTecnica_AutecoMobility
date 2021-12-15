import React, {useEffect, useState} from 'react'
import {ScrollView} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {getMovieDetailsAPI, getMovieReviewsAPI} from '../utils/getMovies'
import HeaderMovieDetail from '../components/MovieDetails/HeaderMovieDetail'
import BodyMovieDetails from '../components/MovieDetails/BodyMovieDetails'
import MoviesFavorites from "../components/MoviesFavorites";
import UseAuth from '../hooks/UseAuth';
import Styles from "../styles/styles"

const Details = (props) => {
    const {
        navigation,
        route: {params}
    } = props

    const [movie, setMovie] = useState( null )
    const [nextUrl, setNextUrl] = useState(1)
    const { auth } = UseAuth()

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => auth && <MoviesFavorites id={params.id} />,
            headerLeft: () => <Ionicons
                name="ios-arrow-back"
                color="#000000"
                size={30}
                style={Styles.iconLeft}
                title={'Back'}
                onPress={() => navigation.goBack()}
            />
        })
    }, [navigation, params ])

    useEffect(() => {
        (async () => {
            await loadMovie()
        })()
    }, [params])

    const loadMovie = async () => {
        try {
            const getMovieDetails = await getMovieDetailsAPI(params.id)
            const getMovieReviews = await getMovieReviewsAPI(params.id, nextUrl)
            setNextUrl(prevState => prevState + 1)
            const movieTempArray = []
            movieTempArray.push({...getMovieDetails, backdrop_path: getMovieDetails.backdrop_path
                ? `https://image.tmdb.org/t/p/w500/${getMovieDetails.backdrop_path}`
                : null, reviews: getMovieReviews.results})

            setMovie(movieTempArray[0])

        } catch (e) {
            navigation.goBack()
        }
    }
    if (!movie) return null

    return (

        <ScrollView style={Styles.container}>
            <HeaderMovieDetail
                title={movie.original_title}
                release_date={movie.release_date}
                backdrop_path={movie.backdrop_path}
                genres={movie.genres[0].name}
                overview={movie.overview}
                runtime={movie.runtime}
                vote_average={movie.vote_average}
            />
            <BodyMovieDetails
                reviews={movie.reviews}
            />
        </ScrollView>
    )
}

export default Details
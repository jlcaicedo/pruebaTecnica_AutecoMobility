import React from 'react'
import { FlatList, ActivityIndicator } from "react-native"
import MovieCard from './MovieCard'
import Styles from '../styles/styles'


const MovieList = (props) => {

    const {movies, loadMovies} = props

    const loadMore = () => {
        if(loadMovies === undefined) {
            return 1
        }
        loadMovies()
    }

    return (
            <FlatList
                data={movies}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) =><MovieCard movie={item}/>}
                contentContainerStyle={Styles.flatListContentContainer}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
                listFooterComponent={
                    <ActivityIndicator
                        animating={true}
                        size="large"
                        style={Styles.spinner}/>
                }
            />
    )
}

export default MovieList
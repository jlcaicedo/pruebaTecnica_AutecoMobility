import React from 'react'
import {Text, View} from "react-native"
import Styles from "../../styles/styles"
import ReviewsMovieList from "./ReviewsMovieList";

const BodyMovieDetails = (props) => {
    const {reviews} = props

    return (
        <>
            <View style={Styles.container}>
                <Text style={Styles.sectionSubtitle}>Reviews:</Text>
                <ReviewsMovieList reviews={reviews}/>
            </View>
        </>
    )
}

export default BodyMovieDetails
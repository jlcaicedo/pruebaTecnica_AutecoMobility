import React from 'react'
import {Image, SafeAreaView, Text, View} from "react-native"
import Styles from "../../styles/styles"

const HeaderMovieDetail = (props) => {
    const {title, release_date, backdrop_path, genres, overview, runtime, vote_average} = props

    const toHHMMSS = (runtime) => {
        if (runtime !== 0) {
            let num = parseInt(runtime, 10)
            let hours = Math.floor(num / 60)
            let minutes = num - (hours * 60)

            return `- ${hours}h${minutes}m`
        }
        return null
    }

    return (
        <>
            <SafeAreaView style={Styles.sectionContent}>
                <View style={Styles.container}>
                    <Text style={Styles.sectionTitle}>
                        {title}
                    </Text>
                    <View style={Styles.sectionFlex}>
                        <Text style={Styles.sectionSubtitle}>
                            {release_date.substr(0, 4)} - {genres} {toHHMMSS(runtime)}
                        </Text>
                        <Text style={Styles.sectionSubtitle}>
                            RATING: {vote_average}
                        </Text>
                    </View>
                </View>
                <View style={Styles.contentImg}>
                    <Image source={{uri: backdrop_path}} style={Styles.HeaderImage}/>
                </View>
                <View >
                    <Text style={Styles.sectionSubtitle}>Overview:</Text>
                    <Text style={Styles.sectionText}>{overview}</Text>
                </View>
            </SafeAreaView>
        </>
    )
}

export default HeaderMovieDetail;



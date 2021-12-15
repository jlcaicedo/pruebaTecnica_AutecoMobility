import React from 'react';
import {Button, Image, Text, View} from "react-native";
import Styles from "../../styles/styles";
import {map} from "lodash";

const ReviewsMovieList = (props) => {

    const {
        reviews
    } = props;

    if (reviews.length === 0) {
        return (
            <View style={Styles.container}>
                <Text style={Styles.sectionText}>No reviews yet</Text>
            </View>
        )
    } else {
        return (
            <View style={Styles.content}>
                {map(reviews, (review, id) => {

                    const [expanded, setExpanded] = React.useState(false);

                    const {
                        author_details: {
                            name,
                            username,
                            avatar_path
                        },
                        content,
                        created_at,
                    } = review

                    const author = (username) => {
                        if (name.length > 0) {
                            return name
                        }
                        return username
                    }

                    const avatar = (avatar_path) => {

                        if (avatar_path) {
                            return <Image source={{
                                uri: `https://www.gravatar.com/avatar/${
                                    avatar_path.substring(
                                        avatar_path.lastIndexOf('/') + 1,
                                        avatar_path.lastIndexOf('.'))
                                }`
                            }}
                                          style={Styles.gravatar}/>
                        } else {
                            return <Image
                                source={{uri: `https://www.gravatar.com/avatar/00000000000000000000000000000000`}}
                                style={Styles.gravatar}/>
                        }
                    }

                    return (

                        <View key={id} style={{marginBottom: 25}}>
                            <View style={Styles.sectionFlex}>
                                <View>
                                    <Text style={Styles.sectionSubtitle}>{author(username)}</Text>
                                    <Text style={Styles.sectionSubtitle2}>Create: {created_at}</Text>
                                </View>
                                {avatar(avatar_path)}
                            </View>
                            <View>
                                <Text
                                    style={Styles.sectionText}
                                    multiline={expanded}
                                    numberOfLines={expanded ? 100 : 2}
                                    ellipsizeMode={expanded ? 'tail' : 'head'}
                                >
                                    {content}
                                </Text>
                                <Button style={Styles.underline}
                                        title={expanded ? 'Read less' : 'Read more'}
                                        onPress={() => setExpanded(!expanded)}
                                />
                            </View>
                        </View>
                    )
                })
                }
            </View>
        )
    }
}

export default ReviewsMovieList;

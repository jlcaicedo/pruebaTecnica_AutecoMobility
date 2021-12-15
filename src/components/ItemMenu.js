import React from 'react';
import {Text, View} from "react-native";
import Styles from "../styles/styles";

const ItemMenu = (data) => {
    const {title, content} = data
    return (
        <View style={Styles.itemMenu}>
            <Text style={Styles.itemMenuTitle}>{title}:</Text>
            <Text style={Styles.itemMenuContent}>{content}</Text>
        </View>
    )
};

export default ItemMenu;
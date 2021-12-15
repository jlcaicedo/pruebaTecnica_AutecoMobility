import React from 'react'
import {Platform, StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    containerCenter: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    horizontalPadding: {
    },
    sectionContent: {
        marginTop: 80,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#000',
        textAlign: "center",
    },
    sectionFlex: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    sectionFlexItemStart: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    sectionSubtitle : {
        fontSize: 20,
        fontWeight: '600',
        color: '#000',
        marginTop: 10,
        paddingLeft: 5,
    },
    sectionSubtitle2 : {
        fontSize: 16,
        color: '#0f0f0f',
        paddingLeft: 5,

    },
    sectionText : {
        fontSize: 16,
        color: '#000',
        textAlign: "justify",
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 10,
    },
    underline: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        marginHorizontal: 10,
        marginVertical: 5,
        textAlign: 'left'
    },
    flatListContentContainer: {
        paddingHorizontal: 15,
        marginTop: Platform.OS === 'android' ? 30 : 0,
    },
    card: {
        flex: 1,
        height: 245,
    },
    spacing: {
        flex: 1,
        padding: 5,
    },
    bgStyles: {
        backgroundColor: "grey",
    },
    number: {
        position: "absolute",
        right: 10,
        top: 10,
        color: "#fff",
        fontSize: 11,
    },
    title: {
        textAlign: "center",
        color: "#0d253f",
        fontWeight: "bold",
        fontSize: 20,
        paddingTop: 10,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    image: {
        position: "absolute",
        width: 160,
        height: 231,
        borderRadius: 20
    },
    spinner: {
        marginTop: 20,
        marginBottom: Platform.OS === 'android' ? 90 : 60,
    },
    HeaderImage: {
        width: '100%',
        height: 225,
        resizeMode: 'cover',
    },
    contentImg: {
        top: 5,
    },
    gravatar: {
        justifyContent: "center",
        width: 32,
        height: 32,
        borderRadius: 25,
        marginRight: 10,
    },
    iconLeft: {
        marginLeft: 10,
    },
    iconRight: {
        marginRight: 10,
    },
    logoImage: {
        alignItems: 'center',
        paddingBottom: 48,
    },
    input: {
        width: 300,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    button: {
        backgroundColor: "#0d253f",
        paddingVertical: 14,
        paddingHorizontal: 28,
        margin: 14,
        borderRadius: 28,
    },
    buttonText: {
        color: "#90cea1",
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
    },
    error: {
        color: "red",
        fontSize: 12,
        marginTop: 5,
    },
    titleBlock: {
        marginBottom: 30,
    },
    dataContent: {
        marginBottom: 20,
    },
    itemMenu: {
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: "#CFCFCF",
        flexDirection: "row",
        flexWrap: "wrap",

    },
    itemMenuTitle: {
        fontWeight: "bold",
        paddingLeft: 10,
        width: 120,
    },
    itemMenuContent: {
    },
    btnLogout: {
        paddingTop: 20,
    },

})

export default Styles
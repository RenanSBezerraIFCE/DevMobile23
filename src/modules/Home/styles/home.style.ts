import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    container: {
        flex: 1
    },
    Shop: {
        padding: 10
    },
    NavBar: {
        justifyContent: 'space-between',
        flexDirection: "row",
        backgroundColor: '#191970',
        height: 65,
        padding: 10
    },
    NameProduct: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "#191970",
        marginBottom: 20
    },
    Description: {
        fontSize: 18,
        textAlign: 'justify',
        marginTop: 15,
        marginBottom:50
    },
    Price: {
        fontSize: 24,
        width: 200,       
    },
    ImageProduct: {
        width: 395,
        height: 250,
        marginBottom: 5,
        borderRadius: 5,
        display: 'flex'
    },
    ImageProductMini: {
        width: 60,
        height: 40,
        marginBottom: 25,
        borderRadius: 2,
        display: 'flex',
        margin: 10
    },
    ImagesMini: {
        marginTop: '-21%',
        marginLeft: '20%',
        flexDirection: "row",
    },
    Avaliation: {
        width: 30,
        height: 30
    },
    Icon: {
        height: 50,
        width: 50,
        margin: 5
    },
    IconAdd: {
        height: 30,
        width: 30,
        margin: 5
    },
    IconStar: {
        height: 30,
        width: 30,
        margin: 5
    },
    IconStarClicked: {
        height: 30,
        width: 30,
        margin: 10
    },
    optProduct: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: '80%'
    }
})
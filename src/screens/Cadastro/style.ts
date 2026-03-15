import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    textHeader: {
        fontSize: 20,
        textAlign: "center",
        marginTop: 5,
        marginLeft: 30
    },
    containerLogIn:{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    inputLogInU: {
        backgroundColor: "white",
        width: "90%",

        padding: 5,
        justifyContent:"center",
        alignItems: "center",
        flexDirection: "row",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    inputLogInE: {
        backgroundColor: "white",
        width: "90%",
        borderColor:"#00000091",
        borderTopWidth:1,
        padding: 5,
        justifyContent:"center",
        alignItems: "center",
        flexDirection: "row",
    },
    inputLogInS: {
        backgroundColor: "white",
        width: "90%",

        padding: 5,
        justifyContent:"center",
        alignItems: "center",
        flexDirection: "row",
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        borderColor:"#00000091",
        borderTopWidth:1,
    },
    Input: {
        width: "90%",
        padding: 10,
    },
    Button: {
        backgroundColor: "#FBC31E",
        borderRadius: 30,
        width: "90%",
        margin: "auto"
    },
    Letter: {
        color: "white",
        padding: 10,
        margin: "auto",
        fontSize: 20,
        fontWeight:"900"
    },
    link: {
        textAlign: "center",
        fontSize: 16,
    },
    incentivo: {
        fontSize: 15,
        textAlign: "center",
        width: "90%",
        marginLeft: 10,
    }
})
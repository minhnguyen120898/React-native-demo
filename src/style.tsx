import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    tinyIcons: {
        width: 20,
        height: 20
    }
})

export const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: "mediumturquoise"
    },
    banner: {
        height: 300
    },
    copy_right: {
        color: '#ffffff',
        fontSize: 12,
        alignSelf: 'center',
        paddingBottom: 30
    },
    dialog_wrapper: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    dialog: {
        width: "90%",
        backgroundColor: '#ffffff',
        paddingTop: 30,
        paddingRight: 30,
        paddingBottom: 30,
        paddingLeft: 30,
        border: "1px solid mediumturquoise",
        borderRadius: 12,
        shadowColor: "#000000",
        shadowRadius: 12,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 1
    },
    inputCustom: {
    },
    iconLeft: {
        width: 15,
        height: 15,
        position: 'absolute',
        left: 10,
        top: 10
    },
    label: {
        fontSize: 14,
        marginBottom: 7,
        color: "mediumturquoise"
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: "mediumturquoise",
        borderStyle: "solid",
        borderRadius: 4,
        paddingLeft: 30,
        paddingRight: 10,
        color: "black",
        marginBottom: 20,
    },
    forgot_button: {
        color: "mediumturquoise",
        fontSize: 12
    },
    loginBtn: {
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 40,
        backgroundColor: "mediumturquoise",
        padding: 10,
        borderRadius: 10
    },
    loginText: {
        color: "#ffffff",
        fontSize: 14,
        textAlign: "center",
        fontWeight: "700"
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

export const todoStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 32,
        color: "#000",
        width: 150
    },
    dFlex: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    padding: {
        padding: 5,
        marginLeft: 10,
        borderColor: '#333',
        borderRadius: 4,
        borderStyle: 'solid',
        borderWidth: 1,
        textAlign: 'center',
        backgroundColor: '#fff'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 4,
        padding: 10,
        elevation: 2,
        marginRight: 10
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    input: {
        backgroundColor: '#fff',
        width: 200,
        padding: 5,
        paddingLeft: 10
    }
})
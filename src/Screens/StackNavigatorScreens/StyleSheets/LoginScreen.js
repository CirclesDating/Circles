import { StyleSheet} from "react-native";
export default StyleSheet.create({
    background:{
        color: "blue",
        flex : 1,
        alignItems: "center",
        padding : 40,
        backgroundColor: "powderblue"
    },
    mainContent:{
        display: "flex",
        backgroundColor: "lightskyblue",
        flex: 1,
        alignSelf : "stretch",
        borderWidth : 2,
        borderColor : "lightsteelblue",
        borderRadius : 20,
        flexDirection : "column"
    },
    headerArea:{
        flex:1,
        alignItems : "center"
    },
    header :{
        width : "60%",
        backgroundColor : "pink",
        borderRadius : 5,
        alignItems : "center"
    },
    LoginButton : {
        backgroundColor : "blue",
        borderRadius : 10,
        width : "50%",
        height : "50%",
        justifyContent : "center",
        alignItems : "center"
    },
    MakeAccountButton : {
        backgroundColor : "green",
        borderRadius : 10,
        width : "50%",
        height : "50%",
        justifyContent : "center",
        alignItems : "center"
    },
    loginArea:{
        flex:4,
        backgroundColor : "red",
        borderTopWidth : 2,
        alignItems : "center",
        justifyContent : 'flex-end'
    },
    equalRankElementHolder:{
        alignSelf : "stretch",
        flex : 1 ,
        alignItems : "center"
    },
    textInput : {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: "50%"
    }
    
})

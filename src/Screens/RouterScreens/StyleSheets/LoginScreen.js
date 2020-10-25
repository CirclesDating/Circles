import { StyleSheet} from "react-native";
export default StyleSheet.create({
        error: {
            fontFamily : "Cochin",
            color: "#FF0000",
        },
        loginButton: {
          backgroundColor: "#ffcc66",
          width : "50%",
          height: 30,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center"
        },
        loginText: {
            fontFamily : "Cochin",
            fontWeight : "bold",
            fontSize : 20
        },
        loginScreen: {
            backgroundColor: "#FFEB10",
            flex : 1,
            padding : 10
        },
        textInputs: {
            backgroundColor : "#33cccc",
            borderWidth : 1,
            margin : 5,
            padding: 3,
            borderRadius : 10,
            borderColor : "#f5e342",
            width : "60%",
            height : 40
        },
        loginForm: {
            flex : 1,
            alignItems : "center",
            justifyContent : "center",
            borderRadius : 15
        },
        logoHolder : {
            flex : 1
        },
        logo : {
            flex : 1,
            width: "100%"
            }
      });

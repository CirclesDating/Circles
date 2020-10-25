import { StyleSheet} from "react-native";
export default StyleSheet.create({
        error: {
            fontFamily : "Cochin",
            color: "#FF0000",
        },
        registerButton: {
          backgroundColor: "blue",
          width : "50%",
          height: 30,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center"
        },
        registerText: {
            fontFamily : "Cochin",
            fontWeight : "bold",
            fontSize : 20
        },
        registerScreen: {
            backgroundColor: "red",
            flex : 1,
            padding : 15
        },
        textInputs: {
            backgroundColor : "white",
            borderWidth : 1,
            margin : 5,
            borderRadius : 10,
            width : "50%",
            height : "8%"
        },
        registerForm: {
            height : "60%",
            alignItems : "center",
            justifyContent : "center",
            borderWidth : 3,
            borderRadius : 15
        }
      });

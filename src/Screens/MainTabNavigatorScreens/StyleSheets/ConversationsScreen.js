import { StyleSheet} from "react-native";
export default StyleSheet.create({
    container: {
      padding: 15,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    newMatchesList: {
      width: "100%",
      height: "10%",
      borderRadius: 20,
      borderWidth: 1,
      borderColor: "pink",
    }
  });
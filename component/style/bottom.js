import { StyleSheet, Text, View } from "react-native";

const  styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "#eaeaea"
    },
    bottom_body:{
        psotion:'relative'
    },
    bottom: {
        width:'100%',
        backgroundColor:'#ffffff',
        height:'260px',
        // flex:1,
        display:'flex',
        flexGrow: 1,
        flexDirection:'column',
        justifyContent:'space-between'
    }
  });

  export default styles
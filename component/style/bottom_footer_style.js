import { StyleSheet, Text, View } from "react-native";

const  styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "#eaeaea"
    },
  
   footer_main:{    
       display:'flex',
       justifyContent:'space-evenly',
       alignItems:'center',
       flexDirection:'row',
       textAlign:'center',
       margin:20,
       flexWrap:'wrap'
   },
  //  inner:{textAlign:'center',display:'flex',justifyContent:'center',marginRight:10},
   tinyLogo: {
     width: 20,
    height: 20,
    textAlign:'center',    
    margin:10,
    marginLeft:33,
  },
  text:{
    color:'#8D8D8D',
    fontFamily:'roboto',
    weight:400,
    fontSize:11,
    textAlign:'center',
    padding:10,
    // marginLeft:10
  },
  _dots_divider:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    marginTop:10
  },
  _dots:{
    backgroundColor:'#747474',
    width:7,
    height:7,
    borderRadius:30,
    marginRight:8
  },
  _unfill_dots:{
    backgroundColor:'#C4C4C4',
    width:7,
    height:7,
    borderRadius:20,
    // margin:20
  },
  element:{
    width:80,
    marginBottom:10,
  }
  });

  export default styles
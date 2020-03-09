import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  wrapper:{
    flex:1,
  },
  header:{
    color:'grey',
    flex:1,
    justifyContent:'center',alignItems:'center'
  },
  body:{
    flex:2,
    backgroundColor:'#f3f7fa',
    paddingLeft:20,
    paddingTop:30
  },
  logo:{
     height:40,
     width:300,
     marginTop:50
  },
  logowrap:{
    flex:1,
    justifyContent:'center',
  },
  headerTextWrap:{
    flex:1
  },
  headerTextTop:{
    marginTop:60,
    color:'#fff'
  },
  headerTextBottom:{
    marginTop:10,
    color:'#fff',
    fontSize:18
  },
  loginButton:{
    alignItems: 'center',
    backgroundColor: '#0b479d',
    height:40,
    justifyContent:'center'
  }
  
})
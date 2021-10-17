import React from 'react';
import {StyleSheet,Text,View} from 'react-native';

const Card=()=>{

return(
    <View style={styles.card}>
  <View  style={styles.idWrapper}>

  </View>
  <View style={styles.titleWrapper}>

  </View>





    </View>
)


}


const styles=StyleSheet.create({
card:{
    backgroundColor:'#ffffff',
    height:75,
    marginTop:20,
    marginLeft:20,
    marginRight:20,
    borderRadius:10,
    shadowColor:'black',
    shadowOpacity:0.25,
    shadowOffset:{width:0,height:2},
    shadowRadius:8,
    elevation:5,
    flexDirection:'row',

},
idWrapper:{
    borderRadius:10,
    marginLeft:10,
        marginTop:6.5,
      height:60,
      width:100,
      backgroundColor:'#dddd',
},

titleWrapper:{

    borderRadius:10,
    marginLeft:10,
    marginTop:6.5,
      height:60,
      width:223,
      backgroundColor:'#dddd',

},



});

export default Card;
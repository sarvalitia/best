import React from 'react';
import {StyleSheet,Text,View} from 'react-native';

const Header=props=>{

return(
    <View style={styles.header}>
        <Text style={styles.title}>
{props.title}
        </Text>
    </View>
)


}


const styles=StyleSheet.create({
header:{
    backgroundColor:'#2794D5',
    padding:15,
    borderBottomColor:'#ffffff',
    borderBottomWidth:1,
},
title:{
    marginTop:40,
    textAlign:'center',
    fontSize:20,
    color:'#ffffff'
}


});

export default Header;
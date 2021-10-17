import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity } from 'react-native';

const AllMasterMenu=props=>{
    return(
      <View>
        <View style={styles.container}>
        <Text style={styles.head}>All Masters</Text>

        <TouchableOpacity style={styles.button}  onPress={()=>props.navigation.navigate('Cust')}>
            <Text style={styles.butText}>Customer Master</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.butText}>Inventory Master</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.butText}>Project Master</Text>
        </TouchableOpacity>


        </View>
      </View>
    );
}

const styles=StyleSheet.create({
container:{
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#ffffff',
  marginTop:100
},
  button:{
    width:300,
    backgroundColor:'#2794D5',
    borderRadius:30,
    marginVertical:15,
    paddingVertical:13
},
butText:{
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
},
head:{
  fontSize:30
}
})

export default AllMasterMenu;
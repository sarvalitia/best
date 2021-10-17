
import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity } from 'react-native';

const Cust=props=>{
    return(
      <View>
        <View style={styles.container}>
        <Text style={styles.head}>Welcome Admin</Text>

        <TouchableOpacity style={styles.button}  onPress={()=>props.navigation.navigate('AddCust')}>
            <Text style={styles.butText}>Add Customer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}  onPress={()=>props.navigation.navigate('AddCust')}>
            <Text style={styles.butText}>View Clients</Text>
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
export default  Cust;
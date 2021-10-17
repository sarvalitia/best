import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity } from 'react-native';

const AddCust=props=>{
    return(
      <View>
        <View style={styles.container}>
   

        <TouchableOpacity style={styles.button}  onPress={()=>props.navigation.navigate('details')}>
            <Text style={styles.butText}>Enter Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}  onPress={()=>props.navigation.navigate('AddCust')}>
            <Text style={styles.butText}>Enter Shipping Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}  onPress={()=>props.navigation.navigate('AddCust')}>
            <Text style={styles.butText}>Enter A/c Details</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.button}  onPress={()=>props.navigation.navigate('AddCust')}>
            <Text style={styles.butText}>Enter Store Details</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.button}  onPress={()=>props.navigation.navigate('AddCust')}>
            <Text style={styles.butText}>Enter Purchase Details</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.button}  onPress={()=>props.navigation.navigate('AddCust')}>
            <Text style={styles.butText}>Manager Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}  onPress={()=>props.navigation.navigate('AddCust')}>
            <Text style={styles.butText}>Save</Text>
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
},
button1:{
    width:30,
    backgroundColor:'#2794D5',
    borderRadius:3,
    marginVertical:5,
    paddingVertical:3
}
})
export default  AddCust;
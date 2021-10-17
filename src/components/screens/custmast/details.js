import React from 'react';
import { StyleSheet,View,Text,ScrollView,KeyboardAvoidingView ,Image} from 'react-native';
import { Formik } from 'formik';
import { Logs } from 'expo';
import { Directions, TextInput, TouchableOpacity } from 'react-native-gesture-handler';


const Details=p=>{
    return(
        <KeyboardAvoidingView 
        behavior="padding"
     style={{flex:1}}>

 <ScrollView>
     <Formik
     initialValues={{
         email:"",
         password:"",
     }}
     onSubmit={(values)=>{
    console.log(values);
    p.navigation.navigate('Home');

     }}
     >

    {(props)=>(
    <View style={styles.container}>
        
         <View> 
         <TextInput 
         style={styles.input}
         placeholder="Customer Name"
         placeholderTextColor="black"

         onChangeText={props.handleChange("Customer Name")}
         value={props.values.email}
         >
         </TextInput>
       
        
        
         <TextInput 
         style={styles.input}
        
         placeholder="Door no"
         placeholderTextColor="black"
     secureTextEntry={true}
     onChangeText={props.handleChange("Door no")}
         value={props.values.password}

         >
        </TextInput>

        <TextInput 
         style={styles.input}
        
         placeholder="Street:1"
         placeholderTextColor="black"
     secureTextEntry={true}
     onChangeText={props.handleChange('Street:1')}
         value={props.values.password}

         >
        </TextInput>

        <TextInput 
         style={styles.input}
        
         placeholder="Street:2"
         placeholderTextColor="black"
     secureTextEntry={true}
     onChangeText={props.handleChange('Street:2')}
         value={props.values.password}

         >
        </TextInput>
        <TextInput 
         style={styles.input}
        
         placeholder="Locality"
         placeholderTextColor="black"
     secureTextEntry={true}
     onChangeText={props.handleChange('Locality')}
         value={props.values.password}

         >
        </TextInput>

        <TextInput 
         style={styles.input}
        
         placeholder="District"
         placeholderTextColor="black"
     secureTextEntry={true}
     onChangeText={props.handleChange('District')}
         value={props.values.password}

         >
        </TextInput>

        <TextInput 
         style={styles.input}
        
         placeholder="Contact number"
         placeholderTextColor="black"
     secureTextEntry={true}
     onChangeText={props.handleChange("Contact number")}
         value={props.values.password}

         >
        </TextInput>
        <TextInput 
         style={styles.input}
        
         placeholder="Pin Code"
         placeholderTextColor="black"
     secureTextEntry={true}
     onChangeText={props.handleChange("Pin Code")}
         value={props.values.password}

         >
        </TextInput>
        <TextInput 
         style={styles.input}
        
         placeholder="State"
         placeholderTextColor="black"
     secureTextEntry={true}
     onChangeText={props.handleChange("State")}
         value={props.values.password}

         >
        </TextInput>
        <TextInput 
         style={styles.input}
        
         placeholder="country"
         placeholderTextColor="black"
     secureTextEntry={true}
     onChangeText={props.handleChange("country")}
         value={props.values.password}

         >
        </TextInput>
        <TextInput 
         style={styles.input}
        
         placeholder="email"
         placeholderTextColor="black"
     secureTextEntry={true}
     onChangeText={props.handleChange("email")}
         value={props.values.password}

         >
        </TextInput>

        <TouchableOpacity style={styles.button}
        onPress={props.handleSubmit}>
            <Text style={styles.butText}>Add</Text>
        </TouchableOpacity>

        <View>
        <Text style={styles.pText}>
Change password
        </Text>

        </View>

         </View>  
         
    </View>
    )}

     </Formik>
 </ScrollView>
     
 </KeyboardAvoidingView>
    );
}

const styles=StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ffffff'
},
logo:{
    marginTop:200,
    alignItems:'center',
    marginBottom:40
},
image:{
    width:50,
    height:50
},

input:{
    borderColor:'#2794D5',
    borderWidth:0.5,
    width:300,
    backgroundColor:'#ffffff',
    borderRadius:30,
    padding:16,
    fontSize:16,
    marginVertical:10
},
button:{
    width:300,
    backgroundColor:'#2794D5',
    borderRadius:30,
    marginVertical:20,
    paddingVertical:13
},
butText:{
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
},
pText:{
    textAlign:'center'
}

})

export default Details;
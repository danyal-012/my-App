import { useState } from 'react';
import {Text, View, Button, StyleSheet, TextInput, FlatList, SectionList} from 'react-native';

const Login =(props)=>{
 const [name,setname]=useState("");
 const [age,setage]=useState("");

 
    return(
      <View style={style.box}>
        <Text style={style.item}>
         Login Screen
        </Text>
        <TextInput placeholder='Enter your name' onChangeText={(text)=>setname(text)}
        placeholderTextColor='black'
         style={style.textBox}
         />
          <TextInput placeholder='Enter your age' onChangeText={(text)=>setage(text)}
        placeholderTextColor='black'
         style={style.textBox}
         />

        <Button title='Go to Home' onPress={()=>props.navigation.navigate("Home",{name ,age})}/>
      </View>
    )
  }

  
  const style=StyleSheet.create({
    item:{
        
      color:'black',
      textAlign:'center',
      fontSize:25,
    
      
    },
    box:{
      flex:1,
     alignItems:'center',
     justifyContent:'center'
    },
    textBox:{
        color:'black',
        borderWidth:2,
        borderColor:'black'


    }
  })

  export default Login;
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const Splash= () => {


  return (
    <View >
    
    <Text style={style.item}>HELLO</Text>
    <Text style={style.item}>THIS IS SPLASH SCREEN</Text>

   <Image source={require('../splash_screen/image.png')}/>
     
    </View>
  );
};

const style=StyleSheet.create({
  item:{
    fontSize:40,
    textAlign:'center',
    color:'blue',
    borderWidth:2,
    borderColor:'red',
    borderRadius:5
  }
})



export default Splash;
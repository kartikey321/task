import React,{Component, useState} from 'react';

import { Text, View, Button, Alert, TouchableOpacity} from 'react-native';
import { TextInput, StyleSheet, useWindowDimensions} from 'react-native';


const HelloWorldApp = () => {
  const [name, setName] = React.useState('');
  const [age,setAge] = React.useState('');
  const windowWidth= useWindowDimensions().width;
  return (
    <View
      style={styles.Maincontainer
        
       
      }>
      <Text>Enter your name</Text>
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, width:windowWidth-22,backgroundColor: 'white',borderRadius: 10}}
      placeholder="Enter your name"
      onChangeText={(val) => setName(val)}
     
    />
     
      <Text>Enter your age</Text>
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, width:windowWidth-22, backgroundColor: 'white',borderRadius: 10}}
      placeholder="Enter your age"
      onChangeText={(val) => setAge(val)}
     
    />
    <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }
          onPress={() => Alert.alert(`My name is ${name} and my age is ${age}`)}>
          <Text style={styles.TextStyle}> SUBMIT </Text>
            
          </TouchableOpacity>
  
    </View>
   
  )
}

  

const styles = StyleSheet.create({
  Maincontainer: {
    backgroundColor: '#FFF600',
    flex: 1,
        justifyContent: "center",
        alignItems: "center"

  },
  SubmitButtonStyle: {
 
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    paddingLeft: 20,
    paddingRight: 20,
    marginRight:40,
    backgroundColor:'#414a4c',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
 
  TextStyle:{
      color:'#fff',
      textAlign:'center',
      borderRadius:10
      
      
  }
 
 
});
export default HelloWorldApp;

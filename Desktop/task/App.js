// In App.js in a new project
import React,{useState} from 'react';
import { Button, View, Text, TextInput, useWindowDimensions, TouchableOpacity,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// export default class App extends component{


// constructor(props){
//   super(props)
//   this.state={
//     username:"",
//     password:""
//   }
// }
// }
function HomeScreen({ navigation }) {
  
 
 function validate_field(){    
    if(username!="admin"){
      alert("username wrong")
    }
    if(password!="admin@123"){
      alert("password wrong")
    }
    else {
      navigation.navigate('Details')
    }
  }
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const windowWidth= useWindowDimensions().width;
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',  backgroundColor: '#12B2F3', padding:20}}>
      <Text style={{fontSize:20, fontStyle:'italic'}}>Enter your username</Text>
      <TextInput
      style={{ height: 50, borderColor: 'gray', borderWidth: 1, width:windowWidth-22,backgroundColor: 'white',borderRadius: 20, paddingLeft:20, fontSize:25,marginBottom:20,color:'#34495e'}}
      placeholder="Enter your username"
      onChangeText={text => setUsername(text)}
      value={username}
      autoCapitalize = "none"
        autoCorrect = {false}
        returnKeyType = "next"
    />
       <Text style={{fontSize:20, fontStyle:'italic'}}>Enter your password</Text>
      <TextInput
       style={{ height: 50, borderColor: 'gray', borderWidth: 1, width:windowWidth-22,backgroundColor: 'white',borderRadius: 20, paddingLeft:20, fontSize:25,marginBottom:20,color:'#34495e'}}
       placeholder="Enter your password"
      onChangeText={text => setPassword(text)}
      value={password}
     
      returnKeyType = "go"
      autoCapitalize = "none"
      autoCorrect = {false}
      />
    <TouchableOpacity
        style={styles.button}
        onPress={() =>validate_field()}
      >
        <Text style={styles.buttontext}>Login</Text>
      </TouchableOpacity>
    
      
    </View>
  );

}
const styles = StyleSheet.create({
 button:{
  height:50,
  borderRadius:50,
  backgroundColor: '#33FF33',
  paddingVertical:20,
  paddingHorizontal:20,
  justifyContent:'center'},
  buttontext:{
    textAlign:'center',
    color:'#006400',
    fontSize:20
        
  }
})

// ... other code from the previous section
function DetailsScreen({ navigation }) {
  const [fullname, setfullname] = React.useState('');
  const windowWidth= useWindowDimensions().width;
  return (
    <View style={{  flex: 1, alignItems: 'center', justifyContent: 'center',  backgroundColor: '#12B2F3', padding:20}}>
        <Text style={{fontSize:20, fontStyle:'italic'}}>Enter your full name</Text>
      <TextInput
       style={{ height: 40, borderColor: 'gray', borderWidth: 1, width:windowWidth-22,backgroundColor: 'white',borderRadius: 10}}
       placeholder="Enter your fullname"
      onChangeText={text => setfullname(text)}
      value={fullname}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.push('Name',{ fullname})}
      >
        <Text style={styles.buttontext}>Login</Text>
      </TouchableOpacity>
    
     
     
    </View>
  );
}
 
   
  

function NameScreen(route){
  console.log(route)
  let data= route.params
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',  backgroundColor: '#12B2F3', padding:20 }}>
      
  <Text style={{fontSize:30,  flex: 1, alignItems: 'center', justifyContent: 'center', fontStyle:'italic' }}>Congratulations {route.route.params.fullname} you are sucessfully registered</Text>
    </View>
  );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{
          title:'Login',
          headerStyle:{backgroundColor:'#F7F704'},
          headerTintColor:'black',
          headerTintStyle:{
            fontWeight:'bold',
            fontSize:25
          }
        
          
        }}/>
        <Stack.Screen name="Details" component={DetailsScreen} 
         options={{
          title:'Home',
          headerStyle:{backgroundColor:'#F7F704'},
          headerTintColor:'black',
          headerTintStyle:{
            fontWeight:'bold',
            fontSize:25
          }
        
          
        }}/>
        <Stack.Screen name="Name" component={NameScreen} 
         options={{
          title:'Details',
          headerStyle:{backgroundColor:'#F7F704'},
          headerTintColor:'black',
          headerTintStyle:{
            fontWeight:'bold',
            fontSize:25
          }
        
          
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;



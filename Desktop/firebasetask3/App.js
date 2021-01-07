// In App.js in a new project
import React,{useState} from 'react';
import { Button, View, Text, TextInput, useWindowDimensions, TouchableOpacity,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';


function signupScreen({ navigation }) {
  function pass(){
    auth()
.createUserWithEmailAndPassword(email, password)
.then((ref) => {
  console.log('User account created & signed in!');
  console.log(ref);
  navigation.navigate("Details");
})
.catch(error => {
  if (error.code === 'auth/email-already-in-use') {
    console.log('That email address is already in use!');
  }

  if (error.code === 'auth/invalid-email') {
    console.log('That email address is invalid!');
  }

  console.log(error);
});
  }
 

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  const windowWidth= useWindowDimensions().width;
  return (
    
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',  backgroundColor: '#12B2F3', padding:20}}>
      <Text style={{fontSize:20, fontStyle:'italic'}}>Enter your name</Text>
      <TextInput
      style={{ height: 50, borderColor: 'gray', borderWidth: 1, width:windowWidth-22,backgroundColor: 'white',borderRadius: 20, paddingLeft:20, fontSize:25,marginBottom:20,color:'#34495e'}}
      placeholder="Enter your name"
      onChangeText={text => setName(text)}
      value={name}
      autoCapitalize = "none"
        autoCorrect = {false}
        returnKeyType = "next"
    />
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
       <Text style={{fontSize:20, fontStyle:'italic'}}>Enter your email id</Text>
      <TextInput
      style={{ height: 50, borderColor: 'gray', borderWidth: 1, width:windowWidth-22,backgroundColor: 'white',borderRadius: 20, paddingLeft:20, fontSize:25,marginBottom:20,color:'#34495e'}}
      placeholder="Enter your email-id"
      onChangeText={text => setEmail(text)}
      value={email}
      autoCapitalize = "none"
      keyboardType = "email-address"
        autoCorrect = {false}
        returnKeyType = "next"
    />
       <Text style={{fontSize:20, fontStyle:'italic'}}>Enter your password</Text>
      <TextInput
       style={{ height: 50, borderColor: 'gray', borderWidth: 1, width:windowWidth-22,backgroundColor: 'white',borderRadius: 20, paddingLeft:20, fontSize:25,marginBottom:20,color:'#34495e'}}
       placeholder="Enter your password"
      onChangeText={text => setPassword(text)}
      value={password}
      secureTextEntry={true}
      returnKeyType = "go"
      autoCapitalize = "none"
      autoCorrect = {false}
      />
    <TouchableOpacity
        style={styles.button}
        onPress={() => pass()
      }
      >
        <Text style={styles.buttontext}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Details')
      }
      >
        <Text style={styles.buttontext}>Already a user?sign in</Text>
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
  function signin(){
    console.log("email=",email);
    auth()
    .signInWithEmailAndPassword(email.trim(), password)
    .then((ref) => {
      console.log(ref);
      navigation.push("Name",{email});

      
      console.log('User sign in successful');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log(ref);
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.log(error);
    });
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const windowWidth= useWindowDimensions().width;
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',  backgroundColor: '#12B2F3', padding:20}}>
      <Text style={{fontSize:20, fontStyle:'italic'}}>Enter your email</Text>
      <TextInput
      style={{ height: 50, borderColor: 'gray', borderWidth: 1, width:windowWidth-22,backgroundColor: 'white',borderRadius: 20, paddingLeft:20, fontSize:25,marginBottom:20,color:'#34495e'}}
      placeholder="Enter your email"
      onChangeText={text => setEmail(text)}
      value={email}
      autoCapitalize = "none"
      keyboardType='email-address'
        autoCorrect = {false}
        returnKeyType = "next"
    />
       <Text style={{fontSize:20, fontStyle:'italic'}}>Enter your password</Text>
      <TextInput
       style={{ height: 50, borderColor: 'gray', borderWidth: 1, width:windowWidth-22,backgroundColor: 'white',borderRadius: 20, paddingLeft:20, fontSize:25,marginBottom:20,color:'#34495e'}}
       placeholder="Enter your password"
      onChangeText={text => setPassword(text)}
      value={password}
      secureTextEntry={true}
      returnKeyType = "go"
      autoCapitalize = "none"
      autoCorrect = {false}
      />
    <TouchableOpacity
        style={styles.button}
        onPress={() =>signin()}
      >
        <Text style={styles.buttontext}>Login</Text>
      </TouchableOpacity>
    
      
    </View>
  );

}
 
   
  

function NameScreen(route){
 function sout(){
    auth()
  .signOut()
  .then(() => console.log('User signed out!'));
    
  }
  console.log(route)
  let data= route.params
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',  backgroundColor: '#12B2F3', padding:20 }}>
      
  <Text style={{fontSize:30,  flex: 1, alignItems: 'center', justifyContent: 'center', fontStyle:'italic' }}>Congratulations {route.route.params.email} you are sucessfully registered!</Text>
  <TouchableOpacity
        style={styles.button}
        onPress={() =>sout()}
      >
        <Text style={styles.buttontext}>signout</Text>
      </TouchableOpacity>
    </View>
  );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="signup">
        <Stack.Screen name="signup" component={signupScreen} 
        options={{
          title:'Signup',
          headerStyle:{backgroundColor:'#F7F704'},
          headerTintColor:'black',
          headerTintStyle:{
            fontWeight:'bold',
            fontSize:25
          }
        
          
        }}/>
        <Stack.Screen name="Details" component={DetailsScreen} 
         options={{
          title:'Login',
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



// In App.js in a new project
import * as React from 'react';
import { Button, View, Text, TextInput, useWindowDimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const windowWidth= useWindowDimensions().width;
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Enter your username</Text>
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, width:windowWidth-22,backgroundColor: 'white',borderRadius: 10}}
      placeholder="Enter your username"
      onChangeText={text => setUsername(text)}
      value={username}
    />
      <Text>Enter your password</Text>
      <TextInput
       style={{ height: 40, borderColor: 'gray', borderWidth: 1, width:windowWidth-22,backgroundColor: 'white',borderRadius: 10}}
       placeholder="Enter your password"
      onChangeText={text => setPassword(text)}
      value={password}
      />
      <Button
        title="Enter"
       
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

// ... other code from the previous section
function DetailsScreen({ navigation }) {
  const [fullname, setfullname] = React.useState('');
  const windowWidth= useWindowDimensions().width;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Enter your full name</Text>
      <TextInput
       style={{ height: 40, borderColor: 'gray', borderWidth: 1, width:windowWidth-22,backgroundColor: 'white',borderRadius: 10}}
       placeholder="Enter your fullname"
      onChangeText={text => setfullname(text)}
      value={fullname}
      />
    
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="enter" onPress={() => navigation.push('Name',{ fullname})} />
    </View>
  );
}
function NameScreen(route){
  console.log(route)
  let data= route.params
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Name Screen</Text>
  <Text style={{fontSize:30}}>{data}</Text>
    </View>
  );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Name" component={NameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
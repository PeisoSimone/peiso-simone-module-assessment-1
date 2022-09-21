import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from './screens/SignInScreen'
import SignUpScreen from './screens/SignUpScreen'
import HomeScreen from './screens/HomeScreen'




import * as firebase from 'firebase';
import firebaseConfig from './src/firebaseConfig';




const Stack = createNativeStackNavigator();

function App () {
  if (!firebase.apps.length) {
    console.log("firebase is connected");
    firebase.initializeApp(firebaseConfig);
  }
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Sign In" 
          component={SignInScreen} 
          options={{
              title: 'Sing In',
              headerStyle: {
                backgroundColor: '#272643',
              },
              headerTintColor: '#fff',
            }}/>
         
          <Stack.Screen name="Sign Up" 
          component={SignUpScreen}options={{
            title: 'Sing Up',
              headerStyle: {
                backgroundColor: '#272643',
              },
              headerTintColor: '#fff',
            }}

            />
        </Stack.Navigator>
    );
  }

  return(
      <Stack.Navigator>
      <Stack.Screen name="Home" 
          component={HomeScreen}
          options={{
            title: 'Home',
              headerStyle: {
                backgroundColor: '#272643',
              },
              headerTintColor: '#fff',
            }}/>
      </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}

import * as React from 'react';
import {useState,useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from './screens/SignInScreen'
import DashboardScreen from './screens/DashboardScreen'
import DetailsScreen from './screens/DetailsScreen'
import HomeScreen from './screens/HomeScreen'
import SignUpScreen from './screens/SignUpScreen'

//import * as firebase from 'firebase';
import { firebase } from './src/firebaseConfig';




const Stack = createNativeStackNavigator();

const App = () => {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user){
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(()=>{
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [])

  if (initializing) return null;

  if (!user){
    
    return (
      <NavigationContainer>
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
          <Stack.Screen name="Home" 
          component={HomeScreen}
          options={{
            title: 'Home',
              headerStyle: {
                backgroundColor: '#272643',
              },
              headerTintColor: '#fff',
            }}/>
          <Stack.Screen name="Dashboard" 
          component={DashboardScreen}options={{
            title: 'Dashboard',
              headerStyle: {
                backgroundColor: '#272643',
              },
              headerTintColor: '#fff',
            }}/>
          <Stack.Screen name="Details" 
          component={DetailsScreen}options={{
            title: 'Details',
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
            }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;

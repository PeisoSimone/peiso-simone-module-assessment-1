import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashboardScreen from './screens/DashboardScreen'
import SignInScreen from './screens/SignInScreen'
import DetailsScreen from './screens/DetailsScreen'
import HomeScreen from './screens/HomeScreen'
import SplashScreen from './screens/SplashScreen'
import SignUpScreen from './screens/SignUpScreen'

import * as firebase from 'firebase';
import firebaseConfig from './src/firebaseConfig';


const Stack = createNativeStackNavigator();

const App = () => {
  if (firebase.app.length){
    console.log("firebase is connected");
    firebase.initializeApp(firebaseConfig)
   }
  
  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Sign In" component={SignInScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

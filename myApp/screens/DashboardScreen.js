import React, {  useEffect } from 'react';
import {useState} from "react";
import { View, Text } from 'react-native';
import * as firebase from 'firebase'

const DashboardScreen = () => {

  const [name, setName] = useState([]);

  useEffect(() => {
    firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).get()
    .then((snapshot) =>{
      if(snapshot.exists){
          setName(snapshot.data())
      }
      else {
        console.log('does not exist')
      }
  })
  }, [])


  return (
    <SafeAreaView style={styles.container}>
      
        <Text style={{fontSize:20, fontWeight:'bold'}}>
          Hello, {name.firstName}
        </Text>
        <TouchableOpacity
            onPress={()=>{
              firebase.auth().signOut();
          }}
            style={styles.button}
        >
          <Text style={{fontWeight:'bold', fontSize:22}}>Sign Out</Text>
        </TouchableOpacity>
      
    </SafeAreaView>
  )
}


export default DashboardScreen;
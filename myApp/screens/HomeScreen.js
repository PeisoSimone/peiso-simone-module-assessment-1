import { useEffect, useState } from 'react';
import { Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Pressable, View } from 'react-native';
import * as firebase from 'firebase'
import Fetch from '../src/Fetch';

const HomeScreen = () => {
  const [name, setName] = useState([]);

  useEffect(() => {
    firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setName(snapshot.data())
        }
        else {
          console.log('does not exist')
        }
      })
  }, [])

  return (

    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 30,margin:20 }}>Welcome, {name.firstName}</Text>
      </View>

      <View style={styles.fecthContainer}>
        <Fetch/>
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={() => { firebase.auth().signOut(); }}>
        <Text style={styles.loginText}>LOGOUT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: '100%',
  },
  fecthContainer: {
    flex: 2,
    backgroundColor: '#e5e5e5',
    padding: 15,
    borderRadius: 15,
    margin:5,
    marginHorizontal: 10,
    width: '80%',
  },

  inputView: {
    backgroundColor: "lightblue",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    backgroundColor: "#2c698d",
    padding: 10,
  },
});

export default HomeScreen;
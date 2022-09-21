import {  useEffect,useState } from 'react';
import {  Text , StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import * as firebase from 'firebase'

const HomeScreen = () => {
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
          Welcome, {name.firstName}
        </Text>

        <TouchableOpacity style={styles.loginBtn} onPress={()=>{firebase.auth().signOut();}}>
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
    marginTop: 40,
    backgroundColor: "#2c698d",
    padding:10,
  },
});
export default HomeScreen;
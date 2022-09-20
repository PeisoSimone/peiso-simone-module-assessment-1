import { StatusBar } from "expo-status-bar";
import {useState} from "react";
import * as firebase from 'firebase'

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";


const SignInScreen = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  loginUser = async (email,password) => {
      try{
          await firebase.auth().signInWithEmailAndPassword(email,password)
      } catch (error){
        alert(error)
      }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 30 }}> Welcome Back</Text>
        </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn} onPress={()=>loginUser(email,password)}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.forgot_button} onPress ={() => navigation.navigate('Sign Up')}>
        <Text style={styles.forgot_button}>You don't have an account? Sign Up Here</Text>
      </TouchableOpacity>
    </View>
  );
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
export default SignInScreen;

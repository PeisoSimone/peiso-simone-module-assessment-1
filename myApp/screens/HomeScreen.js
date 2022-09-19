import React, { Component } from 'react';
import {
  Text,
  View,
  Pressable,
  StyleSheet
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
      <Text>This is Home screen, press below to navigate diffence screens</Text>

        <Pressable
          onPress={() => navigation.navigate('Details')}
          style={styles.inputView}>
        <Text>Details</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('Dashboard')}
        style={styles.inputView}>
       <Text>Dashboard</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('Splash')}
        style={styles.inputView}>
       <Text>Splash</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('Sign In')}
        style={styles.inputView}>
       <Text>Sign-In</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('Sign Up')}
        style={styles.inputView}>
       <Text>Sign-In</Text>
      </Pressable>
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
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
});

export default HomeScreen;
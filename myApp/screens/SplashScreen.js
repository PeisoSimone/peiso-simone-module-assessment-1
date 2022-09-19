import React, { Component } from 'react';
import { View, Text, styles } from 'react-native';

const SplashScreen = ({navigation}) => {
  setTimeout(()=>{
    navigation.navigate('Home')
    },2000 )

  return (      
  <View style={styles.container}>
    <div>
      <img assets={splash2} alt=""/>
    </div>
    <Text style={{fontSize: 20, color:"#fff"}}>
      Splash Screen
    </Text>
  </View>
  );
}
export default SplashScreen;
import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ImageBackground, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { IP } from "../IP.json";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signin = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [pwd, setPassword] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleLogin = async () => {
    if ( !email || !password || !confirmPassword) {
      console.log("Please fill in all fields");
      return;
    }
    try {
      const response = await axios.post(`http://${IP}:3001/usermobile/signinUser`, { email, pwd });
      
      console.log(response.data.iduser);
      if (response.data !== undefined) {
        await AsyncStorage.setItem('iduser', JSON.stringify(response.data.iduser));
        console.log('Login successful:');
        // navigation.navigate('homepage');
      } else {
        console.log('User ID is undefined in the response data.');
      }
    } catch (error) {
      console.log('Login error:', error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
        <View style={styles.innerContainer}>
          
        <Image
            source={require ('../assets/logo_app.png')} 
            style={styles.icon}
          />

          <View style={styles.inputView}>
          <TextInput
            style={[styles.input, isEmailFocused && styles.focusedInput]}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
            value={email}
          />

          <TextInput
            style={[styles.input, isPasswordFocused && styles.focusedInput]}
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
            value={pwd}
          />
          </View>
    
         
          <View style={styles.buttonView}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => console.log("Forget your password!")}>
            <Text style={styles.headerText}>Forget your password!</Text>
          </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    alignItems : "center",
    paddingTop: 70,
  },
  title : {
    fontSize : 30,
    fontWeight : "bold",
    textTransform : "uppercase",
    textAlign: "center",
    paddingVertical : 40,
    color : "black"
  },
  inputView : {
    gap : 20,
    width : "100%",
    paddingHorizontal : 40,
    marginBottom  :69,
  },
  icon: {
    height : 200,
    width : 230,
   
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 25,
    color: 'black',
    marginBottom:15
  },
  input: {
    height : 50,
    paddingHorizontal : 20,
    borderColor : "blue",
    borderWidth : 1,
    borderRadius: 7,
    marginBottom:20
  },
  focusedInput: {
    height: 50,
    fontSize: 18,
  },
  loginButton: {
    backgroundColor : "#9ACD32",
    height : 40,
    borderColor : "white",
    borderWidth  : 1,
    borderRadius : 5,
    alignItems : "center",
    justifyContent : "center"
  },
  buttonView :{
    width :"100%",
    paddingHorizontal : 70,
   
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  signupButton: {
    backgroundColor: "#5784BA",
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Signin;

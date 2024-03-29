import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ImageBackground, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import axios from 'axios';
import { IP } from '../IP.json';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);

  const navigation = useNavigation();
  
  const handleFocus = (input) => {
    setFocusedInput(input);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const signup = () => {
    if (!name || !email || !password || !confirmPassword) {
      console.log("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    const userData = {
      name: name,
      email: email,
      password: password,
    };

    axios.post(`http://${IP}:3001/usermobile/signupUser`, userData)
      .then((result) => {
        console.log('Signup done', result.data);
        navigation.navigate('Signin');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      {/* <Text style={styles.title}>Sign up</Text> */}
        <View style={styles.innercontainer}>
          <Image
            source={require ('../assets/logo_app.png')} 
            style={styles.icon}
          />
          <View style={styles.inputView}>
          <TextInput
            style={[
              styles.input,
              focusedInput === 'name' && styles.focusedInput,
            ]}
            placeholder="Name"
            onChangeText={setName}
            onFocus={() => handleFocus('name')}
            onBlur={handleBlur}
            value={name}
          />
          <TextInput
            style={[
              styles.input,
              focusedInput === 'email' && styles.focusedInput,
            ]}
            placeholder="Email"
            onChangeText={setEmail}
            onFocus={() => handleFocus('email')}
            onBlur={handleBlur}
            value={email}
          />
          <TextInput
            style={[
              styles.input,
              focusedInput === 'password' && styles.focusedInput,
            ]}
            placeholder="Password"
            secureTextEntry
            onChangeText={setPassword}
            onFocus={() => handleFocus('password')}
            onBlur={handleBlur}
            value={password}
          />
          <TextInput
            style={[
              styles.input,
              focusedInput === 'confirmPassword' && styles.focusedInput,
            ]}
            placeholder="Confirm Password"
            secureTextEntry
            onChangeText={setConfirmPassword}
            onFocus={() => handleFocus('confirmPassword')}
            onBlur={handleBlur}
            value={confirmPassword}
          />
          </View>
          <View style={styles.buttonView}>
          <TouchableOpacity style={styles.signupButton} onPress={signup}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          </View>
        </View>
      
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  innercontainer: {
    alignItems : "center",
    paddingTop: 70,
    flex:1
  },
  title : {
    fontSize : 30,
    fontWeight : "bold",
    textTransform : "uppercase",
    textAlign: "center",
    paddingVertical : 40,
    color : "black"
  },
  icon: {
    height : 200,
    width : 230,
  },
  inputView : {
    gap : 30,
    width : "100%",
    paddingHorizontal : 40,
    marginBottom  :60
  },
  input: {
    height : 50,
    paddingHorizontal : 20,
    borderColor : "blue",
    borderWidth : 1,
    borderRadius: 7,
  },
  signupButton: {
    backgroundColor : "#5784BA",
    height : 40,
    borderColor : "gray",
    borderWidth  : 1,
    borderRadius : 5,
    alignItems : "center",
    justifyContent : "center",
    
  },
  buttonView :{
    width :"100%",
    paddingHorizontal : 50,
    marginBottom:20
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  focusedInput: {
    height: 50,
    fontSize: 18,
  },
});

export default SignUp;



import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ImageBackground, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { IP1 } from "../ip.json";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signin = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [pwd, setPassword] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post(`http://${IP1}:3001/usermobile/signinUser`, { email, pwd });
      
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
      <ImageBackground
        style={styles.backgroundImage}
        resizeMode="cover"
        source={require("../assets/vacation-768x453.jpg")}
      >
        <View style={styles.innerContainer}>
          <Image
            source={{ uri: 'https://www.freevector.com/uploads/vector/preview/9751/FreeVector-Vacation-Icon.jpg' }}
            style={styles.icon}
          />

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

          <TouchableOpacity onPress={() => console.log("Forget your password!")}>
            <Text style={styles.headerText}>Forget your password!</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  innerContainer: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 40,
    borderRadius: 30,
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 25,
    color: 'white',
  },
  input: {
    height: 40,
    width: '100%',
    marginBottom: 15,
    borderColor: '#F27438',
    borderWidth: 3,
    borderRadius: 20,
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#B6D8F2',
  },
  focusedInput: {
    height: 50,
    fontSize: 18,
  },
  loginButton: {
    backgroundColor: '#226D68',
    padding: 10,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  signupButton: {
    backgroundColor: "#80586D",
    padding: 10,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Signin;

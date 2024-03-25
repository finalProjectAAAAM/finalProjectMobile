import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ImageBackground, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import axios from 'axios';
import { IP1 } from '../ip.json';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
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
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    const userData = {
      name: name,
      email: email,
      password: password,
      location: location
    };

    axios.post(`http://${IP1}:3001/usermobile/signupUser`, userData)
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
      style={styles.backgroundImage}
    >
      <ImageBackground
        style={styles.backgroundImage}
        resizeMode="cover"
        source={require("../assets/vacation-768x453.jpg")}
      >
        <View style={styles.container}>
          <Image
            source={{ uri: 'https://www.freevector.com/uploads/vector/preview/9751/FreeVector-Vacation-Icon.jpg' }}
            style={styles.icon}
          />
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
          <TextInput
            style={[
              styles.input,
              focusedInput === 'location' && styles.focusedInput,
            ]}
            placeholder="Location"
            onChangeText={setLocation}
            onFocus={() => handleFocus('location')}
            onBlur={handleBlur}
            value={location}
          />
          <TouchableOpacity style={styles.signupButton} onPress={signup}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  container: {
    width: '100%',
    padding: 30,
    alignItems: 'center',
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 40,
    borderRadius: 50,
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
  signupButton: {
    backgroundColor: "#80586D",
    padding: 10,
    borderRadius: 20,
    width: '70%',
    alignItems: 'center',
    marginTop: 20,
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



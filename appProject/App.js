import React from 'react';
import { View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from './components/signin.js';
import SignUp from './components/signup.js'



const Stack = createNativeStackNavigator();
const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <NavigationContainer>
{hideSplashScreen ? (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Signin"
          component={Signin}
          // options={{ headerShown: false }}
         />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          // options={{ headerShown: false }}
        />
     </Stack.Navigator>
      ) : null}
     </NavigationContainer>
  )}
  export default App;
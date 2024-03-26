const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Update from "./screens/Update";
import Calender from "./screens/Calender.js";
import IPhone1415Pro from "./screens/IPhone1415Pro.js"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Alegreya-Medium": require("./assets/fonts/Alegreya-Medium.ttf"),
    "Alegreya-MediumItalic": require("./assets/fonts/Alegreya-MediumItalic.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="IPhone1415Pro" component={IPhone1415Pro} />
            {/* <Stack.Screen
              name="Update"
              component={Update}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen name="calender" component={Calender} />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;

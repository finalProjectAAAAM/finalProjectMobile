const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import FirstPage from "./screens/FirstPage";
import PageScend from "./screens/PageScend";
import Thirdpage from "./screens/Thirdpage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Abel-Regular": require("./assets/fonts/Abel-Regular.ttf"),
    "Actor-Regular": require("./assets/fonts/Actor-Regular.ttf"),
    "Alatsi-Regular": require("./assets/fonts/Alatsi-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="FirstPage"
              component={FirstPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PageScend"
              component={PageScend}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Thirdpage"
              component={Thirdpage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;

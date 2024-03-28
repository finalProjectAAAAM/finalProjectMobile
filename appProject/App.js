const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer ,useNavigation} from "@react-navigation/native";
import SeeOackages from "./userpagepackage/SeeOackages.js"
import Package from "./paiments/Package.js"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StripeProvider } from "@stripe/stripe-react-native";
import PaimentConfime from "./paiments/PaimentConfirme.js"
import Calender from "./screens/Calender.js";
import Update from "./screens/Update";
import { useFonts } from "expo-font";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./components/GlobalStyles.js"),
    "Inter-Medium": require("./components/GlobalStyles.js"),
    "Inter-SemiBold": require("./components/GlobalStyles.js"),
    "Abel-Regular": require("./components/GlobalStyles.js"),
    "Actor-Regular": require("./components/GlobalStyles.js"),
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
             <Stack.Screen
              name="SeeOackages"
              component={SeeOackages}
              options={{ headerShown: false }}
            />
            <Stack.Screen
            name="PaimentConfime"
            component={PaimentConfime}
            options={{ headerShown: false }}
            />
              <Stack.Screen
              name="Package"
              component={Package}
              options={{ headerShown: false }}
            /> 
           
             {/* <Stack.Screen
              name="Tiket"
              component={Tiket}
              options={{ headerShown: false }}
            />  */}
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
  

const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer ,useNavigation} from "@react-navigation/native";
import { useFonts } from "expo-font";
import SeeOackages from "./userpagepackage/SeeOackages.js"
import Package from "./paiments/Package.js"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StripeProvider } from "@stripe/stripe-react-native";
import PaimentConfime from "./paiments/PaimentConfirme.js"




const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./components/GlobalStyles.js"),
    "Inter-Medium": require("./components/GlobalStyles.js"),
    "Inter-SemiBold": require("./components/GlobalStyles.js"),
    "Abel-Regular": require("./components/GlobalStyles.js"),
    "Actor-Regular": require("./components/GlobalStyles.js"),
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
            
            
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    
    </>
  );
};
export default App;

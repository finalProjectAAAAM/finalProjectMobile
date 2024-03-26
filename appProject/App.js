import * as React from "react";
import Kommunicate from 'react-native-kommunicate-chat'; // Import the Kommunicate library
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SeeOackages from "./userpagepackage/SeeOackages.js";
import Package from "./paiments/Package.js";
import PaimentConfime from "./paiments/PaimentConfirme.js";
import ChatBot from "./chatbot/ChatBot.js"; // Import the ChatBot component

// Replace with your actual App ID
const YOUR_KOMMUNICATE_APP_ID = '5aaf9c5d7af768df43538bb54d1cd4c5';

const Stack = createNativeStackNavigator();

const App = () => {
  const navigation = useNavigation();

  const handleStartConversation = async () => {
    try {
      const conversationObject = { appId: YOUR_KOMMUNICATE_APP_ID };
      const response = await Kommunicate.startConversation(conversationObject);
      if (response === 'Success') {
        navigation.navigate('ChatBot'); // Navigate to the ChatBot screen
      } else {
        console.error('Error starting conversation:', response);
        // Handle errors appropriately
      }
    } catch (error) {
      console.error('Error starting conversation:', error);
      // Handle errors appropriately
    }
  };

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
    <NavigationContainer>
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
        {/* Added ChatBot screen */}
        <Stack.Screen
          name="ChatBot"
          component={ChatBot}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <View style={{ position: 'absolute', bottom: 20, right: 20 }}>
        <Button title="Start Chat" onPress={handleStartConversation} />
      </View>
    </NavigationContainer>
  );
};

export default App;

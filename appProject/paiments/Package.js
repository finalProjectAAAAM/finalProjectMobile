import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Pressable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StripeProvider, usePaymentSheet } from "@stripe/stripe-react-native";
import axios from "axios";
import { IP } from "../IP.json";
import Constants from 'expo-constants';
console.log(Constants ,"constraint ");
const {Publish} = Constants.expoConfig.extra;
console.log(Publish, '33');

const Package = () => {
  const [loading, SetLoading] = useState(false);
  const navigation = useNavigation();
  const { initPaymentSheet, presentPaymentSheet } = usePaymentSheet();
  const [packagedatils, setPackagedatils] = useState([]);

  useEffect(() => {
    initializePaymentSheet();
    getpackagedetails();
  }, []);

  const navigationtoconfirme = ()=>{  
    navigation.navigate("PaimentConfime");
  }
  const getpackagedetails = async ()=>{
   try{
      const details = await axios.get(`http://${IP}:3001/cp/getpackage/1`)
        console.log(details.data);
      setPackagedatils(details.data)
   }
   catch(error){
     console.log(error ,'erro in getting packagedatils !');
   }
  }


  
  const fetchPaymentSheetParams = async () => {
    const response = await axios.post(`http://${IP}:3001/Paiment/intent`, {
      amount: packagedatils.price * 10,
      receipt_email: "customer@example.com",
      customerId: 1,
    });
    return response.data;
  };

  const initializePaymentSheet = async () => {
    const data = await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",
      customerId: data.customerId,
      customerEphemeralKeySecret: data.ephemeralKey.secret,
      paymentIntentClientSecret: data.paymentIntent.client_secret,
      
      allowsDelayedPaymentMethods: true,
    });

    if (error) {
      alert(error, "Error in initialize payment sheet");
    }
  };

  const handlePayment = async () => {
    try {
      await presentPaymentSheet();
      
      // Wait for payment sheet to be presented (you might not need this delay)
      await new Promise(resolve => setTimeout(resolve, 4000));
  
      // Show confirmation dialog
      await new Promise(resolve => {
        Alert.alert(
          "Confirm Payment",
          "Are you sure you want to proceed with the payment?",
          [
            {
              text: "Cancel",
              style: "cancel",
              onPress: resolve
            },
            {
              text: "Confirm",
              onPress: () => {
                navigationtoconfirme();
                resolve();
              },
            },
          ]
        );
      });
    } catch (error) {
      console.log("Error while processing payment:", error);
      Alert.alert("Error", "There was an error processing your payment. Please try again later.");
    }
  };
  
  
  
  

  
  return (
    <StripeProvider publishableKey="pk_test_51OwVIFDHUVK5rc8xKZCTAnxWmj5UOZdcVrnlvZJzwB5XFZWrfAgHkf5F9MVvFSqYHXtOyP660hIbYxtNwWOvgF3a00Aa4rM55j">
      <View style={styles.container}>
        <Pressable onPress={handlePayment} style={styles.button}>
          <Text style={styles.buttonText}>Add Payment Method</Text>
        </Pressable>
      </View>
    </StripeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default Package;

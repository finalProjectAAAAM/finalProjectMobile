import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Pressable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StripeProvider, usePaymentSheet } from "@stripe/stripe-react-native";
import axios from "axios";
import { IP } from "../IP.json";


const Package = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const { initPaymentSheet, presentPaymentSheet } = usePaymentSheet();
  const [packagedetails, setPackagedetails] = useState(null);

  const getPackageDetails = async () => {
    try {
      const response = await axios.get(`http://${IP}:3001/cp/getpackage/1`);
      setPackagedetails(response.data);
    } catch (error) {
      console.error('Error fetching package details:', error);
    }
  };

  useEffect(() => {
    getPackageDetails();
  }, []);

  const initializePaymentSheet = async () => {
    try {
      if (packagedetails) {
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
      } else {
        console.error('Package details are null');
      }
    } catch (error) {
      console.error('Error initializing payment sheet:', error);
    }
  };

  const fetchPaymentSheetParams = async () => {
    try {
      const response = await axios.post(`http://${IP}:3001/Paiment/intent`, {
        amount: packagedetails.price * 10, 
        receipt_email: "customer@example.com",
        customerId: 1,
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching payment sheet params:', error);
      throw error;
    }
  };

  const navigationToConfirm = () => {  
    navigation.navigate("PaimentConfime");
  };

  const handlePayment = async () => {
    try {
      await presentPaymentSheet();
      setLoading(true);
      setTimeout(() => {
        Alert.alert(
          "Confirm Payment",
          "Are you sure you want to proceed with the payment?",
          [
            {
              text: "Cancel",
              style: "cancel",
            },
            {
              text: "Confirm",
              onPress: navigationToConfirm,
            },
          ]
        );
      }, 2000);
    } catch (error) {
      console.error('Error processing payment:', error);
      Alert.alert("Error", "There was an error processing your payment. Please try again later.");
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, [packagedetails]); 

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

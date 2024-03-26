import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";
import axios from "axios"
const Update = () => {
  const [formData, setFormData] = useState({
    pwd: "",
    name: "",
    email: "",
    confirm_password: "",
  });

  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = async () => {
    if (
      !formData.pwd ||
      !formData.name ||
      !formData.email ||
      !formData.confirm_password
    ) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    if (formData.pwd !== formData.confirm_password) {
      Alert.alert("Error", "New password and confirmation do not match");
      return;
    }
    try {
      const response = await axios.put("http://192.168.11.234:3001/updateuser/1", 
        //i dont have the id login
        // headers: {
        //   "Content-Type": "application/json",
        // },
        {
          name: formData.name,
          email: formData.email,
          pwd: formData.pwd,
        },
      );

      if (response.status === 200) {
        console.log(response.data);
        Alert.alert("Success", "User updated successfully");
      } else {
        console.error(response.data.error);
        Alert.alert("Error", "Failed to update user");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Network error");
    }
  };

  return (
    <View style={styles.update}>
      <View style={[styles.updateChild, styles.textboxPosition]} />
      <Image
        style={styles.updateItem}
        contentFit="cover"
        source={require("../assets/ellipse-115.png")}
      />
      <Image
        style={[styles.iconlylightprofile, styles.buttonColorChildLayout]}
        contentFit="cover"
        source={require("../assets/iconlylightprofile.png")}
      />
      <View style={styles.updateUserAccountParent}>
        <Text style={styles.updateUserAccount}>Update User Account</Text>
        <View style={styles.textboxParent}>
          <TextInput
            style={[styles.textbox, styles.textboxTypo1]}
            placeholder="name"
            placeholderTextColor="#747688"
            value={formData.name}
            onChangeText={(text) => handleChange("name", text)}
          />
          <TextInput
            style={[styles.textbox1, styles.textboxTypo1]}
            placeholder="abc@email.com"
            keyboardType="email-address"
            placeholderTextColor="#747688"
            value={formData.email}
            onChangeText={(text) => handleChange("email", text)}
          />
        </View>
        <View style={styles.textboxGroup}>
          <TextInput
            style={styles.textboxTypo}
            placeholder="new password"
            secureTextEntry={true}
            placeholderTextColor="#747688"
            value={formData.pwd}
            onChangeText={(text) => handleChange("pwd", text)}
          />
          <TextInput
            style={[styles.textbox3, styles.textboxTypo]}
            placeholder="Confirm password"
            secureTextEntry={true}
            placeholderTextColor="#747688"
            value={formData.confirm_password}
            onChangeText={(text) => handleChange("confirm_password", text)}
          />
        </View>
        {/* <TextInput
          style={[styles.frameChild, styles.textboxTypo1]}
          placeholder="user phone number"
          placeholderTextColor="#747688"
        /> */}
      </View>
      <Pressable style={styles.buttonColor} onPress={handleSubmit}>
        <Image
          style={[styles.buttonColorChild, styles.buttonColorChildLayout]}
          contentFit="cover"
          source={require("../assets/group-18177.png")}
        />
        <Text style={styles.continue}>Update</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textboxPosition: {
    left: 0,
    position: "absolute",
  },
  buttonColorChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textboxTypo1: {
    fontSize: FontSize.size_sm,
    height: 56,
    width: 317,
    fontFamily: FontFamily.alegreyaItalic,
    fontStyle: "italic",
  },
  textboxTypo: {
    width: 135,
    fontSize: FontSize.size_sm,
    height: 56,
    fontFamily: FontFamily.alegreyaItalic,
    fontStyle: "italic",
  },
  updateChild: {
    borderBottomRightRadius: Border.br_6xl,
    borderBottomLeftRadius: Border.br_6xl,
    backgroundColor: "#3d50df",
    width: 393,
    height: 144,
    top: 0,
    left: 0,
  },
  updateItem: {
    top: 60,
    left: 139,
    width: 114,
    height: 114,
    position: "absolute",
  },
  iconlylightprofile: {
    height: "10.68%",
    width: "23.16%",
    top: "8.45%",
    right: "38.42%",
    bottom: "80.87%",
    left: "38.42%",
  },
  updateUserAccount: {
    fontSize: 25,
    lineHeight: 23,
    color: "#000",
    textAlign: "left",
    fontFamily: FontFamily.alegreyaItalic,
    fontStyle: "italic",
  },
  textbox: {
    left: 0,
    position: "absolute",
    top: 0,
  },
  textbox1: {
    top: 91,
    left: 0,
    position: "absolute",
  },
  textboxParent: {
    height: 147,
    marginTop: 43,
    width: 317,
  },
  textbox3: {
    marginLeft: 32,
  },
  textboxGroup: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 43,
  },
  frameChild: {
    marginTop: 43,
  },
  updateUserAccountParent: {
    top: 197,
    left: 46,
    alignItems: "center",
    position: "absolute",
  },
  buttonColorChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    width: "100%",
    maxWidth: "100%",
  },
  continue: {
    top: "31.03%",
    left: "37.27%",
    fontSize: 16,
    letterSpacing: 1,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: FontFamily.alegreyaMedium,
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  buttonColor: {
    top: 669,
    left: 69,
    width: 271,
    height: 58,
    position: "absolute",
  },
  update: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Update;

import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View ,Pressable } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";


const MinHeader = () => {
  const navigation = useNavigation();
  const navigateto =()=>{
    navigation.navigate("Package");
  }
  return (
    <View style={styles.menuAltParent}>
      <Image
        style={[styles.menuAltIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/menu-alt.png")}
      />
      <Pressable onPress={navigateto}>
      <Image
        style={[styles.notificationBellIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/notification-bell.png")}
      />
      </Pressable>
      <View style={[styles.frameParent, styles.iconPosition]}>
        <View style={[styles.currentLocationWrapper, styles.iconPosition]}>
          <Text
            style={[styles.currentLocation, styles.currentLocationPosition]}
          >
            Current Location
          </Text>
        </View>
        <Text style={[styles.dhakaBangladesh, styles.currentLocationPosition]}>
          Ariana , TN
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  currentLocationPosition: {
    textAlign: "center",
    color: Color.colorBlack,
    top: "50%",
    position: "absolute",
  },
  menuAltIcon: {
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  notificationBellIcon: {
    top: 3,
    left: 292,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  currentLocation: {
    marginTop: -7.45,
    marginLeft: -38.5,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.abelRegular,
    opacity: 0.7,
    left: "50%",
  },
  currentLocationWrapper: {
    height: "44.47%",
    width: "87.7%",
    top: "0%",
    right: "5.74%",
    bottom: "55.53%",
    left: "6.56%",
  },
  dhakaBangladesh: {
    marginTop: 4.5,
    left: "24.59%",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.actorRegular,
  },
  frameParent: {
    marginLeft: -60.5,
    top: 6,
    backgroundColor: Color.colorWhite,
    width: 122,
    height: 47,
    left: "50%",
  },
  menuAltParent: {
    marginLeft: -157.5,
    top: 48,
    width: 315,
    height: 53,
    left: "50%",
    position: "absolute",
  },
});

export default MinHeader;

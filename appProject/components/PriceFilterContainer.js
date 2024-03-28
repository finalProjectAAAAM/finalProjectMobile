import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import GroupPackeges from "./GroupPackeges";
import PriceRangeContainer from "./PriceRangeContainer";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const PriceFilterContainer = () => {
  return (
    <View style={styles.frameThePackagesInner}>
      <View style={styles.rectangleParent}>
        <GroupPackeges />
        <PriceRangeContainer
          vacationPackageType="Family : packages "
          durationOptions="From 1 to 14  days"
          priceRangeText="EUR 50"
        />
        <Image
          style={styles.iconlysharplight3User}
          contentFit="cover"
          source={require("../assets/iconlysharplight3-user.png")}
        />
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/ellipse-761.png")}
        />
        <Text style={styles.text}>25</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconlysharplight3User: {
    top: 8,
    left: 307,
    width: 24,
    height: 24,
    position: "absolute",
  },
  frameChild: {
    top: 4,
    left: 15, 
    width: 26,
    height: 26,
    opacity: 0.2,
    position: "absolute",
  },
  text: {
    top: 10,
    left: 20,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    top: 0,
    left: 0,
    width: 346,
    position: "absolute",
    height: 186,
  },
  frameThePackagesInner: {
    width: 339,
    height: 186,
  },
});

export default PriceFilterContainer;

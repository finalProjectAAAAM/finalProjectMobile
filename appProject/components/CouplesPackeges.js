import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { Border } from "../GlobalStyles";

const CouplesPackeges = () => {
  return (
    <Image
      style={styles.frameChild}
      contentFit="cover"
      source={require("../assets/rectangle-41051.png")}
    />
  );
};

const styles = StyleSheet.create({
  frameChild: {
    position: "absolute",
    top: -14,
    left: -12,
    borderRadius: Border.br_xs,
    width: 370,
    height: 214,
  },
});

export default CouplesPackeges;

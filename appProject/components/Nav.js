import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Nav = () => {
  return <View style={styles.navBarChild} />;
};

const styles = StyleSheet.create({
  navBarChild: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: Color.colorWhite,
    width: 393,
    height: 84,
  },
});

export default Nav;

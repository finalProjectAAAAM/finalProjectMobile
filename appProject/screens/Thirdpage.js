import * as React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Thirdpage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.firstPage}>
      <Image
        style={styles.firstPageChild}
        contentFit="cover"
        source={require("../assets/group-333311.png")}
      />
      <View style={styles.baseParent}>
        <Image
          style={styles.baseIcon}
          contentFit="cover"
          source={require("../assets/base2.png")}
        />
        <View style={[styles.directional, styles.titleLayout]}>
          <Pressable
            style={[styles.next, styles.nextPosition]}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={[styles.next1, styles.next1Typo]}>Next</Text>
          </Pressable>
          <Pressable
            style={styles.skip}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={[styles.skip1, styles.next1Typo]}>Skip</Text>
          </Pressable>
          <Image
            style={styles.dotIcon}
            contentFit="cover"
            source={require("../assets/dot2.png")}
          />
        </View>
        <View style={[styles.title, styles.titleLayout]}>
          <Text
            style={[styles.buildingBetterWork, styles.createAUniqueFlexBox]}
          >
            {" "}
            To Look Up More Events or Activities Nearby By Map
          </Text>
          <Text
            style={[styles.createAUnique, styles.createAUniqueFlexBox]}
          >{` In publishing and graphic design, Lorem is a placeholder text commonly `}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleLayout: {
    width: 309,
    position: "absolute",
  },
  nextPosition: {
    width: 116,
    top: 0,
    position: "absolute",
  },
  next1Typo: {
    display: "flex",
    color: Color.colorWhite,
    fontFamily: FontFamily.actorRegular,
    fontSize: FontSize.size_lg,
    lineHeight: 34,
    alignItems: "center",
  },
  createAUniqueFlexBox: {
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.alatsiRegular,
    display: "flex",
    color: Color.colorWhite,
    width: 309,
    alignItems: "center",
  },
  firstPageChild: {
    maxWidth: "100%",
    height: 507,
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
  },
  baseIcon: {
    width: 400,

    height: 330,
   
  },
  next1: {
    textAlign: "right",
    width: 116,
    top: 0,
    position: "absolute",
    left: 0,
  },
  next: {
    left: 193,
    height: 34,
  },
  skip1: {
    textAlign: "left",
    width: 38,
    opacity: 0.5,
  },
  skip: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  dotIcon: {
    top: 20,
    left: 134,
    width: 42,
    height: 8,
    position: "absolute",
  },
  directional: {
    top: 266,
    left: 42,
    height: 34,
  },
  buildingBetterWork: {
    fontSize: FontSize.size_3xl,
    lineHeight: 34,
    textAlign: "center",
    fontFamily: FontFamily.alatsiRegular,
  },
  createAUnique: {
    fontSize: FontSize.size_mini,
    lineHeight: 25,
    opacity: 0.8,
    marginTop: 27,
  },
  title: {
    top: 89,
    left: 41,
  },
  baseParent: {
    marginTop :30,
    justifyContent:"center"
  },
  firstPage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 852,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
  },
});

export default Thirdpage;

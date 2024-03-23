import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const DaysOfferForPackage = () => {
  return (
    <View style={styles.groupDay1Parent}>
      <View style={[styles.groupDay1, styles.groupPosition1]}>
        <View style={styles.groupDay1Child} />
        <Text style={styles.day1}>Day 1</Text>
      </View>
      <View style={[styles.groupDay11, styles.groupPosition1]}>
        <View style={styles.groupDay1Child} />
        <Text style={styles.day1}>Day 4</Text>
      </View>
      <View style={[styles.groupDay12, styles.groupPosition1]}>
        <View style={styles.groupDay1Child} />
        <Text style={styles.day1}>Day 3</Text>
      </View>
      <View style={[styles.groupDay13, styles.groupPosition1]}>
        <View style={styles.groupDay1Child} />
        <Text style={styles.day1}>Day 2</Text>
      </View>
      <View style={[styles.groupDay14, styles.groupPosition]}>
        <View style={styles.groupDay1Child} />
        <Text style={styles.day1}>Day 5</Text>
      </View>
      <View style={[styles.groupDay15, styles.groupPosition]}>
        <View style={styles.groupDay1Child} />
        <Text style={styles.day1}>Day 8</Text>
      </View>
      <View style={[styles.groupDay16, styles.groupPosition]}>
        <View style={styles.groupDay1Child} />
        <Text style={styles.day1}>Day 7</Text>
      </View>
      <View style={[styles.groupDay17, styles.groupPosition]}>
        <View style={styles.groupDay1Child} />
        <Text style={styles.day1}>Day 6</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition1: {
    bottom: "7.69%",
    width: "11.05%",
    height: "92.31%",
    top: "0%",
    position: "absolute",
  },
  groupPosition: {
    top: "7.69%",
    width: "11.05%",
    height: "92.31%",
    bottom: "0%",
    position: "absolute",
  },
  groupDay1Child: {
    height: "80.56%",
    width: "100%",
    top: "11.11%",
    bottom: "8.33%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorLightskyblue,
    right: "0%",
    left: "0%",
    position: "absolute",
  },
  day1: {
    marginTop: -18,
    marginLeft: -16.5,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_xs,
    lineHeight: 36,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  groupDay1: {
    right: "88.95%",
    left: "0%",
  },
  groupDay11: {
    right: "50.63%",
    left: "38.32%",
  },
  groupDay12: {
    right: "63.78%",
    left: "25.17%",
  },
  groupDay13: {
    right: "76.36%",
    left: "12.59%",
  },
  groupDay14: {
    right: "38.32%",
    left: "50.63%",
  },
  groupDay15: {
    left: "88.95%",
    right: "0%",
  },
  groupDay16: {
    right: "13.15%",
    left: "75.8%",
  },
  groupDay17: {
    right: "25.73%",
    left: "63.22%",
  },
  groupDay1Parent: {
    height: "100%",
    width: "195.36%",
    right: "-95.36%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
});

export default DaysOfferForPackage;

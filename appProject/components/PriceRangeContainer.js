import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const PriceRangeContainer = ({
  vacationPackageType,
  durationOptions,
  priceRangeText,
}) => {
  return (
    <View style={[styles.frameParent, styles.parentFlexBox]}>
      <View style={styles.familyPackagesParent}>
        <Text style={[styles.familyPackages, styles.eur50Typo]}>
          {vacationPackageType}
        </Text>
        <View style={[styles.vectorParent, styles.parentFlexBox]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Text style={[styles.sousse, styles.sousseTypo]}> Sousse</Text>
        </View>
        <View style={[styles.vectorParent, styles.parentFlexBox]}>
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Text style={[styles.sousse, styles.sousseTypo]}>
            {durationOptions}
          </Text>
        </View>
      </View>
      <View style={styles.startFromParent}>
        <Text style={[styles.startFrom, styles.sousseTypo]}>Start from</Text>
        <Text style={[styles.eur50, styles.eur50Typo]}>{priceRangeText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  eur50Typo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  sousseTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorWhite,
  },
  familyPackages: {
    fontSize: FontSize.size_xs,
  },
  vectorIcon: {
    width: 10,
    height: 12,
  },
  sousse: {
    marginLeft: 8,
    fontSize: FontSize.size_xs,
  },
  vectorParent: {
    marginTop: 6,
  },
  vectorIcon1: {
    width: 11,
    height: 12,
  },
  familyPackagesParent: {
    width: 207,
  },
  startFrom: {
    fontSize: FontSize.size_3xs,
  },
  eur50: {
    fontSize: FontSize.size_base,
    marginTop: 4,
  },
  startFromParent: {
    marginLeft: 20,
  },
  frameParent: {
    position: "absolute",
    top: 88,
    left: 7,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslateblue,
    width: 332,
    height: 90,
    justifyContent: "center",
    padding: Padding.p_5xs,
  },
});

export default PriceRangeContainer;

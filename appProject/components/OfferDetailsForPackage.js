import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const OfferDetailsForPackage = () => {
  return (
    <View style={styles.frameParent}>
      <View style={[styles.groupParent, styles.frameChildLayout]}>
        <Image
          style={[styles.frameChild, styles.frameChildPosition]}
          contentFit="cover"
          source={require("../assets/group-33631.png")}
        />
        <View style={[styles.camelRidingParent, styles.frameChildPosition]}>
          <Text
            style={[styles.camelRiding, styles.priceFlexBox]}
          >{`Camel riding     `}</Text>
          <Text style={[styles.price, styles.priceFlexBox]}>Price:15$</Text>
        </View>
        <Image
          style={styles.dellIcon}
          contentFit="cover"
          source={require("../assets/dell.png")}
        />
        <Image
          style={styles.editFillIcon}
          contentFit="cover"
          source={require("../assets/edit-fill.png")}
        />
      </View>
      <View style={[styles.groupContainer, styles.groupPosition]}>
        <Image
          style={[styles.frameChild, styles.frameChildPosition]}
          contentFit="cover"
          source={require("../assets/group-336311.png")}
        />
        <View style={[styles.camelRidingParent, styles.frameChildPosition]}>
          <Text
            style={[styles.camelRiding, styles.priceFlexBox]}
          >{`Camel riding     `}</Text>
          <Text style={[styles.price, styles.priceFlexBox]}>Price:15$</Text>
        </View>
        <Image
          style={styles.dellIcon}
          contentFit="cover"
          source={require("../assets/dell.png")}
        />
        <Image
          style={styles.editFillIcon}
          contentFit="cover"
          source={require("../assets/edit-fill.png")}
        />
      </View>
      <View style={[styles.frameView, styles.groupPosition]}>
        <Image
          style={[styles.frameChild, styles.frameChildPosition]}
          contentFit="cover"
          source={require("../assets/group-336312.png")}
        />
        <View style={[styles.camelRidingParent, styles.frameChildPosition]}>
          <Text
            style={[styles.camelRiding, styles.priceFlexBox]}
          >{`Camel riding     `}</Text>
          <Text style={[styles.price, styles.priceFlexBox]}>Price:15$</Text>
        </View>
        <Image
          style={styles.dellIcon}
          contentFit="cover"
          source={require("../assets/dell.png")}
        />
        <Image
          style={styles.editFillIcon}
          contentFit="cover"
          source={require("../assets/edit-fill.png")}
        />
      </View>
      <View style={[styles.groupParent1, styles.groupPosition]}>
        <Image
          style={[styles.frameChild, styles.frameChildPosition]}
          contentFit="cover"
          source={require("../assets/group-33631.png")}
        />
        <View style={[styles.camelRidingParent, styles.frameChildPosition]}>
          <Text
            style={[styles.camelRiding, styles.priceFlexBox]}
          >{`Camel riding     `}</Text>
          <Text style={[styles.price, styles.priceFlexBox]}>Price:15$</Text>
        </View>
        <Image
          style={styles.dellIcon}
          contentFit="cover"
          source={require("../assets/dell.png")}
        />
        <Image
          style={styles.editFillIcon}
          contentFit="cover"
          source={require("../assets/edit-fill.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    height: 113,
    top: 0,
  },
  frameChildPosition: {
    left: "50%",
    marginLeft: -178.5,
    width: 357,
    position: "absolute",
  },
  priceFlexBox: {
    textAlign: "center",
    color: Color.colorWhite,
  },
  groupPosition: {
    left: 1,
    height: 113,
    width: 357,
    position: "absolute",
  },
  frameChild: {
    height: 113,
    top: 0,
    left: "50%",
    marginLeft: -178.5,
  },
  camelRiding: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 202,
  },
  price: {
    fontSize: FontSize.size_mini,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 145,
    marginLeft: 8,
  },
  camelRidingParent: {
    top: 78,
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    backgroundColor: Color.colorDarkslateblue,
    height: 35,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_5xs,
  },
  dellIcon: {
    top: 6,
    left: 326,
    width: 25,
    height: 25,
    position: "absolute",
  },
  editFillIcon: {
    top: 12,
    left: 18,
    width: 21,
    height: 21,
    position: "absolute",
  },
  groupParent: {
    left: 0,
    width: 357,
    height: 113,
    top: 0,
    position: "absolute",
  },
  groupContainer: {
    top: 138,
  },
  frameView: {
    top: 276,
  },
  groupParent1: {
    top: 414,
  },
  frameParent: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 358,
    height: 527,
    zIndex: 5,
    marginLeft: 30,
  },
});

export default OfferDetailsForPackage;

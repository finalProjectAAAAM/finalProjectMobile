import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const packageData = [
  {
    name: "Sea Fun",
    location: "Kantaoui Sousse",
    duration: "1 day",
    price: "EUR 50",
    imageSource: "https://shorturl.at/exKVX", // Replace with your image URL
  },
  {
    name: "Sea Fun",
    location: "Kantaoui Sousse",
    duration: "1 day",
    price: "EUR 50",
    imageSource: "https://shorturl.at/exKVX", // Replace with your image URL
  },
  {
    name: "Fun Games",
    location: "Khezama Ouest Sousse",
    duration: "3 days",
    price: "EUR 150",
    imageSource: "https://shorturl.at/exKVX", // Replace with your image URL
  },
];

const UserPackages = () => {
  return (
    <ScrollView
      style={styles.frameParent}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.frameScrollView1Content}
    >
      {packageData.map((pkg, index) => (
        <View key={index} style={styles.rectangleLayout}>
          <Image
            style={[styles.frameChild, styles.childPosition]}
            contentFit="cover"
            source={{ uri: pkg.imageSource }}
          />
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={styles.packageInfo}>
              <Text style={styles.packageName}>{`Package: ${pkg.name}`}</Text>
              <View style={styles.packageDetails}>
                <View style={[styles.locationParent, styles.frameGroupFlexBox]}>
                  <Image
                    style={styles.locationIcon}
                    contentFit="cover"
                    source={{ uri: pkg.imageSource }}       
                  />
                  <Text style={styles.packageLocation}>{pkg.location}</Text>
                </View>
                <View style={[styles.locationParent, styles.frameGroupFlexBox]}>
                  <Image
                    style={styles.calender1Icon}
                    contentFit="cover"
                    source={{ uri: pkg.imageSource }}
                  />
                  <Text style={styles.packageDuration}>{pkg.duration}</Text>
                </View>
              </View>
            </View>
            <View style={styles.packagePrice}>
              <Text style={styles.startFrom}>Start from</Text>
              <Text style={styles.price}>{pkg.price}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  frameScrollView1Content: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  childPosition: {
    left: 0,
    top: 0,
  },
  frameGroupFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  rectangleLayout: {
    marginBottom: 10,
    height: 186,
    width: 346,
  },
  frameChild: {
    borderRadius: Border.br_xs,
    position: "absolute",
    height: 186,
    width: 346,
  },
  packageInfo: {
    width: "50%",
  },
  packageName: {
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,
  },
  packageDetails: {
    marginTop: 6,
  },
  packageLocation: {
    marginLeft: 8,
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,
  },
  locationParent: {
    marginTop: 6,
  },
  calender1Icon: {
    width: 11,
    height: 12,
  },
  packageDuration: {
    marginLeft: 8,
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,
  },
  packagePrice: {
    marginLeft: 20,
  },
  startFrom: {
    fontSize: FontSize.size_3xs,
    color: Color.colorWhite,
  },
  price: {
    fontSize: FontSize.size_base,
    marginTop: 4,
    color: Color.colorWhite,
  },
  frameGroup: {
    top: 88,
    left: 7,
    backgroundColor: Color.colorDarkslateblue,
    width: 332,
    height: 90,
    justifyContent: "center",
    padding: Padding.p_5xs,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  frameParent: {
    marginTop: 5,
    width: "100%",
  },
});

export default UserPackages;

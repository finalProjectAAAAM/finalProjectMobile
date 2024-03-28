import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ScrollView, Pressable, Text } from "react-native";
import StoryCity from "../components/StoryCity";
import UserLOction from "../components/UserLOction";
import AllPackages from "../components/AllPackages";
import Nav from "../components/Nav";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <StoryCity />
      <View style={styles.loctionAndSide}>
        <Image
          style={[styles.menuAltIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/menu-alt.png")}
        />
        <Image
          style={[styles.notificationBellIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/notification-bell.png")}
        />
        <UserLOction />
      </View>
      <ScrollView
        style={styles.frameThePackagesWrapper}
        horizontal={false}
        indicatorStyle="default"
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <AllPackages />
      </ScrollView>
      <View style={styles.navBar}>
        <Nav />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  iconLayout1: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  navLayout: {
    height: 41,
    position: "absolute",
  },
  mapTypo: {
    textAlign: "center",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
  },
  iconLayout: {
    height: 26,
    width: 26,
    top: 0,
    position: "absolute",
  },
  mapPosition: {
    color: Color.colorGray,
    fontSize: FontSize.size_xs,
    left: 0,
    position: "absolute",
  },
  menuAltIcon: {
    left: 0,
    top: 0,
    height: 24,
    width: 24,
  },
  notificationBellIcon: {
    top: 3,
    left: 292,
  },
  loctionAndSide: {
    marginLeft: -157.5,
    top: 59,
    width: 315,
    height: 59,
    left: "50%",
    position: "absolute",
  },
  frameThePackagesWrapper: {
    top: 254,
    left: 20,
    position: "absolute",
    flex: 1,
  },
  explore: {
    color: "#3d50df",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    top: 27,
    left: 0,
    position: "absolute",
  },
  world2Icon: {
    left: 8,
  },
  exploreNav: {
    top: 24,
    left: 22,
    width: 42,
  },
  pinIcon: {
    left: 0,
  },
  map: {
    textAlign: "center",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    top: 27,
    color: Color.colorGray,
  },
  mapNav: {
    top: 23,
    left: 104,
    width: 26,
    height: 41,
    position: "absolute",
  },
  favoriteIcon: {
    marginLeft: -13,
    left: "50%",
  },
  wishlist: {
    top: 28,
    textAlign: "center",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
  },
  wishlistNav: {
    top: 22,
    left: 170,
    width: 44,
  },
  ticketUseIcon: {
    left: 3,
  },
  ticket1: {
    top: 30,
    textAlign: "center",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
  },
  ticket: {
    top: 21,
    left: 254,
    width: 33,
    height: 44,
    position: "absolute",
  },
  userCicrleLightIcon: {
    left: 2,
  },
  prfile1: {
    top: 33,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  prfile: {
    top: 18,
    left: 327,
    width: 30,
    height: 48,
    position: "absolute",
  },
  navBar: {
    top: 780,
    left: -2,
    width: 393,
    height: 84,
    position: "absolute",
  },
  home: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 864,
    overflow: "hidden",
    flex: 1,
  },
});

export default Home;

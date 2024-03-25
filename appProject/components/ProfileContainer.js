import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Nav from "./Nav";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const ProfileContainer = () => {
  return (
    <View style={styles.navBar}>
      <Nav />
      <View style={styles.exploreNavParent}>
        <View style={[styles.exploreNav, styles.navLayout]}>
          <Text style={[styles.explore, styles.mapTypo]}>Explore</Text>
          <Image
            style={[styles.world2Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/world-2.png")}
          />
        </View>
        <View style={styles.mapNav}>
          <Image
            style={[styles.pinIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/pin.png")}
          />
          <Text style={[styles.map, styles.mapPosition]}>Map</Text>
        </View>
        <View style={[styles.wishlistNav, styles.navLayout]}>
          <Image
            style={[styles.favoriteIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/favorite.png")}
          />
          <Text style={[styles.wishlist, styles.mapPosition]}>Wishlist</Text>
        </View>
        <View style={styles.ticket}>
          <Image
            style={[styles.ticketUseIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/ticket-use.png")}
          />
          <Text style={[styles.ticket1, styles.mapPosition]}>Ticket</Text>
        </View>
        <View style={styles.prfile}>
          <Image
            style={[styles.userCicrleLightIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/user-cicrle-light.png")}
          />
          <Text style={[styles.prfile1, styles.mapPosition]}>Prfile</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    color: Color.colorGray_100,
    fontSize: FontSize.size_xs,
    left: 0,
    position: "absolute",
  },
  explore: {
    color: Color.colorMediumslateblue_200,
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
    top: 6,
    width: 42,
    left: 0,
  },
  pinIcon: {
    left: 0,
  },
  map: {
    textAlign: "center",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    top: 27,
    color: Color.colorGray_100,
  },
  mapNav: {
    top: 5,
    left: 82,
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
    top: 4,
    left: 148,
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
    top: 3,
    left: 232,
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
    left: 305,
    width: 30,
    top: 0,
    height: 48,
    position: "absolute",
  },
  exploreNavParent: {
    top: 18,
    left: 22,
    width: 351,
    height: 48,
    position: "absolute",
  },
  navBar: {
    width: 393,
    height: 84,
    zIndex: 6,
    marginLeft: 30,
  },
});

export default ProfileContainer;

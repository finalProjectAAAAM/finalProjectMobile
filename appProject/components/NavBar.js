import React, { useState } from "react";

import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  Alert,
} from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Padding } from "../GlobalStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const navBar= () => {
  const navigation = useNavigation();

  const [estado, setEstado] = useState(false);
  onPressButton = () => {
    setEstado(!estado);
  };
  const onPressButtoncalendar = ()=>{
    navigation.navigate('calender')
  }
  return (
    <View style={styles.navBar}>
      <View style={styles.exploreNavParent}>
        <TouchableHighlight onPress={onPressButton}>
          <View style={[styles.exploreNav, styles.navLayout]}>
            <Text style={[styles.explore, styles.mapTypo]}>Explore</Text>
            <FontAwesome6
              name="earth-africa"
              size={24}
              color={estado ? Color.colorGray : Color.colorMediumslateblue}
              style={[styles.world2Icon, styles.iconLayout]}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPressButton}>
          <View style={styles.mapNav}>
            <Feather
              name="map-pin"
              size={26}
              color={ Color.colorGray}

              // color={estado ? Color.colorGray : Color.colorMediumslateblue}
            />
            <Text style={[styles.map, styles.mapPosition]}>Map</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPressButton}>
          <View style={[styles.wishlistNav, styles.navLayout]}>
            <AntDesign
              name="hearto"
              size={26}
              color={ Color.colorGray}

              // color={estado ? Color.colorGray : Color.colorMediumslateblue}
              style={[styles.favoriteIcon, styles.iconLayout]}
            />

            <Text style={[styles.wishlist, styles.mapPosition]}>Wishlist</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPressButtoncalendar}>
          <View style={styles.ticket}>
            <MaterialCommunityIcons
              name="calendar-account-outline"
              size={28}
              color={ Color.colorGray}

              // color={estado ? Color.colorGray : Color.colorMediumslateblue}
              style={[styles.ticketUseIcon, styles.iconLayout]}
            />

            <Text style={[styles.ticket1, styles.mapPosition]}>Calendar</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={onPressButton}>
        <View style={styles.prfile}>
          <FontAwesome6
            name="user-circle"
            size={26}
            color={ Color.colorGray}
            // color={estado ? Color.colorGray : Color.colorMediumslateblue}

            style={[
              styles.userCicrleLightIcon,
              styles.iconLayout,
            ]}
          />
          <Text style={[styles.prfile1, styles.mapPosition]}>Prfile</Text>
        </View>
        </TouchableHighlight>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  coloricon: { color: Color.colorGray },
  onClickColor: { color: Color.colorMediumslateblue },

  navLayout: {
    height: 45,
    position: "absolute",
  },
  mapTypo: {
    textAlign: "center",
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
  explore: {
    color: Color.colorMediumslateblue,
    fontSize: FontSize.size_xs,
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
    width: 45,
    left: 0,
  },
  pinIcon: {
    left: 0,
  },
  map: {
    textAlign: "center",
    fontStyle: "italic",
    top: 27,
    color: Color.colorGray,
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
    fontStyle: "italic",
  },
  wishlistNav: {
    top: 4,
    left: 148,
    width: 46,
  },
  ticketUseIcon: {
    left: 3,
  },
  ticket1: {
    top: 30,
    textAlign: "center",
    fontStyle: "italic",
  },
  ticket: {
    top: 3,
    left: 232,
    width: 45,
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
    position: "absolute",
    height: 48,
  },
  exploreNavParent: {
    width: 340,
    height: 48,
  },
  navBar: {
    backgroundColor: Color.colorWhite,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_lg,
    zIndex: 4,
    marginTop: 769,
  },
});




export default navBar;

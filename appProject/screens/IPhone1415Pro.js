import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import Packageofdays from "../components/Packageofdays";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const IPhone1415Pro = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone1415Pro26}>
      <View style={styles.iphone1415Pro26Inner}>
        <Packageofdays />
      </View>
      <View style={[styles.calender, styles.calenderLayout]}>
        <View style={[styles.calenderChild, styles.frameParentLayout]} />
        <Text style={styles.march}>March</Text>
        <Text style={[styles.text, styles.textTypo1]}>2024</Text>
        <View style={[styles.frameParent, styles.frameParentLayout]}>
          <View style={styles.component38Parent}>
            <View style={[styles.component38, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={styles.text1}>27</Text>
            </View>
            <View style={[styles.component37, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={styles.text1}>28</Text>
            </View>
            <View style={[styles.component37, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={[styles.text3, styles.textTypo]}>1</Text>
            </View>
            <View style={[styles.component37, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={[styles.text3, styles.textTypo]}>2</Text>
            </View>
            <View style={[styles.component37, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={[styles.text3, styles.textTypo]}>3</Text>
            </View>
            <View style={[styles.component37, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={[styles.text3, styles.textTypo]}>4</Text>
            </View>
          </View>
          <View style={styles.component12Parent}>
            <View style={[styles.component38, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={[styles.text3, styles.textTypo]}>5</Text>
            </View>
            <View style={[styles.component37, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={[styles.text3, styles.textTypo]}>6</Text>
            </View>
            <View style={[styles.component37, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={[styles.text3, styles.textTypo]}>7</Text>
            </View>
            <View style={[styles.component37, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={[styles.text3, styles.textTypo]}>8</Text>
            </View>
            <View style={[styles.component37, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={[styles.text3, styles.textTypo]}>9</Text>
            </View>
            <View style={[styles.component37, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={[styles.text3, styles.textTypo]}>10</Text>
            </View>
          </View>
          <View style={styles.component12Parent}>
            <View style={[styles.component38, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={[styles.text3, styles.textTypo]}>11</Text>
            </View>
            <View style={[styles.component37, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={[styles.text3, styles.textTypo]}>12</Text>
            </View>
            <View style={[styles.component37, styles.componentLayout]}>
              <View style={[styles.component16Child, styles.childPosition]} />
              <Text style={[styles.text15, styles.textTypo]}>13</Text>
            </View>
            <View style={[styles.component37, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={[styles.text3, styles.textTypo]}>14</Text>
            </View>
            <View style={[styles.component37, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={[styles.text3, styles.textTypo]}>15</Text>
            </View>
            <View style={[styles.component37, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={[styles.text3, styles.textTypo]}>16</Text>
            </View>
          </View>
          <View style={styles.component12Parent}>
            <View style={[styles.component38, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={[styles.text3, styles.textTypo]}>17</Text>
            </View>
            <View style={[styles.component37, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={[styles.text3, styles.textTypo]}>18</Text>
            </View>
            <View style={[styles.component37, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={[styles.text3, styles.textTypo]}>19</Text>
            </View>
            <View style={[styles.component37, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={[styles.text3, styles.textTypo]}>20</Text>
            </View>
            <View style={[styles.component37, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={[styles.text3, styles.textTypo]}>21</Text>
            </View>
            <View style={[styles.component37, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={[styles.text3, styles.textTypo]}>22</Text>
            </View>
          </View>
          <View style={styles.component12Parent}>
            <View style={[styles.component38, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={[styles.text3, styles.textTypo]}>23</Text>
            </View>
            <View style={[styles.component37, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={[styles.text3, styles.textTypo]}>24</Text>
            </View>
            <View style={[styles.component37, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={[styles.text3, styles.textTypo]}>25</Text>
            </View>
            <View style={[styles.component37, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={[styles.text3, styles.textTypo]}>26</Text>
            </View>
            <View style={[styles.component37, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={[styles.text3, styles.textTypo]}>27</Text>
            </View>
            <View style={[styles.component37, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={[styles.text3, styles.textTypo]}>28</Text>
            </View>
          </View>
          <View style={styles.component12Parent}>
            <View style={[styles.component38, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={[styles.text3, styles.textTypo]}>29</Text>
            </View>
            <View style={[styles.component37, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={[styles.text3, styles.textTypo]}>30</Text>
            </View>
            <View style={[styles.component37, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={[styles.text3, styles.textTypo]}>31</Text>
            </View>
            <View style={[styles.component37, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={styles.text1}>1</Text>
            </View>
            <View style={[styles.component37, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={styles.text1}>2</Text>
            </View>
            <View style={[styles.component37, styles.componentLayout]}>
              <View style={[styles.component38Child, styles.childPosition]} />
              <Text style={styles.text1}>3</Text>
            </View>
          </View>
        </View>
        <Image
          style={styles.changeMonthIcon}
          contentFit="cover"
          source={require("../assets/change-month.png")}
        />
      </View>
      <Text style={[styles.calendar, styles.textTypo1]}>Calendar</Text>
      <Pressable style={styles.back} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/back.png")}
        />
      </Pressable>
      <View style={[styles.navOfMainPage, styles.navPosition]}>
        <Image
          style={[styles.navOfMainPageChild, styles.navPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-83.png")}
        />
        <View style={[styles.iconlyboldcalendarParent, styles.parentPosition]}>
          <Image
            style={[styles.iconlyboldcalendar, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/iconlyboldcalendar.png")}
          />
          <Text style={[styles.events, styles.mapTypo]}>Events</Text>
        </View>
        <View style={styles.compassParent}>
          <Image
            style={styles.compassIcon}
            contentFit="cover"
            source={require("../assets/compass.png")}
          />
          <Text style={[styles.explore, styles.mapTypo]}>Explore</Text>
        </View>
        <View style={[styles.prfileParent, styles.parentPosition]}>
          <Text style={[styles.events, styles.mapTypo]}>Prfile</Text>
          <Image
            style={[styles.groupChild, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/group-33337.png")}
          />
        </View>
        <View style={[styles.mapParent, styles.parentPosition]}>
          <Text style={[styles.map, styles.mapTypo]}>Map</Text>
          <Image
            style={[styles.groupItem, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/group-33338.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calenderLayout: {
    height: 288,
    width: 346,
  },
  frameParentLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  textTypo1: {
    letterSpacing: 0.8,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  componentLayout: {
    width: 27,
    height: 27,
  },
  childPosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  textTypo: {
    left: "18.52%",
    top: "7.41%",
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0.5,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  iconLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  navPosition: {
    width: 393,
    left: "50%",
    marginLeft: -196.5,
    position: "absolute",
  },
  parentPosition: {
    bottom: "25.58%",
    top: "18.14%",
    height: "56.28%",
    opacity: 0.2,
    position: "absolute",
  },
  groupChildPosition: {
    bottom: "44.01%",
    height: "55.99%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  mapTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    fontSize: FontSize.size_xs,
    height: "39.05%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  iphone1415Pro26Inner: {
    top: 391,
    left: 24,
    width: 345,
    height: 367,
    position: "absolute",
  },
  calenderChild: {
    left: 0,
    top: 0,
    height: 288,
    width: 346,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xl,
  },
  march: {
    top: 18,
    left: 18,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0.5,
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
    position: "absolute",
  },
  text: {
    top: 8,
    left: 72,
  },
  component38Child: {
    backgroundColor: Color.colorGray_200,
    bottom: "0%",
    height: "100%",
    right: "0%",
    left: "0%",
    width: "100%",
  },
  text1: {
    opacity: 0.2,
    left: "18.52%",
    top: "7.41%",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0.5,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  component38: {
    height: 27,
  },
  component37: {
    marginLeft: 32,
    height: 27,
  },
  text3: {
    color: Color.colorBlack,
    left: "18.52%",
    top: "7.41%",
  },
  component38Parent: {
    flexDirection: "row",
  },
  component12Parent: {
    marginTop: 8,
    flexDirection: "row",
  },
  component16Child: {
    backgroundColor: "#333",
    bottom: "0%",
    height: "100%",
    right: "0%",
    left: "0%",
    width: "100%",
  },
  text15: {
    color: Color.colorWhite,
  },
  frameParent: {
    top: 65,
    left: 11,
  },
  changeMonthIcon: {
    top: 20,
    left: 286,
    width: 39,
    height: 15,
    position: "absolute",
  },
  calender: {
    top: 99,
    left: 23,
    position: "absolute",
  },
  calendar: {
    top: 41,
    left: 87,
  },
  icon: {
    maxHeight: "100%",
    height: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  back: {
    left: "8.91%",
    top: "5.75%",
    right: "85.5%",
    bottom: "91.67%",
    width: "5.6%",
    height: "2.58%",
    position: "absolute",
  },
  navOfMainPageChild: {
    maxHeight: "100%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    width: 393,
    left: "50%",
    marginLeft: -196.5,
  },
  iconlyboldcalendar: {
    width: "62.19%",
    right: "19.02%",
    left: "18.79%",
  },
  events: {
    color: Color.colorDarkslategray_100,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    fontSize: FontSize.size_xs,
    height: "39.05%",
    top: "60.95%",
  },
  iconlyboldcalendarParent: {
    width: "11.37%",
    right: "59.36%",
    left: "29.26%",
  },
  compassIcon: {
    left: 12,
    width: 28,
    height: 27,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  explore: {
    color: Color.colorPrimaryBlue,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    fontSize: FontSize.size_xs,
    height: "39.05%",
    top: "60.95%",
  },
  compassParent: {
    top: 16,
    left: 36,
    width: 51,
    height: 48,
    position: "absolute",
  },
  groupChild: {
    width: "79.43%",
    right: "10.29%",
    left: "10.29%",
  },
  prfileParent: {
    width: "8.91%",
    right: "10.69%",
    left: "80.41%",
  },
  map: {
    top: "61.16%",
    color: Color.colorDarkslategray_100,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    fontSize: FontSize.size_xs,
    height: "39.05%",
  },
  groupItem: {
    height: "56.2%",
    width: "95.86%",
    right: "4.14%",
    bottom: "43.8%",
    maxHeight: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  mapParent: {
    width: "7.38%",
    right: "30.28%",
    left: "62.34%",
  },
  navOfMainPage: {
    height: "10.09%",
    top: "90.02%",
    bottom: "-0.12%",
  },
  iphone1415Pro26: {
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone1415Pro;

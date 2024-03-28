import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import PriceFilterContainer from "./PriceFilterContainer";
import CouplesPackeges from "./CouplesPackeges";
import PriceRangeContainer from "./PriceRangeContainer";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";
import {useState , useEffect} from "react"
import axios from 'axios';

const AllPackages = () => {
  const [cities, setcities]=useState([])

  useEffect(()=>{
    axios.get('http://192.168.1.13:3001/cp/getAllpackges')
    .then(response => {
      console.log(response.data ,"workffffffffffff");
      setcities(response.data)
    })
    .catch(error => {
      console.error("Error fetching data: ", error);
    });
  },[])
  // console.log(cities[0].maincategories)
  return (
    <View style={styles.frameThePackages}>
      <PriceFilterContainer />
      <View style={[styles.frameThePackagesInner, styles.frameLayout]}>
        <View style={[styles.rectangleParent, styles.rectangleLayout]}>
          <CouplesPackeges />
          <PriceRangeContainer
            vacationPackageType="Couples : packages "
            durationOptions="From 1 to 30  days"
            priceRangeText="EUR 100"
          />
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/ellipse-761.png")}
          />
          <Text style={styles.text}>25</Text>
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={require("../assets/group-33496.png")}
          />
        </View>
      </View>
      <View style={styles.frameLayout}>
        <View style={[styles.frameWrapper, styles.frameWrapperPosition]}>
          <View style={styles.rectangleLayout}>
            <Image
              style={styles.frameInner}
              contentFit="cover"
              source={require("../assets/rectangle-4105.png")}
            />
            <PriceRangeContainer
              vacationPackageType="Solo : packages "
              durationOptions="From 1 to 14  days"
              priceRangeText="EUR 30"
            />
           
            <Text style={styles.text}>25</Text>
          </View>
        </View>
        <Image
          style={styles.iconlysharplightprofile}
          contentFit="cover"
          source={require("../assets/iconlysharplightprofile.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    marginTop: 51,
    height: 186,
    width: 339,
  },
  rectangleLayout: {
    width: 346,
    height: 186,
  },
  frameWrapperPosition: {
    top: 0,
    position: "absolute",
  },
  frameChild: {
    top: 4,
    left: 15,
    width: 26,
    height: 26,
    opacity: 0.2,
    position: "absolute",
  },
  text: {
    top: 10,
    left: 20,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  frameItem: {
    top: 3,
    left: 302,
    width: 37,
    height: 37,
    position: "absolute",
  },
  rectangleParent: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameThePackagesInner: {
    borderRadius: Border.br_xs,
  },
  frameInner: {
    top: -14,
    left: -12,
    width: 370,
    height: 214,
    position: "absolute",
    borderRadius: Border.br_xs,
  },
  frameWrapper: {
    marginLeft: -169.5,
    left: "50%",
    flexDirection: "row",
    width: 339,
    top: 0,
  },
  iconlysharplightprofile: {
    height: "13.01%",
    width: "7.08%",
    top: "4.25%",
    right: "0.88%",
    bottom: "82.74%",
    left: "92.04%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  frameThePackages: {
    height: 526,
    alignItems: "center",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    borderRadius: Border.br_xs,
  },
});

export default AllPackages;

import React from "react";
import { ScrollView, StyleSheet, Text, View,TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import {IP} from "../IP.json";
// _storeData = async (data) => {
//   try {
//     const jsonData = JSON.stringify(data);
//     await AsyncStorage.setItem(
//       'packageactivity',
//       jsonData
//     );
//   } catch (error) {
//     console.error('Error saving data:', error);
//   }
// };


const UserPackage = ({data}) => {
  const getpackagedetailes =async(packageid)=>{
    try{
      console.log(packageid);
      const result =await axios.get(`http://${IP}:3001/cp/getpackage/${packageid}`)
      console.log(result.data,'res');
    }
    catch(error){
      console.error('Error ');
    }
  }
  console.log(data,'package data');
  return (
    <ScrollView
      style={styles.frameParent}
      horizontal={true}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={styles.frameScrollView1Content}
    >
      {data?.map((pkg, index) => (
        <View key={pkg.idpackage} style={styles.rectangleLayout} >
          <TouchableOpacity onPress={() => getpackagedetailes(pkg.idpackage)}>
          <Image
            style={[styles.frameChild, styles.childPosition]}
            contentFit="cover"
            source={pkg.imagemain}
          />
          </TouchableOpacity>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={styles.packageInfo}>
              <Text style={styles.packageName}>{`Package: ${pkg.name}`}</Text>
              <View style={styles.packageDetails}>
                <View style={[styles.locationParent, styles.frameGroupFlexBox]}>
                  <Image
                    style={styles.locationIcon}
                    contentFit="cover"
                    source={require("../assets/location.png")}
                  />
                  <Text style={styles.packageLocation}>{pkg.location}</Text>  
                </View>
                <View style={[styles.locationParent, styles.frameGroupFlexBox]}>
                  <Image
                    style={styles.calender1Icon}
                    contentFit="cover"
                    source={require("../assets/calender-1.png")}
                  />
                  <Text style={styles.packageDuration}>{pkg.duration}</Text>
                </View>
              </View>
            </View>
            <View style={styles.packagePrice}>
              <Text style={styles.startFrom}>Start from</Text>
              <Text style={styles.price}>EUR {pkg.price}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  frameScrollView1Content: {
    flexDirection: "row",
    alignItems: "flex-start",
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
    margin:5,
    height: 186,
    width: 346,
  },
  packageContainer: {
    marginRight: 10, // Adjust the gap between images
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
    marginTop:5,
    width: "100%",
  },
});

export default UserPackage;

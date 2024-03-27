import React from "react";
import { StyleSheet, View, Text,TouchableOpacity} from "react-native";
import { Image } from "expo-image";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";
import axios from "axios";
import { IP } from "../IP.json";

const Packageofdays = ({ data, selectedFormatted }) => {
  const formatDate = (dateString) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date(dateString);
    const month = months[date.getMonth()];
    const day = date.getDate();
    return `${month.toUpperCase()} ${day}`;
  };
  const getpackagedetails =async()=>{
    try{
      const result = await axios.get(`http://${IP}:3001/cp/getpackage/1`)
    }
    catch(err){
      console.log('err in geting package details ' , err);
    }
  }
  const handlePress = (id) => {
    console.log("Pressed item ID:", id);
  };

   // i need now to redirect to the package details  !! 
   
  return (
    <View style={styles.groupParent}>
      {data?.map((item, index) => (
        <TouchableOpacity 
          key={item.idpackage} 
          onPress={() => handlePress(item.idpackage)}
          activeOpacity={0.7} 
        >
          <View style={[styles.rectangleGroup, styles.rectangleParentLayout]} >
            <View style={[styles.groupItem, styles.groupLayout]}>
              <Text style={[styles.mar13, styles.mar13Typo]}>{formatDate(item.startday)}</Text>
            </View>
            <Text style={[styles.partyHouseAll, styles.mar13Typo]}>
              {item.name}
            </Text>
            <Image
              style={[styles.groupInner, styles.am1230Position]}
              contentFit="cover"
              source={item.imagemain}
            />
            <Text style={[styles.am1230, styles.am1230Position]}>
              {item.location}   -  {item.maincategory}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};


const styles = StyleSheet.create({
  groupParent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  rectangleGroup: {
    marginTop: 12,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorLavender,
    width: 278,
    height: 69,
    position: "relative",
  },
  rectangleParentLayout: {
    height: 69,
    width: 300,
  },
  groupLayout: {
    borderRadius: Border.br_3xs,
    height: 69,
    width: 69,
    left: 0,
    top: 0,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  groupItem: {
    backgroundColor: Color.colorLightskyblue,
  },
  partyHouseAll: {
    top: 28,
    left: 76,
    fontSize: FontSize.size_sm,
    letterSpacing: 0.4,
    color: Color.colorWhite,
    position: "absolute",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  groupInner: {
    left: 220,
    width: 46,
    height: 46,
    position: "absolute",
    borderRadius: 23,
  },
  am1230: {
    left: 75,
    top: 12,
    fontSize: FontSize.size_3xs,  
    letterSpacing: 0.3,
    color: 'red',
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  am1230Position: {
    top: 12,
    position: "absolute",
  },
  mar13Typo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorMediumslateblue_100,
    fontSize: FontSize.size_mini,
  },
});

export default Packageofdays;

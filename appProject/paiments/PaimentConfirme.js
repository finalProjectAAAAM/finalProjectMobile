import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import {IP} from "../IP.json"
import axios from "axios";
const PaimnetConfirme = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.navigate("SeeOackages");
  };
  const createorder = async ()=>{
    try{
      const response = await axios.post(`http://${IP}:3001/Order/create`, {

        // need to get the id user and the id package
          user_id: 6,
          package_id: 1,
          status: "confirmed",
          amount: 50.99,
          qrcode: "xyz789"
      
      })
      if (response.status === 200) {
        handleBack();
      }
    }
    catch(error){
      console.log(error, 'error in creating order');
    }
  }
  return (
    <View style={styles.PaimnetConfirme3}>
    <Pressable onPress={handleBack} style={styles.backIconPressable}>
  <Image
    style={styles.backIconImage}
    contentFit="cover"
    source={require("../assets/back1.png")}
  /> 
</Pressable>
      <View style={styles.PaimnetConfirme3Child} />
      <Pressable style={[styles.rectangleParent, styles.groupChildLayout]} onPress={createorder}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.viewEReceipt, styles.goToQrTypo]}>
          View E-Receipt
        </Text>
      </Pressable>
      <Text style={[styles.goToQr, styles.goToQrTypo]}>Go to Qr</Text>
      <Text style={[styles.congratutions, styles.congratutionsTypo]}>
        Congratutions
      </Text>
      <Text
        style={[styles.youHaveSuccessfullyContainer, styles.congratutionsTypo]}
      >
        <Text style={styles.youHaveSuccessfullyContainer1}>
          <Text style={styles.youHaveSuccessfully}>
            You have successfully made payment
          </Text>
        </Text>
      </Text>
      <Image
        style={styles.checkFillIcon}
        contentFit="cover"
        source={require("../assets/check-fill.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 50,
    width: 329,
    position: "absolute",
  },
   backIconPressable: {
    position: 'absolute',
    top: 70,
    left: 20,
    padding: 10,
  },
  backIconImage: {
    width: 30,
    height: 30,
  },
  goToQrTypo: {
    textAlign: "center",
    fontFamily: FontFamily.alataRegular,
    lineHeight: 25,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  congratutionsTypo: {
    fontFamily: FontFamily.amiriQuranColored,
    textAlign: "center",
    lineHeight: 25,
    position: "absolute",
  },
  backIcon: {
    height: "2.58%",
    width: "5.6%",
    top: "5.75%",
    right: "85.5%",
    bottom: "91.67%",
    left: "8.91%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  PaimnetConfirme3Child: {
    top: 712,
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: 393,
    height: 140,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    borderRadius: 25,
    backgroundColor: Color.colorMediumslateblue_100,
    left: 0,
  },
  viewEReceipt: {
    top: 13,
    left: 107,
    color: Color.colorWhite,
  },
  rectangleParent: {
    top: 731,
    left: 32,
  },
  goToQr: {
    marginLeft: -35.5,
    top: 798,
    color: Color.colorMediumslateblue_100,
    left: "50%",
  },
  congratutions: {
    marginLeft: -97.5,
    top: 406,
    fontSize: 27,
    letterSpacing: 1,
    color: Color.colorBlack,
    left: "50%",
  },
  youHaveSuccessfully: {
    color: Color.colorDarkgray_100,
  },
  text: {
    color: "#9e9e9e",
  },
  youHaveSuccessfullyContainer1: {
    width: "100%",
  },
  youHaveSuccessfullyContainer: {
    top: 452,
    left: 29,
    fontSize: FontSize.size_sm,
    display: "flex",
    alignItems: "center",
    width: 314,
  },
  checkFillIcon: {
    marginLeft: -79.5,
    top: 217,
    width: 158,
    height: 158,
    left: "50%",
    position: "absolute",
  },
  PaimnetConfirme3: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default PaimnetConfirme;

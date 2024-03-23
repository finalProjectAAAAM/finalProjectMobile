import React, { useState, useCallback, useEffect, useMemo } from "react";
import { IP } from "../IP.json";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import Slider from "@react-native-community/slider";
import UserPackage from "../components/UserPackage";
import OurRecomendation from "../components/OurRecomendation";
import { useNavigation } from "@react-navigation/native";
import MinHeader from "../components/MinHeader";
import NavBar from "../components/NavBar";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import axios from "axios";

const SeeOackages = () => {
  const [data, setData] = useState([]);
  const [showFirstSlider, setShowFirstSlider] = useState(false);
  const navigation = useNavigation();
  const [value, setvalue] = useState(250);
  const [distance, setdistance] = useState(1);
  const [selectedImages, setSelectedImages] = useState({
    art: false,
  food: false,
  sport: false,
  camp: false,
  music: false,
  });
  const obj = {
    location: "Paris", 
    maincategory: "solo",
  };
  const handleBack = () => {
    navigation.navigate("Package");
  };
const [selectedItems, setSelectedItems] = useState([])
  useEffect(() => {
    axios
      .get(`http://${IP}:3001/cp/getpackages`, {
        params: {
          location: "Paris",
          maincategory: "solo",
        },
      })
      .then((response) => {
        console.log(response.data);

        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log("package data", data);
  const handleSliderChange = useCallback((value) => {
    setvalue(value);
    filterbyprice(value);
  }, []);
  console.log(value,'value');


  // the fiter option price option
  const filterbyprice = async (value) => {
    try {
      const response = await axios.get(`http://${IP}:3001/cp/getpackagesprice`, {
        params: {
          location: "Paris",
          maincategory: "solo",
          price: value,
          
        },
      });
  
      setData (response.data);
      // setData(result.filter((ele) => {
      //   return Object.keys(selectedImages).every((imageName) => {
      //     return selectedImages[imageName] && ele[imageName] === 1; // Only include packages with true values for selected images
      //   });
      // }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };        
  
  // filter by category option
  const handleSliderChange1 = useCallback((value) => {
    setdistance(value);
  }, []);
  const handleImagePress = useCallback(async (imageName) => {
    setSelectedImages((prevSelectedImages) => {
      const updatedSelectedImages = {
        ...prevSelectedImages,
        [imageName]: !prevSelectedImages[imageName],
      };
      
      fetchData(updatedSelectedImages);
  
      return updatedSelectedImages;
    });
  }, [fetchData]);
  
  const fetchData = async (selectedImages) => {
    try {
      const params = {
        location: "Paris",
        maincategory: "solo",
        price: value,
        ...selectedImages,
      };
  
      
      const response = await axios.get(`http://${IP}:3001/cp/getpackagespriceandcategory`, {
        params: params,
      });
      
      setData(response.data);
      
      console.log(params, "params in fetchData"); // Log params here
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  console.log("image selected ! ", selectedImages);
  

  const CustomImage = ({ source, onPress, style, isSelected }) => (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={[styles.image, style, isSelected ?   styles.selectedImage:null]}
        source={source}
      />
    </TouchableOpacity>
  );

  // Memoize the CustomImage components using useMemo
  const memoizedCustomImages = useMemo(
    () => (
      <View style={[styles.horizontalContainer]}>
  <CustomImage
    style={[
      styles.image,
      selectedImages["food"] ?  styles.selectedImage:null,
    ]}
    source={require("../assets/food.png")}
    onPress={() => handleImagePress("food")}
    isSelected={selectedImages["food"]}
  />
  <CustomImage
    style={[
      styles.image,
      selectedImages["art"] ?  styles.selectedImage:null,
    ]}
    source={require("../assets/art.png")}
    onPress={() => handleImagePress("art")}
    isSelected={selectedImages["art"]}
  />
  <CustomImage
    style={[
      styles.image,
      selectedImages["music"] ? styles.selectedImage:null,
    ]}
    source={require("../assets/music.png")}
    onPress={() => handleImagePress("music")}
    isSelected={selectedImages["music"]}
  /> 
  <CustomImage
    style={[
      styles.image,
      selectedImages["sport"] ? styles.selectedImage:null,
    ]}
    source={require("../assets/sport-button.png")}
    onPress={() => handleImagePress("sport")}
    isSelected={selectedImages["sport"]}
  />
  <CustomImage
    style={[
      styles.image,
      selectedImages["camp"] ?    styles.selectedImage:null,
    ]} // Add the lastImage style
    source={require("../assets/camp.png")}
    onPress={() => handleImagePress("camp")}
    isSelected={selectedImages["camp"]}
  />
</View>

    ),
    [selectedImages] // Only recompute when selectedImages change
  );

  return (
    <View style={[styles.seeOackages2, styles.iconLayout]}>
      <ScrollView
        style={styles.frameParent}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.groupLayout}>
          <View>
            {/* filter for budget  */}
            {showFirstSlider && ( 
              <View style={[styles.groupWrapper, styles.frameParent5Layout]}>
                <Pressable
                  style={[styles.rangeSliderParent, styles.compassIconLayout]}
                  onPress={() => navigation.navigate("SeeOackages")}
                >
                  <Slider
                    style={{ width: 300, height: 40 }}
                    minimumValue={50}
                    maximumValue={250}
                    minimumTrackTintColor="#2ba0d6"
                    maximumTrackTintColor="#2ba0d6"
                    step={10}
                    onValueChange={handleSliderChange}
                  />
                </Pressable>
                <Text style={[styles.budget, styles.kmsClr]}>Budget</Text>
                <View style={[styles.rectangleWrapper, styles.rectangleLayout]}>
                  <View style={[styles.rectangleView, styles.rectangleLayout]} />
                </View>
              </View>
            )}
          </View>
          {showFirstSlider && <Text style={[styles.text, styles.kmsPosition]}>{value}$</Text>}
        </View>
        <View style={[styles.groupFrame, styles.groupLayout]}>
          <View style={[styles.groupParent, styles.groupLayout]}>
            <View style={[styles.groupParent, styles.groupLayout]}>
              <View style={[styles.groupWrapper, styles.frameParent5Layout]}>
                <Pressable
                  style={[styles.rangeSliderParent, styles.compassIconLayout]}
                  onPress={() => navigation.navigate("SeeOackages")}
                  >
                    <Slider
                      style={{ width: 300, height: 40 }}
                      minimumValue={1}
                      maximumValue={100}
                      minimumTrackTintColor="#2ba0d6"
                      maximumTrackTintColor="#2ba0d6"
                      step={1}
                      onValueChange={handleSliderChange1}
                    />
                  </Pressable>
                  <View style={[styles.rectangleWrapper, styles.rectangleLayout]}>
                    <View
                      style={[styles.rectangleView, styles.rectangleLayout]}
                    />
                  </View>
                </View>
                <Text style={styles.budget}>Distance</Text>
                <View style={[styles.rectangleWrapper, styles.groupItemLayout]}>
                  <View style={[styles.groupItem, styles.groupItemLayout]} />
                </View>
              </View>
              <Text style={[styles.kms, styles.kmsPosition]}>{distance} km</Text>
            </View>
          </View>
  
          {memoizedCustomImages}
  
          <UserPackage data={data}/>
  
          <Text style={styles.ourRecommendations}>Our recommendations</Text>
          <OurRecomendation />
        </ScrollView>
        <Pressable
          style={styles.hiconLinearFilter8}
          onPress={() => navigation.navigate("SeePackages")}
        >
          <TouchableOpacity>
            <Pressable  onPress={() => {
              setShowFirstSlider(!showFirstSlider);
            }} >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/hicon--linear--filter-8.png")}
            />

            </Pressable>
          </TouchableOpacity>
        </Pressable>
        <MinHeader />
        <NavBar />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
    },
    horizontalContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      // Your existing image styles
      marginHorizontal: 5, // Adjust margin as needed
      marginBottom: 5, // Adjust margin as needed
    },
    selectedImage: {
      opacity: 0.5, // Adjust the opacity as needed
    },
    lastImage: {
      // Your existing lastImage styles
    },
    line: {
      width: "50%", // Adjust width as needed
      height: 1, // Adjust height as needed
      backgroundColor: "black", // Adjust color as needed
      marginTop: -10, // Adjust margin as needed
      marginBottom: -10, // Adjust margin as needed
    },
    selectedImage: {
      opacity: 0.5, // Adjust the opacity as needed
    },
    frameScrollViewContent: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    horizontalContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: 10, // Adjust vertical margin as needed
    },
    lastImage: {
      marginBottom: 17, // Adjust as needed
    },
    image: {
      width: 50,
      height: 50,
      marginRight: 10, // Increase right margin to create more space between images
    },
  
    iconLayout: {
      overflow: "hidden",
      width: "100%",
    },
  
    groupLayout: {
      height: 58,
      width: 316,
    },
    rangeLayout: {
      backgroundColor: Color.primary500,
      height: 6,
      borderRadius: Border.br_3xs,
    },
    groupChildLayout: {
      height: 21,
      width: 21,
      position: "absolute",
    },
  
    groupItemLayout: {
      height: 32,
      width: 72,
      top: 0,
      position: "absolute",
    },
    rectangleView: {
      borderRadius: Border.br_8xs,
      backgroundColor: Color.colorWhitesmoke,
      left: 0,
    },
    kmsPosition: {
      textAlign: "center",
      left: "50%",
      position: "absolute",
    },
    iconSpaceBlock: {
      marginLeft: 15,
      width: 44,
    },
    rangeSliderChild: {
      width: 70,
    },
    rangeSlider: {
      top: 9,
      left: 16,
      backgroundColor: Color.primary50,
      height: 6,
      borderRadius: Border.br_3xs,
      width: 300,
      position: "absolute",
    },
    groupChild: {
      top: 2,
      left: 0,
    },
    bulletIcon: {
      marginLeft: 137,
      borderRadius: Border.br_5xl,
      top: 0,
      left: "50%",
    },
    rangeSliderParent: {
      top: 35,
      height: 23,
      left: 0,
      width: 316,
      position: "absolute",
    },
    budget: {
      top: 6,
      fontSize: FontSize.size_mini,
      lineHeight: 20,
      fontWeight: "600",
      fontFamily: FontFamily.poppinsSemiBold,
      textAlign: "left",
      color: Color.colorBlack,
      left: 0,
      position: "absolute",
    },
    groupItem: {
      borderRadius: Border.br_8xs,
      backgroundColor: Color.colorWhitesmoke,
      left: 0,
    },
    rectangleWrapper: {
      left: 244,
    },
    groupParent: {
      left: 0,
      top: 0,
      position: "absolute",
    },
    text: {
      marginLeft: 110,
      fontFamily: FontFamily.poppinsRegular,
      fontSize: FontSize.size_xs,
      top: "50%",
      marginTop: -22,
      textAlign: "center",
      color: Color.colorBlack,
    },
    rangeSliderItem: {
      width: 300,
      backgroundColor: Color.primary500,
    },
    kms: {
      marginLeft: 100,
      fontFamily: FontFamily.poppinsRegular,
      fontSize: FontSize.size_xs,
      top: "50%",
      marginTop: -22,
      textAlign: "center",
      color: Color.colorBlack,
    },
    groupFrame: {
      marginTop: 12,
    },
  
    foodIcon: {
      height: 63,
      width: 44,
    },
    sportIcon: {
      height: 68,
    },
    musicIcon: {
      height: 67,
    },
  
    iconLayout2: {
      height: "100%",
      width: "100%",
    },
  
    foodParent: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 12,
    },
    kmsClr: {
      color: Color.colorBlack,
      position: "absolute",
    },
    rectangleLayout1: {
      height: 186,
      width: 346,
    },
    rectangleLayout: {
      height: 32,
      width: 72,
      top: 0,
      position: "absolute",
    },
    ourRecommendations: {
      fontSize: 30,
      lineHeight: 30,
      fontFamily: FontFamily.interRegular,
      color: Color.colorLightskyblue,
      width: 317,
      height: 26,
      marginTop: 12,
      textAlign: "left",
    },
    frameParent: {
      marginLeft: -190.5,
      top: 135,
      width: 382,
      maxWidth: 382,
      left: "50%",
      position: "absolute",
      flex: 1,
    },
    icon: {
      height: "100%",
    },
    hiconLinearFilter8: {
      left: 329,
      top: 98,
      width: 26,
      height: 26,
      position: "absolute",
    },
    seeOackages2: {
      backgroundColor: Color.colorWhite,
      height: 850,
      flex: 1,
    },
  });
  
  export default SeeOackages;
  
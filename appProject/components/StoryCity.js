import { ScrollView, StyleSheet, Text, View, Dimensions, ViewPropTypes } from "react-native";
import {useState , useEffect} from "react"
import Carousel from "react-native-snap-carousel";
import { Image } from "expo-image";
import axios from 'axios';
import {IP} from "../IP.json";
import PropTypes from "prop-types"; // Import PropTypes for other prop types if needed

import { Color, FontFamily, FontSize } from "../GlobalStyles";

const { width: screenWidth } = Dimensions.get("window");

const StoryCity = () => {
 

  const renderCityItem = ({ item, index }) => {
   
    return (
      <View style={styles.cityContainer}>
        <Image style={styles.cityImage} source={item.images} />
        <Text style={styles.cityText}>{item.namestate}</Text>
      </View>
    );
  };
  const [cities, setcities]=useState([])

  useEffect(()=>{
    axios.get(`http://${IP}:3001/cp/getAllcity`)
    .then(response => {
      console.log(response.data ,"workffffffffffff");
      setcities(response.data)
    })
    .catch(error => {
      console.error("Error fetching data: ", error);
    });
  },[])
  return (
    <View style={styles.container}>
      <Carousel
        data={cities}
        renderItem={renderCityItem}
        sliderWidth={screenWidth}
        itemWidth={100} // Adjust as needed
        loop
        autoplay
        autoplayDelay={2000} // Adjust delay as needed
        autoplayInterval={3000} // Adjust interval as needed
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cityContainer: {
    marginTop: 120, // Adjust marginTop as needed
    alignItems: "center",
  },
  cityImage: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
  },
  cityText: {
    marginTop: 5,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
});

// Use deprecated ViewPropTypes from the 'deprecated-react-native-prop-types' package
StoryCity.propTypes = {
  style: ViewPropTypes.style,
};

export default StoryCity;

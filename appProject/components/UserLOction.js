import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import * as Location from 'expo-location';

const UserLOction = () => {

  const [city, setCity] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      try {
        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        await fetchCityFromCoordinates(latitude, longitude);
      } catch (error) {
        console.error('Error getting location', error);
        setErrorMsg('Error getting location');
      }
    })();
  }, []);

  const fetchCityFromCoordinates = async (latitude, longitude) => {
    try {
      const address = await Location.reverseGeocodeAsync({ latitude, longitude });
      if (address && address.length > 0) {
        console.log(address)
        const userCity =  address[0].region;
        setCity(userCity);
      } else {
        setErrorMsg('City not found');
      }
    } catch (error) {
      console.error('Error fetching city', error);
      setErrorMsg('Error fetching city');
    }
  };

  return (
    <View style={[styles.frameParent, styles.frameParentPosition]}>
      <View style={[styles.currentLocationWrapper, styles.frameParentPosition]}>
        <Text style={[styles.currentLocation, styles.currentLocationPosition]}>
          Current Location
        </Text>
      </View>
      <Text style={[styles.dhakaBangladesh, styles.currentLocationPosition]}>
        {city}, TN
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  currentLocationPosition: {
    textAlign: "center",
    color: Color.colorBlack,
    top: "50%",
    position: "absolute",
  },
  currentLocation: {
    marginTop: -7.45,
    marginLeft: -38.5,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.abelRegular,
    opacity: 0.7,
    left: "50%",
  },
  currentLocationWrapper: {
    height: "44.47%",
    width: "87.7%",
    top: "0%",
    right: "5.74%",
    bottom: "55.53%",
    left: "6.56%",
  },
  dhakaBangladesh: {
    marginTop: 4.5,
    left: "24.59%",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.actorRegular,
  },
  frameParent: {
    marginLeft: -60.5,
    top: 6,
    backgroundColor: Color.colorWhite,
    width: 122,
    height: 47,
    left: "50%",
  },
});

export default UserLOction;

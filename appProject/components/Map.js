import React, { useEffect, useState,useRef} from "react";
import {StyleSheet,View,TouchableOpacity} from "react-native";
import * as Location from "expo-location";
import MapView, { Marker,PROVIDER_GOOGLE } from "react-native-maps";
import { IP } from "../IP.json";


const mapJson = 
[
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "color": "#c0bdd1"
      },
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "stylers": [
      {
        "color": "#eeb73f"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
]
export default function Map() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [initialRegion, setInitialRegion] = useState(null);
  const [offers, setOffers] = useState([]);
  const mapRef = useRef()
  const onRegionChange = (region) =>{
    console.log(region);
  }
  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location.coords);

      setInitialRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
    };
       
    getLocation();
}, []);


useEffect(() => {
  fetchOffers();
}, []);

const fetchOffers = async () => {
  try {
    const response = await fetch(`http://${IP}:3001/userProvider/getalloffer`);
    const data = await response.json();
    setOffers(data);
  } catch (error) {
    console.error('Error fetching offers:', error);
  }
};






  return (
    <View style={styles.container}>
      {initialRegion && (
        <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        onRegionChange={onRegionChange}
        initialRegion={initialRegion}
        customMapStyle={mapJson}
        showsUserLocation
        showsMyLocationButton
        showsCompass
        ref={mapRef}>
          {currentLocation && (
            <Marker
              coordinate={{
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
              }}
              title="your location"
            />
          )}
          {offers.map((offer, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: offer.lat,
              longitude: offer.long,
            }}
            title={offer.title}
            description={offer.description}
            places={offer.places}
          />
        ))}
        </MapView>
     )}
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%"
  },
  
});

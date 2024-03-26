import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const Packageofdays = () => {
  // Example JSON data
  const events = [
    { date: 'Mar 13', day: 'We, 13TH MARCH,2024', time: '10:00am - 12:30', image: require("../assets/ellipse-1180.png"), description: 'Party House All night' },
    { date: 'Mar 16', day: 'Sa, 16TH MARCH,2024', time: '10:00am - 12:30', image: require("../assets/ellipse-1180.png"), description: 'Party House All night' },
    // Add more events as needed
  ];

  return (
    <ScrollView>
      <View style={styles.groupParent}>
        {events.map((event, index) => (
          <View key={index} style={[styles.rectangleContainer, styles.rectangleParentLayout]}>
            <View style={[styles.groupInner, styles.groupLayout]} />
            <Text style={[styles.partyHouseAll, styles.mar13Typo]}>{event.description}</Text>
            <Image style={[styles.ellipseIcon, styles.am1230Position]} contentFit="cover" source={event.image} />
            <Text style={[styles.am1230, styles.am1230Position]}>{event.time}</Text>
            <View style={[styles.groupContainer, styles.groupPosition]}>
              <View style={styles.groupChildPosition}>
                <View style={[styles.groupChild, styles.groupChildPosition]} />
                <Text style={[styles.mar13, styles.mar13Typo]}>{event.date}</Text>
              </View>
              <Text style={[styles.we13thMarch2024, styles.mar13Typo]}>{event.day}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  groupParent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rectangleContainer: {
    height: 120,
    width: 300,
    marginVertical: 10,
    backgroundColor: '#ececec',
    alignItems: 'center',
    justifyContent: 'center',
  },
  groupInner: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 120,
    width: 300,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  partyHouseAll: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  ellipseIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  am1230: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  groupContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mar13: {
    fontSize: 14,
    marginRight: 5,
  },
  we13thMarch2024: {
    fontSize: 14,
  },
  groupPosition: {
    position: 'relative',
  },
  groupChildPosition: {
    position: 'absolute',
    top: 10,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  groupChild: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
});

export default Packageofdays;

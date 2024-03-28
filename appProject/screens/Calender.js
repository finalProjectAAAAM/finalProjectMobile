import React, { useState, useEffect } from 'react';
import { Calendar } from 'react-native-calendars';
import { View, Text, StyleSheet, ScrollView } from 'react-native'; // Import StyleSheet for creating styles
import axios from 'axios';
import { IP } from "../IP.json";
import Packageofdays from '../components/Packageofdays'; // Import the Packageofdays component
import NavBar from '../components/NavBar';
const CalendarPage = () => {
  const [selected, setSelected] = useState('');
  const [selectedFormatted, setSelectedFormatted] = useState('');
  const [data, setData] = useState([]);
  const [nextdays, setNextdays] = useState([]);

  const getPackageByDate = async (selectedDate) => {
    try {
      const result = await axios.get(`http://${IP}:3001/cp/getPackagesByDate/${selectedDate}`);
      setData(result.data);
    } catch (err) {
      console.log(err, 'error in getting package by date');
    }
  };
  console.log(selected);
  console.log(selectedFormatted,'formated');
 
  useEffect(() => {
    const fetchCurrentDate = async () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1; 
      const day = today.getDate();
      const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
      return formattedDate;
    };

    const getPackageForTheNext7Days = async () => {
      try {
        const date = await fetchCurrentDate();
        const result = await axios.get(`http://${IP}:3001/cp/getPackagesByDateAndAfter/${date}`);
        setNextdays(result.data);
      } catch (err) {
        console.log(err, 'error in getting the packages for the next 7 days');
      }
    };

    getPackageForTheNext7Days();
  }, []);

  const handleDayPress = (day) => {
    const selectedDate = day.dateString;
    setSelected(selectedDate);
    setSelectedFormatted(formatDate(selectedDate));
    getPackageByDate(selectedDate);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    return `${month} ${day}`;
  };

  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Calendar Page</Text>
      </View>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={{ [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' } }}
      />
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <Packageofdays data={data} date={selectedFormatted}/>
        </ScrollView>
      </View>
      {/* <NavBar/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    marginLeft: 10,
    fontSize: 20,
    marginTop: 50,
    marginBottom: 20,
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 500, // Adjust as needed, this value should be greater than the height of the content
  },
});

export default CalendarPage;

import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'; // Import StyleSheet for creating styles
import { MaterialIcons } from '@expo/vector-icons'; 
import axios from 'axios';
import {IP} from "../IP.json"
const CalendarPage = () => {
  const [selected, setSelected] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [data , setData] = useState([])
  const [nextdays,setNextdays]=useState([])
  console.log(selected,'day selected ! ')
  const getpackagebydate = async(selected)=>{
    try{
      const result = await axios.get(`http://${IP}:3001/cp/getPackagesByDate/${selected}`)
      console.log(result.data)
      setData(result.data)
    }
   catch(err){
    console.log(err,'err in geting pckage by date')
   }
  }
  useState(()=>{

        const fetchCurrentDate = async () => {
          const today = new Date();
          const year = today.getFullYear();
          const month = today.getMonth() + 1; // Month is zero-indexed
          const day = today.getDate();
          const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    
          return formattedDate
        };
        
        const getpackageforthenext7days =async()=>{
          try{
            const date = await fetchCurrentDate()
            const result = await axios.get(`http://${IP}:3001/cp/getPackagesByDateAndAfter/${date}`)
            setNextdays(result.data)
          }
          catch(err){
            console.log(err,'err in geting the packages for the next 7 days')
          }
        }
        getpackageforthenext7days();
      }, []);
      console.log(nextdays)

      console.log(currentDate,'this day')
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <MaterialIcons name="keyboard-arrow-left" size={30} color="black" /> */}
        <Text style={styles.title}>Calendar Page</Text>
      </View>
      <Calendar
        onDayPress={day => {
          setSelected(day.dateString);
          getpackagebydate(day.dateString)
        }}
        markedDates={{
          [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Set background color
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
});

export default CalendarPage;

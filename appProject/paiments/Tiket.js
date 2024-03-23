// import * as React from "react";
// import { Image } from "expo-image";
// import { StyleSheet, Text, View } from "react-native";
// import { Color, FontFamily, FontSize } from "../components/GlobalStyles";

// const Tiket = () => {
//   return (
//     <View style={styles.tiket}>
//       <View style={[styles.vectorParent, styles.groupItemLayout]}>
//         <Image
//           style={[styles.groupChild, styles.groupChildPosition]}
//           contentFit="cover"
//           source={require('@expo/snack-static/react-native-logo.png')}
//         //   source={require("../assets/rectangle-4114.png")}
//         />
//         <Image
//           style={[styles.groupItem, styles.groupPosition]}
//           contentFit="cover"
//         //   source={require("../assets/group-2.png")}
//         />
//         <Image
//           style={[styles.groupInner, styles.groupInnerPosition]}
//           contentFit="cover"
//         //   source={require("../assets/rectangle-4115.png")}
//         />
//         <View style={[styles.frameParent, styles.groupInnerPosition]}>
//           <View>
//             <Text style={[styles.coldplayMusic, styles.coldplayMusicTypo]}>
//               Coldplay : Music of the Spheres
//             </Text>
//             <View style={styles.nov152023GeloraBungKarnParent}>
//               <Text style={[styles.nov152023, styles.nameTypo]}>
//                 Nov 15 2023 ~ Gelora Bung Karno Stadium, Jakarta
//               </Text>
//               <Image
//                 style={styles.frameChild}
//                 contentFit="cover"
//                 // source={require("../assets/vector-189.png")}
//               />
//             </View>
//           </View>
//           <View style={styles.frameGroup}>
//             <View style={styles.frameContainer}>
//               <View style={styles.nameParent}>
//                 <Text style={[styles.name, styles.nameTypo]}>Name</Text>
//                 <Text
//                   style={[styles.indriyaniPuspita, styles.coldplayMusicTypo]}
//                 >
//                   Indriyani Puspita
//                 </Text>
//               </View>
//               <View style={styles.orderNumberParent}>
//                 <Text style={[styles.name, styles.nameTypo]}>Order Number</Text>
//                 <Text
//                   style={[styles.indriyaniPuspita, styles.coldplayMusicTypo]}
//                 >
//                   CLD09738PL
//                 </Text>
//               </View>
//             </View>
//             <View style={styles.frameView}>
//               <View style={styles.dateParent}>
//                 <Text style={[styles.name, styles.nameTypo]}>Date</Text>
//                 <Text
//                   style={[styles.indriyaniPuspita, styles.coldplayMusicTypo]}
//                 >
//                   Nov 15 2023
//                 </Text>
//               </View>
//               <View style={styles.timeParent}>
//                 <Text style={[styles.name, styles.nameTypo]}>Time</Text>
//                 <Text
//                   style={[styles.indriyaniPuspita, styles.coldplayMusicTypo]}
//                 >
//                   9:00 PM
//                 </Text>
//               </View>
//             </View>
//             <View style={styles.frameView}>
//               <View style={styles.gateParent}>
//                 <Text style={[styles.name, styles.nameTypo]}>Gate</Text>
//                 <Text
//                   style={[styles.indriyaniPuspita, styles.coldplayMusicTypo]}
//                 >
//                   Yellow
//                 </Text>
//               </View>
//               <View style={styles.seatParent}>
//                 <Text style={[styles.name, styles.nameTypo]}>Seat</Text>
//                 <Text
//                   style={[styles.indriyaniPuspita, styles.coldplayMusicTypo]}
//                 >
//                   West B
//                 </Text>
//               </View>
//             </View>
//           </View>
//         </View>
//       </View>
//       <View style={styles.navOfMainPage}>
//         <View style={[styles.iconlyboldcalendarParent, styles.parentPosition]}>
//           <Image
//             style={[styles.iconlyboldcalendar, styles.groupIconLayout]}
//             contentFit="cover"
//             // source={require("../assets/iconlyboldcalendar.png")}
//           />
//           <Text style={[styles.events, styles.eventsTypo]}>Events</Text>
//         </View>
//         <View style={[styles.compassParent, styles.menuAltIconPosition]}>
//           <Image
//             style={[styles.compassIcon, styles.groupChildPosition]}
//             contentFit="cover"
//             // source={require("../assets/compass.png")}
//           />
//           <Text style={[styles.explore, styles.eventsTypo]}>Explore</Text>
//         </View>
//         <View style={[styles.prfileParent, styles.parentPosition]}>
//           <Text style={[styles.prfile, styles.mapTypo]}>Prfile</Text>
//           <Image
//             style={[styles.groupIcon, styles.groupIconLayout]}
//             contentFit="cover"
//             // source={require("../assets/group-33337.png")}
//           />
//         </View>
//         <View style={[styles.mapParent, styles.parentPosition]}>
//           <Text style={[styles.map, styles.mapTypo]}>Map</Text>
//           <Image
//             style={styles.groupChild1}
//             contentFit="cover"
//             // source={require("../assets/group-33338.png")}
//           />
//         </View>
//       </View>
//       <View style={styles.menuAltParent}>
//         <Image
//           style={[styles.menuAltIcon, styles.iconLayout]}
//           contentFit="cover"
//         //   source={require("../assets/menu-alt.png")}
//         />
//         <Image
//           style={[styles.notificationBellIcon, styles.iconLayout]}
//           contentFit="cover"
//         //   source={require("../assets/notification-bell.png")}
//         />
//         <View style={styles.groupView}>
//           <View style={styles.currentLocationWrapper}>
//             <Text
//               style={[styles.currentLocation, styles.currentLocationPosition]}
//             >
//               Current Location
//             </Text>
//           </View>
//           <Text
//             style={[styles.dhakaBangladesh, styles.currentLocationPosition]}
//           >
//             Ariana , TN
//           </Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   groupItemLayout: {
//     width: 352,
//     position: "absolute",
//   },
//   groupChildPosition: {
//     top: 0,
//     position: "absolute",
//   },
//   groupPosition: {
//     marginLeft: -176,
//     left: "50%",
//   },
//   groupInnerPosition: {
//     marginLeft: -157.6,
//     left: "50%",
//     position: "absolute",
//   },
//   coldplayMusicTypo: {
//     textAlign: "left",
//     color: Color.colorBlack,
//     fontFamily: FontFamily.interSemiBold,
//     fontWeight: "600",
//   },
//   nameTypo: {
//     color: Color.colorDimgray,
//     fontSize: FontSize.size_xs,
//     textAlign: "left",
//   },
//   parentPosition: {
//     opacity: 0.2,
//     bottom: "0%",
//     height: "100%",
//     top: "0%",
//     position: "absolute",
//   },
//   groupIconLayout: {
//     maxWidth: "100%",
//     bottom: "43.93%",
//     height: "56.07%",
//     top: "0%",
//     maxHeight: "100%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   eventsTypo: {
//     justifyContent: "center",
//     alignItems: "center",
//     display: "flex",
//     textAlign: "center",
//     fontFamily: FontFamily.aBeeZeeItalic,
//     fontStyle: "italic",
//     height: "38.97%",
//     left: "0%",
//     top: "60.85%",
//     fontSize: FontSize.size_xs,
//     position: "absolute",
//     width: "100%",
//   },
//   menuAltIconPosition: {
//     left: 0,
//     top: 0,
//   },
//   mapTypo: {
//     color: Color.colorDarkslategray,
//     justifyContent: "center",
//     alignItems: "center",
//     display: "flex",
//     textAlign: "center",
//     fontFamily: FontFamily.aBeeZeeItalic,
//     fontStyle: "italic",
//     left: "0%",
//     height: "38.97%",
//     fontSize: FontSize.size_xs,
//     position: "absolute",
//     width: "100%",
//   },
//   iconLayout: {
//     height: 24,
//     width: 24,
//     position: "absolute",
//     overflow: "hidden",
//   },
//   currentLocationPosition: {
//     top: "50%",
//     textAlign: "center",
//     color: Color.colorBlack,
//     position: "absolute",
//   },
//   groupChild: {
//     borderRadius: 20,
//     width: 351,
//     marginLeft: -176,
//     left: "50%",
//     height: 554,
//   },
//   groupItem: {
//     top: 475,
//     height: 33,
//     width: 352,
//     position: "absolute",
//   },
//   groupInner: {
//     top: 16,
//     borderRadius: 14,
//     width: 316,
//     height: 148,
//   },
//   coldplayMusic: {
//     fontSize: 18,
//   },
//   nov152023: {
//     fontFamily: FontFamily.interRegular,
//   },
//   frameChild: {
//     width: 290,
//     marginTop: 20,
//     maxHeight: "100%",
//   },
//   nov152023GeloraBungKarnParent: {
//     marginTop: 8,
//   },
//   name: {
//     fontWeight: "500",
//     fontFamily: FontFamily.interMedium,
//   },
//   indriyaniPuspita: {
//     fontSize: FontSize.size_sm,
//     marginTop: 4,
//   },
//   nameParent: {
//     width: 140,
//   },
//   orderNumberParent: {
//     marginLeft: 52,
//   },
//   frameContainer: {
//     flexDirection: "row",
//   },
//   dateParent: {
//     width: 113,
//   },
//   timeParent: {
//     marginLeft: 79,
//   },
//   frameView: {
//     marginTop: 24,
//     flexDirection: "row",
//   },
//   gateParent: {
//     width: 74,
//   },
//   seatParent: {
//     marginLeft: 120,
//   },
//   frameGroup: {
//     marginTop: 20,
//   },
//   frameParent: {
//     top: 179,
//     width: 299,
//     height: 224,
//   },
//   vectorParent: {
//     marginLeft: -173.5,
//     top: 186,
//     height: 554,
//     left: "50%",
//   },
//   iconlyboldcalendar: {
//     width: "62.12%",
//     right: "19.03%",
//     left: "18.85%",
//   },
//   events: {
//     color: "#001553",
//   },
//   iconlyboldcalendarParent: {
//     width: "15.7%",
//     right: "56.39%",
//     left: "27.91%",
//   },
//   compassIcon: {
//     left: 15,
//     width: 35,
//     height: 30,
//     overflow: "hidden",
//   },
//   explore: {
//     color: Color.colorPrimaryBlue,
//   },
//   compassParent: {
//     width: 63,
//     height: 54,
//     position: "absolute",
//   },
//   prfile: {
//     top: "60.85%",
//     color: Color.colorDarkslategray,
//   },
//   groupIcon: {
//     width: "79.18%",
//     right: "10.53%",
//     left: "10.3%",
//   },
//   prfileParent: {
//     width: "12.32%",
//     right: "0%",
//     left: "87.68%",
//   },
//   map: {
//     top: "61.03%",
//   },
//   groupChild1: {
//     width: "95.86%",
//     right: "4.14%",
//     left: "0%",
//     maxWidth: "100%",
//     bottom: "43.93%",
//     height: "56.07%",
//     top: "0%",
//     maxHeight: "100%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   mapParent: {
//     width: "10.21%",
//     right: "27.21%",
//     left: "62.59%",
//   },
//   navOfMainPage: {
//     height: "6.38%",
//     width: "90.25%",
//     top: "91.9%",
//     right: "4.66%",
//     bottom: "1.71%",
//     left: "5.09%",
//     position: "absolute",
//   },
//   menuAltIcon: {
//     left: 0,
//     top: 0,
//   },
//   notificationBellIcon: {
//     top: 3,
//     left: 292,
//   },
//   currentLocation: {
//     marginTop: -7.45,
//     marginLeft: -38.5,
//     fontFamily: FontFamily.abelRegular,
//     opacity: 0.7,
//     fontSize: FontSize.size_xs,
//     top: "50%",
//     left: "50%",
//   },
//   currentLocationWrapper: {
//     height: "44.47%",
//     width: "87.7%",
//     right: "5.74%",
//     bottom: "55.53%",
//     left: "6.56%",
//     top: "0%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   dhakaBangladesh: {
//     marginTop: 4.5,
//     left: "24.59%",
//     fontSize: 13,
//     fontFamily: FontFamily.actorRegular,
//   },
//   groupView: {
//     marginLeft: -60.5,
//     top: 6,
//     width: 122,
//     height: 47,
//     left: "50%",
//     position: "absolute",
//     overflow: "hidden",
//     backgroundColor: Color.colorWhite,
//   },
//   menuAltParent: {
//     marginLeft: -157.5,
//     top: 86,
//     width: 315,
//     height: 53,
//     left: "50%",
//     position: "absolute",
//   },
//   tiket: {
//     flex: 1,
//     height: 852,
//     overflow: "hidden",
//     width: "100%",
//     backgroundColor: Color.colorWhite,
//   },
// });

// export default Tiket;

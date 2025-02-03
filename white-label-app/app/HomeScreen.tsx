// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// export const HomeScreen = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.gradientBackground} />
//       <Text style={styles.text}>HomeScreen</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   gradientBackground: {
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//     backgroundColor: "#dddddd",
//     top: 0,
//     left: 0,
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "white",
//   },
// });

// import React from "react";
// import { StyleSheet, Text, View, Image } from "react-native";

// export const HomeScreen = () => {
//   return (
//     <View style={styles.container}>
//       {/* Gradient Effect Using Overlapping Views */}
//       <View style={[styles.gradientLayer, { backgroundColor: "black" }]} />
//       <View
//         style={[
//           styles.gradientLayer,
//           { backgroundColor: "gray", opacity: 0.6 },
//         ]}
//       />
//       <View
//         style={[
//           styles.gradientLayer,
//           { backgroundColor: "green", opacity: 0.3 },
//         ]}
//       />
//       <View
//         style={[
//           styles.gradientLayer,
//           { backgroundColor: "purple", opacity: 0.2 },
//         ]}
//       />

//       {/* Electric Vehicle Image */}
//       <Image
//         source={{
//           uri: "https://images.unsplash.com/photo-1600793575654-910699b5e4d4?w=1000",
//         }}
//         style={styles.image}
//         resizeMode="cover"
//       />

//       {/* Seamless Journey Planning Text */}
//       <Text style={styles.text}>Seamless Journey Planning</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     position: "relative",
//     backgroundColor: "black",
//   },
//   gradientLayer: {
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//   },
//   image: {
//     width: 300,
//     height: 200,
//     marginBottom: 20,
//   },
//   text: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "white",
//     textAlign: "center",
//   },
// });

// // export default HomeScreen;
// import React from "react";
// import { StyleSheet, Text, View, ImageBackground } from "react-native";

// export const HomeScreen = () => {
//   return (
//     <View style={styles.container}>
//       {/* Full-Screen Image with Text Overlay */}
//       <ImageBackground
//         source={{
//           uri: "https://images.unsplash.com/photo-1600793575654-910699b5e4d4?w=1000",
//         }}
//         style={styles.imageBackground}
//         resizeMode="cover"
//       >
//         <View style={styles.overlay} />
//         <Text style={styles.text}>Seamless Journey Planning</Text>
//       </ImageBackground>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   imageBackground: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   overlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark overlay for better text visibility
//   },
//   text: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#81C784",
//     textAlign: "center",
//     paddingHorizontal: 20,
//     marginBottom:500
//   },
// });

// export default HomeScreen;

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export const  HomeScreen = () => {
  return (
    <View style={styles.container}>
        <ImageBackground  resizeMode="cover" source={{uri:"https://images.unsplash.com/photo-1600793575654-910699b5e4d4?w=1000"}} style={styles.carImage} >
      <View style={styles.overlay}>
       
        <Text style={styles.title}>Seamless Journey Planning</Text>
        <Text style={styles.description}>
          Our extensive database includes charging stations along your route, allowing you to
          incorporate charging stops seamlessly into your travel plans.
        </Text>
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1E23',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(20, 30, 50, 0.8)',
    // borderRadius: 30,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(0, 255, 0, 0.2)',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 20,
    height: 20,
    backgroundColor: 'green',
    borderRadius: 5,
  },
  title: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 450,
  },
  description: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    marginBottom:100
    // marginVertical: 400,
  },
  carImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    marginVertical: 20,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

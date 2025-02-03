import React, {  useRef } from "react";
import MapView, {
  Camera,
  Marker,
  PROVIDER_GOOGLE,
  Region,
} from "react-native-maps";
import { StyleSheet, TouchableOpacity, View, Text, Alert } from "react-native";
import { markers } from "@/utils/markers";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const INITIAL_REGION = {
  latitude: 12.9716,
  longitude: 77.5946,
  latitudeDelta: 0.5,
  longitudeDelta: 0.5,
};

export default function App() {
  const mapRef = useRef<MapView | null>(null);

  const focusMap = () => {
    const targetLocation: Camera = {
      center: {
        latitude: 12.9352,
        longitude: 77.6245,
        // name: "Koramangala",
      },
      zoom: 15,
      pitch: 0,
      heading: 0,
    };
    mapRef?.current?.animateCamera(targetLocation, { duration: 1000 });
  };

  const onRegionChange = (region: Region) => {
    console.log(region);
  };

  function onMarkerSelected(marker: {
    latitude: number;
    longitude: number;
    name: string;
  }): void {
    Alert.alert(marker.name, marker.latitude + ", " + marker.longitude);
  }

  return (
    <View style={{ flex: 1 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <MapView
          style={StyleSheet.absoluteFill}
          provider={PROVIDER_GOOGLE}
          initialRegion={INITIAL_REGION}
          showsUserLocation
          showsMyLocationButton
          // onRegionChange={onRegionChange}
          scrollEnabled
          zoomEnabled
          pitchEnabled
          rotateEnabled
          // onRegionChangeComplete={onRegionChange}
          ref={mapRef}
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              onPress={() => onMarkerSelected(marker)}
            />
          ))}
        </MapView>
        <TouchableOpacity style={styles.button} onPress={focusMap}>
          <Text style={styles.buttonText}>Focus</Text>
        </TouchableOpacity>
      </GestureHandlerRootView>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 50,
    right: 20,
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

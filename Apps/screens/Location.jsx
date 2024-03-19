import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";

export default function Location() {
  let coordinates = {
    id: 123,
    title: "My Location",
    latitude: 35.6855,
    longitude: 139.68884,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <MapView style={styles.mapStyle} region={coordinates}>
      <Marker coordinate={coordinates} title={coordinates?.title} />
    </MapView>
  );
}

const styles = StyleSheet.create({
  mapStyle:{
    ...StyleSheet.absoluteFillObject
  }
});

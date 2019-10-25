import React from 'react';
import { ExpoConfigView } from '@expo/samples';
// import MapView from 'react-native-maps';
import MapboxGL from "@react-native-mapbox-gl/maps";
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { MapItem } from '../components/MapItem';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <MapItem></MapItem>
    </View>
  );
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
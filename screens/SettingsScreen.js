import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import MapView from 'react-native-maps';
// import MapboxGL from "@react-native-mapbox-gl/maps";
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { MapItem } from '../components/MapItem';

// MapboxGL.setAccessToken("pk.eyJ1IjoiYmVuamFtaW4taGVucnkiLCJhIjoiY2syNXRyNm5qMTcweDNubXEwc2pqaTMxZCJ9.VBbNIaHZShqcmG_PbisyIg");
// MapboxGL.setStyle(Style.MAPBOX_STREETS);

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <MapView
          initialRegion={{
            latitude: 47,
            longitude: 3,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}
          style={styles.mapStyle}
        />
    </View>
  );
}

// SettingsScreen.navigationOptions = {
//   title: 'app.json',
// };

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

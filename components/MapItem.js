import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import MapView from 'react-native-maps';
// import MapboxGL from "@react-native-mapbox-gl/maps";
import { StyleSheet, Text, View, Dimensions } from 'react-native';


// MapboxGL.setAccessToken("pk.eyJ1IjoiYmVuamFtaW4taGVucnkiLCJhIjoiY2syNXRyNm5qMTcweDNubXEwc2pqaTMxZCJ9.VBbNIaHZShqcmG_PbisyIg");


class MapItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
      return (
        <View style={styles.container}>
        <MapView
          initialRegion={{
            latitude: 47,
            longitude: 3,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}
        />
      </View>
      );
    }
}



const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapItem
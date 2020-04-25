import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

/*
function HelloMap() {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={style.map}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.09,
        longitudeDelta: 0.035
      }}>

    </MapView>
  );
}
export default HelloMap;
*/

export default class mapping extends Component {
  render() {
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 33.8462557,
          longitude: 35.83,
          latitudeDelta: 2.2,
          longitudeDelta: 1
        }}>

      </MapView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 40
  },
  map: {
    height: '100%'
  }
});

/*
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export default class Playground extends Component {
  state = {
    coordinates: [
      { name: '1', latitude: 37.8025259, longitude = -122.4351431 },
      { name: '2', latitude: 37.7896386, longitude = -122.421646 },
      { name: '3', latitude: 37.7665248, longitude = -122.4161628 },
      { name: '4', latitude: 37.7734153, longitude = -122.4577787 },
      { name: '5', latitude: 37.7948605, longitude = -122.4596065 },
      { name: '6', latitude: 37.8025259, longitude = -122.4351431 }
    ]
  }
  render() {
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.09,
          longitudeDelta: 0.035
        }}>

      </MapView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 40
  },
});
*/
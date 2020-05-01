// Sources
// allCountries.json: https://gist.github.com/erdem/8c7d26765831d0f9a8c62f02782ae00d
// COVID-19 API: https://covid19api.com/

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';

import countries from './allCountries';

export default class mapping extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dataSource: []
    };
  }

  componentDidMount() {
    fetch('https://api.covid19api.com/summary')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          dataSource: responseJson.Countries,
        });
      })
      .catch(error => console.log(error));
  }

  findCountryCoords = (countryCode) => {
    const el = countries.find(el => el.country_code === countryCode);
    if(el == undefined)
      return [0, 0];
    else
      return el.latlng;
  }

  render() {
    let { dataSource } = this.state
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 33.8462557,
          longitude: 35.83,
          latitudeDelta: 50,
          longitudeDelta: 1
        }}>
      {
        this.state.dataSource.map(item => {
          return (
            <Marker
                key={item.CountryCode}
                pinColor="rgb(128,0,0)"
                coordinate={{
                  latitude: this.findCountryCoords(item.CountryCode)[0],
                  longitude: this.findCountryCoords(item.CountryCode)[1],
                }}>
              <Callout>
                <Text>Country: {item.Country}</Text>
                <Text>Confirmed cases: {item.TotalConfirmed}</Text>
                <Text>Deaths cases: {item.TotalDeaths}</Text>
                <Text>Recovered cases: {item.TotalRecovered}</Text>
              </Callout>
            </Marker>
          );
        })
      }
      </MapView>
    );
  }
};

const styles = StyleSheet.create({
  map: {
    height: '100%'
  }
});

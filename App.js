/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, { Component }   from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity, Dimensions} from 'react-native';
import axios from 'axios';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;




/*
import React, { Component }   from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity, Dimensions} from 'react-native';
import axios from 'axios';

let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

export default class FourthPage extends Component {
  constructor() {
    super();
    this.state = {
      region: {
        totalCon: '',
        TotalD: '',
        TotalRec: ''
      }
    };
  }

  componentDidMount() {
    axios.get('https://api.covid19api.com/summary')
      .then(response => {
        this.setState({ totalCon: response.data.Global.TotalConfirmed });
        this.setState({ TotalD: response.data.Global.TotalDeaths });
        this.setState({ TotalRec: response.data.Global.TotalRecovered });
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  //Navigation option to create menu in header
  static navigationOptions = ({ navigation }) => {
    return {
      //Heading/title of the header
      title: navigation.getParam('Title', 'COVID-19 search page'),
      //Heading style
      headerStyle: {
        backgroundColor: navigation.getParam('BackgroundColor', 'orange'),
      },
      //Heading text color
      headerTintColor: navigation.getParam('HeaderTintColor', '#fff'),
      headerRight: (
        <TouchableOpacity onPress={() => alert('Thank you for the like!')}>
          <Text
            style={{
              color: 'white',
            }}>
            Like this!
          </Text>
        </TouchableOpacity>
      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('FirstPage')}>
          <Text
            style={{
              color: 'white',
            }}>
            Go back
          </Text>
        </TouchableOpacity>
      ),
    };
  };

  render() {
    const { totalCon, TotalD, TotalRec } = this.state;

    return (
      <View style={styles.container}>
      <View style={styles.whiteView}>
        <Text style={styles.title}>
          COVID-19 cases {"\n"}
          of this place's World/Earth.
        </Text>
        <Text style={styles.txtStyle}> 
          Total Confirmed: {totalCon} {"\n"}
          Total Deaths: {TotalD}{"\n"}
          Total Recovered: {TotalRec}{"\n"}
        </Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  whiteView: {
    position:'absolute', 
    backgroundColor: 'white', 
    height: 200,
    top: height-200, 
    width: width,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center', 
    top: 20,
    color: 'blue'
  },
  txtStyle: {
    left: 100,
    top: 30,
    color: 'blue'
  }
});
*/




/*
// import 'react-native-gesture-handler'
import React, { Component } from 'react';
import { View, Text, Button, Image, Alert } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';


class mainPage extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <View
          style={{
            height: 45,
            marginTop: 20,
            backgroundColor: 'orange',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            COVID-19 update report
          </Text>
        </View>
      ),
    };
  };

  render() {
    // const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, backgroundColor: 'rgb(255,255,255)' }}>
        <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center'}}>

          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Real time update with {"\n"}
            Coronavirus COVID19 API. {"\n"}
          </Text>

          <Button
            title="Stats by Country"
            color="rgb(40,90,200)"
            // onPress={() => {
              // this.props.navigation.navigate('countriesPage');
            // }}
            onPress={() => Alert.alert('Cannot press this one')}
          />

        </View>
      </View>
    );
  }
}
export default mainPage;
*/



/*
import React from 'react';
import { Text, View } from 'react-native';

function countriesPage() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello, world!</Text>
    </View>
  )
}
export default countriesPage;
*/
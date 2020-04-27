import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, Button, Image, Alert, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

let { width, height } = Dimensions.get('window');

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'rgb(255,255,255)', alignItems: 'center'}}>
        
      <Image style={{
        height: 720*width/1280,
        width: width,
        justifyContent: 'center'
      }} source={require('./corona1.jpg')} />

      <Text>{"\n"}</Text>

      <Text
        style={{
          fontSize: 35,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        COVID-19 Statistics by Country {"\n"}
      </Text>

      <Button
        title="Click Here"
        color="rgb(40,90,200)"
        onPress={() => navigation.navigate('Stats')}
      />

    </View>
  );
}


class StatsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dataSource: []
    };
  }

  apiCall = () => {
    fetch("https://api.covid19api.com/summary")
      .then(response => response.json())
      .then((responseJson)=> {
        this.setState({
          dataSource: responseJson.Countries
        })
      })
      .catch(error=>console.log(error))
  }
  
  printCountryInfo = (item) => {
    <TouchableOpacity style={styles.list}>
      <Text>Country: {item.Country}</Text>
      <Text>Confirmed cases: {item.TotalConfirmed}</Text>
      <Text>Deaths cases: {item.TotalDeaths}</Text>
      <Text>Recovered cases: {item.TotalRecovered}</Text>
    </TouchableOpacity>
  }

  render() {
    const { dataSource } = this.state
    this.apiCall();
    return (
      <ScrollView>
        <View>
        {
          this.state.dataSource.map((item) => {
            return (
              <TouchableOpacity style={styles.list}>
                <Text>Country: {item.Country}</Text>
                <Text>Confirmed cases: {item.TotalConfirmed}</Text>
                <Text>Deaths cases: {item.TotalDeaths}</Text>
                <Text>Recovered cases: {item.TotalRecovered}</Text>
              </TouchableOpacity>
            );
          })
        }
        </View>
      </ScrollView>
    );
  }
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'COVID-19 App' }} />
        <Stack.Screen name="Stats" component={StatsScreen} options={{ title: 'Statistics by Country' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  list: {
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "rgb(220,220,255)"
  }
});

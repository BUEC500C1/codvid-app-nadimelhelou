import React, { Component } from 'react';
import { View, Text, Button, Image, Alert, TouchableOpacity, Dimensions } from 'react-native';
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

function StatsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Map Screen</Text>
    </View>
  );
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
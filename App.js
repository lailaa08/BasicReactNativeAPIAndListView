
import AppNavigator from './AppNavigator';
import React, { useState, Component } from "react";
import { FlatList, TouchableOpacity, ActivityIndicator, StyleSheet, Text, View } from "react-native";
import 'react-native-gesture-handler';
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class Home extends React.Component {
  onclick_item(item) {
    let ID = item.Id
    switch (ID) {
      case "1":
        this.props.navigation.navigate('About')
        break;
      case "Jackson":
        //navigate
        break;
      default:
      //whatever you want
    }
  }
  constructor(){
    super();
    this.state = {
      isLoading: true,
      dataSource: []
    }
  }


  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson
      })
    })
  }


  _renderItem = ({item, navigation, Friends}) => (
  <TouchableOpacity onPress={() => navigation.navigate('Friends')}>
    <View style={styles.item}>
  <Text>
    {item.title}
    </Text>
    </View>
    </TouchableOpacity>);


  render() {
    
    if(this.state.isLoading){
      return (
        <NavigationContainer>
        <View style={styles.container}>
          <ActivityIndicator size="large" animating></ActivityIndicator>
          </View>
          </NavigationContainer>
      )
    } else{
    return (
      <NavigationContainer>
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this._renderItem}
        />
      </View>
      </NavigationContainer>
    );
    }
    
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },

  item: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  }

});

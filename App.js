import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, FlatList, TouchableHighlight  } from 'react-native';
import { ListItem, Avatar, Image } from 'react-native-elements'
import HomeStack from './HomeStack'

export default class App extends Component {

  state = {
    data: []
  };

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5");
    const json = await response.json();
    this.setState({ data: json });
  };

  render() {
  return (
    <View style={styles.container}>
      <HomeStack />
        <FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) => {
            return (
              item.copyright ? 
                (
                  <TouchableHighlight key={item.id} onPress={() => this.props.navigation.push('Details', {copyright: item.copyright, explanation: item.explanation, hrurl: item.hdurl})}>
                    <View style={styles.container} key={item.id}>
                      <Text>copyright: <Text>{item.copyright}</Text></Text>
                      <Text>explanation: <Text>{item.explanation}</Text></Text>
                      <Text>hdurl: <Text>{item.hdurl}</Text></Text>
                      <Image source={{uri:"https://apod.nasa.gov/apod/image/0002/chimney1_cgps.jpg"}}/>
                    </View>
                  </TouchableHighlight> 
                ) : (
                  <Text></Text>
                )
            )
          }}
        />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // container: {
  //   marginTop: 15,
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "#F5FCFF"
  // }
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    borderColor: '#cccccc',
    borderWidth: 0.01,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.20,
    shadowRadius: 10.00,
    
    elevation: 2.7,
  }
});

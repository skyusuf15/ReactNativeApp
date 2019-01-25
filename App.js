import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Image, Text, AppRegistry } from 'react-native';
import Greeting from './component/Greeting';
import BlinkApp from './component/Blink';
import BananaImage from './component/BananaImage';
import PizzaTranslator from './component/PizzaTranslator';
import ButtonBasics from './component/ButtonBasics';
import Touchables from './component/Touchables';
import FlatListBasics from './component/FlatListBasics';
import SectionListBasics from "./component/SectionListBasics";
import FetchExample from "./component/FetchExample";

export default class App extends Component {
  render() {

    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (

      <View style={styles.container}>
          {/* <BananaImage style={{flex:3}} /> */}
          {/* <Greeting name='world SKY' style={{flex:1}} /> */}
          {/* <BlinkApp /> */}
          {/* <PizzaTranslator /> */}
          {/* <ButtonBasics /> */}
        {/* <ScrollView>


          <Touchables />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
        </ScrollView>*/}

        {/* <FlatListBasics />  */}
        <SectionListBasics />
        <FetchExample />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f7b43c',
    paddingTop: 30,
    padding:15,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

});

AppRegistry.registerComponent('reactNativeApp', ()=> App);
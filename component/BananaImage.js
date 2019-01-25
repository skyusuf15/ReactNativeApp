import React, { Component } from "react";
import { AppRegistry, StyleSheet, Image, View } from 'react-native';

export default class BananaImage extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        return (
            <View>
                <Image source={pic} style={styles.pic} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pic: {
        width: '100%', 
        height: 110
      }, 
});
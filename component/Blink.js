import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Blink extends Component {
    
    constructor(props) {
        super(props);
        this.state = {isShowingText: true};

        //Toggle the state every second
        setInterval(()=>(
            this.setState(previousState => (
                {isShowingText: !previousState.isShowingText }
              ))
            ), 1000);
    }

    render () {
        if (!this.state.isShowingText) {
            return null;
        }
        return (
            
            <View style={{height:40}}>
                <Text>{this.props.text}</Text>
            </View>
        );
    }

}

export default class BlinkApp extends Component {
    render() {
        return (
            <View>
                <Blink text='I love to blink'/>
                <Blink text='Yes blinking is so great'/>
                <Blink text='Why did they ever take this out of HTML'/>
            </View>
        );
    }
}
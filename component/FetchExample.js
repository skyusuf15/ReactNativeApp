import React from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';

export default class fetchExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoading: true};
    }

    componentDidMount() {
        return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response)=> response.json())
        .then((responseJson) => {
            this.setState({
                isLoading: false,
                dataSource: responseJson.movies,
            }, ()=>{});
        })
        .catch((error)=> {
            console.log(error);
        });
    }

    render() {
        return (
            <View style={{flex:1,padding:20}}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
                    keyExtractor={({id}, index) => id} />
            </View>
        );
    }
}
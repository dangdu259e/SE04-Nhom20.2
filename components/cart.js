import React, {Component} from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';

var url = 'http://127.0.0.1:5000/getall'
export default class cart extends Component{
    constructor() {
        super();
        this.state={
            data: []
        }
    }
    componentDidMount() {
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    data: json
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <FlatList data={this.state.data}
                      renderItem={({item}) =>
                          <Text>{item.email}</Text>
                      }
            />
        );
    }
}

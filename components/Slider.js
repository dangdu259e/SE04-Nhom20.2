/**
 * THE BEGINNING VIEW 1
 *
 * @format
 * @flow strict-local
 */
import {View, Text, Image, StyleSheet, ScrollView, Dimensions} from 'react-native';
import React from 'react'

const {width} = Dimensions.get('window')
const height = width*0.6;    //60%


export default class Slider extends React.Component{
    state = {
        active: 0
    }
    change = ({nativeEvent}) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== this.state.active) {
            this.setState({active: slide})
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {/*view for slide image top*/}
                <ScrollView pagingEnabled
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            onScroll={this.change}
                            style={styles.container}>
                    {
                        this.props.flatListData.map((item, index) =>
                            (
                                <Image
                                    key={index}
                                    source={{uri: item.img}}
                                    style={styles.img}
                                />
                            )
                        )
                    }
                </ScrollView>
                <View style={styles.pagination}>
                    {
                        this.props.flatListData.map((item, index) =>
                            (
                                <Text key={index} style={ index===this.state.active ? styles.pagingActiveText : styles.pagingText}>⬤</Text>
                            )
                        )
                    }
                </View>
            </View>
        );
    }
}

// export default Cat

const styles = StyleSheet.create({
    container: {
        // marginTop: 10,
        // backgroundColor: 'red'
        width,
        height
    },
    img: {
        width,
        height,
        resizeMode: 'cover'
    },
    pagination: {
        flexDirection:'row',
        position:'absolute',
        bottom: 0,
        alignSelf: 'center'
    },
    pagingText: {
        color: '#888',
        margin: 3
    },
    pagingActiveText: {
        color: '#fff',
        margin: 3
    }

})

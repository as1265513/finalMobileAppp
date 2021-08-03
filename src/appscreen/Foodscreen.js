import { transform } from '@babel/core';
import React from 'react';
import { Text, StyleSheet, View, Dimensions, FlatList, Image, Animated } from 'react-native';

import Piechart from '../components/Piechart';
const Foodscreen = ({ route }) => {
    const { width, height } = Dimensions.get('screen');
    const ITEM_WIDTH = width * 0.76;
    const ITEM_HEIGHT = ITEM_WIDTH * 1.47;
    console.log(route.params.result);
    const result = route.params.result;
    const scrollX = React.useRef(new Animated.Value(0)).current;
    return (
        < View style={styles.container}>
            <Animated.FlatList
                horizontal
                data={result.images}
                keyExtractor={(image) => images}
                pagingEnabled
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true },
                )}
                renderItem={({ item, index }) => {
                    const inputRange = [
                        (index - 1) * width,
                        index * width,
                        (index + 1) * width,];

                    const translateX = scrollX.interpolate({
                        inputRange,
                        outputRange: [-width * 0.7, 0, width * 0.7]

                    });



                    return (

                        <View
                            style={{ width, justifyContent: 'center', alignItems: 'center' }}>
                            <View
                                style={{

                                    borderRadius: 18,
                                    borderWidth: 10,
                                    shadowColor: '#000',
                                    shadowOpacity: 1,
                                    shadowRadius: 20,
                                    shadowOffset: {

                                        width: 0,
                                        height: 0,
                                    },
                                    elevation: 3,
                                    borderRadius: 18,
                                    padding: 12,
                                    backgroundColor: 'white',

                                }}>
                                <View
                                    style={{
                                        width: ITEM_WIDTH,
                                        height: ITEM_HEIGHT,
                                        overflow: 'hidden',
                                        alignItems: 'center',
                                        borderRadius: 14

                                    }}>
                                    <Animated.Image

                                        style={{
                                            width: ITEM_WIDTH * 1.4,
                                            height: ITEM_HEIGHT,
                                            resizeMode: 'cover',
                                            transform: [
                                                {
                                                    translateX,
                                                },
                                            ],
                                        }
                                        }
                                        source={{ uri: item }} />
                                </View>
                            </View >
                        </View>
                    )
                }}
                showsHorizontalScrollIndicator={false}
            />
        </View >
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    }
});

export default Foodscreen;
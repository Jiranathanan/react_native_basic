import React from "react";
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <Text style={{...styles.textStyle, ...styles.textOneStyle }}>Child #1</Text>
        <Text style={{...styles.textStyle, ...styles.textTwoStyle }}>Child #2</Text>
        <Text style={{...styles.textStyle, ...styles.textThreeStyle }}>Child #3</Text>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 200,

    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red',
        height: 80,
        width: 100
    },
    textOneStyle: {
        backgroundColor: 'salmon',
        // zIndex: 10
    },
    textTwoStyle: {
        backgroundColor: 'skyblue',
        top: 80
    },
    textThreeStyle: {
        backgroundColor: 'green',
    }
});

export default BoxScreen;
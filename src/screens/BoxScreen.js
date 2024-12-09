import React from "react";
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <Text style={{...styles.textStyle, flex: 1, backgroundColor: 'salmon'}}>Child #1</Text>
        <Text style={{...styles.textStyle, flex: 2, backgroundColor: 'skyblue'}}>Child #2</Text>
        <Text style={{...styles.textStyle, flex: 1, backgroundColor: 'seagreen'}}>Child #3</Text>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        // alignItems: 'flex-start',
        // flexDirection: 'row',
        justifyContent: 'start',
        height: 500,

    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red',
    }
});

export default BoxScreen;
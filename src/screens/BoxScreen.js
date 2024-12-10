import React from "react";
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <Text style={{...styles.textStyle,flex: 1,backgroundColor: 'salmon', alignSelf: 'flex-start'}}>Child #1</Text>
        <Text style={{...styles.textStyle,flex: 2,backgroundColor: 'skyblue', alignSelf:'center'}}>Child #2</Text>
        <Text style={{...styles.textStyle,flex: 1,backgroundColor: 'seagreen', alignSelf: 'flex-end'}}>Child #3</Text>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'stretch',
        // flexDirection: 'row',
        justifyContent: 'flex-start',
        height: 500,

    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red',
    }
});

export default BoxScreen;
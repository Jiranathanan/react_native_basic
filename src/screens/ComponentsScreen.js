import React from "react";
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = 'Hi there!';
    return <View>
            <Text style={styles.textStyle} >This is the components screen (w/ a View)</Text>
            <Text style={styles.greetStyle}>{greeting} Are you sleep ?</Text>
        </View>};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    greetStyle: {
        fontSize: 20,
        color: 'red' 
    }
});

export default ComponentsScreen;
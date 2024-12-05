import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = ( { color } ) => {
    return <View style={{ marginTop: 40 }}>
            <Text style={{ color: color.toLowerCase(), marginBottom: 20 }}>{ color }</Text>
            <Button title={`Increase ${color}`} color={ color.toLowerCase() } />
            <Button title={`Decrease ${color}`} color={ color.toLowerCase() } />
    </View>
}

const styles = StyleSheet.create({});

export default ColorCounter;
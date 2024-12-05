import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = ( { color, onIncrease, onDecrease } ) => {
    return <View style={{ marginTop: 40 }}>
            <Text style={{ color: color.toLowerCase(), marginBottom: 20 }}>{ color }</Text>
            <Button title={`Increase ${color}`} color={ color.toLowerCase() } onPress={() => onIncrease()} />
            <Button title={`Decrease ${color}`} color={ color.toLowerCase() } onPress={() => onDecrease()} />
    </View>
}

const styles = StyleSheet.create({});

export default ColorCounter;
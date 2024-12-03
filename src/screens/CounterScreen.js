import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);
    return <View style={{ marginTop: 20}}>
            <View style={styles.button}>
                <Button 
                    title="Increase" 
                    color='green' 
                    onPress={ () => {
                        setCounter(counter + 1);
                    }}
                />
            </View>
            <View style={styles.button}>
                <Button 
                    title="Decrease" 
                    color='red' 
                    onPress={ () => {
                        setCounter(counter - 1)
                    }}
                />
            </View>
        <Text style={styles.text}>Current Count:</Text>
        <Text style={styles.text}>{counter}</Text>
    </View>
}

const styles = new StyleSheet.create({
    text:   { 
        textAlign: 'center', 
        fontSize: 24, 
        marginTop: 20
    },
    button: { 
        marginTop: 10, 
        marginBottom: 10 
    }
});

export default CounterScreen;
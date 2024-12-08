import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment_count': 
            return { ...state, count: state.count + action.payload};

        case 'decrement_count':
            return { ...state, count: state.count - action.payload};

        default:
    }

}

const CounterScreen = () => {
    // const [counter, setCounter] = useState(0);
    const [state, dispatch] = useReducer(reducer, { count : 0});

    return <View style={{ marginTop: 20}}>
            <View style={styles.button}>
                <Button 
                    title="Increase" 
                    color='green' 
                    onPress={ () => {
                        // setCounter(counter + 1);
                        dispatch({ type: 'increment_count', payload: 1 })
                    }}
                />
            </View>
            <View style={styles.button}>
                <Button 
                    title="Decrease" 
                    color='red' 
                    onPress={ () => {
                        // setCounter(counter - 1)
                        dispatch({ type: 'decrement_count', payload: 1})
                    }}
                />
            </View>
        <Text style={styles.text}>Current Count:</Text>
        <Text style={styles.text}>{state.count}</Text>
    </View>
}

const styles = StyleSheet.create({
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
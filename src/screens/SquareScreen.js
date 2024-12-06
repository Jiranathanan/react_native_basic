import React, { useReducer, useState } from "react";
import { Text, View, StyleSheet } from 'react-native';
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 25;

const reducer = (state, action) => {
    // state === { red: number, green: number, blue: number };
    // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }

    switch(action.colorToChange) {
        case 'red':
            if ( state.red + action.amount <= 0) {
                return { ...state, red: 0}
            }
            if ( state.red + action.amount >= 255) {
                return { ...state, red: 255 }
            } else {
                return {...state, red: state.red + action.amount}
            }
        case 'green':
            if (state.green + action.amount <= 0) {
                return {...state, green: 0}
            }
            if (state.green + action.amount >= 255) {
                return {...state, green: 255}
            } else {
                return {...state, green: state.green + action.amount}
            }
        case 'blue':
            if (state.blue + action.amount <= 0) {
                return {...state, blue: 0}
            }
            if (state.blue + action.amount >= 255) {
                return {...state, blue: 255}
            } else {
                return {...state, blue: state.blue + action.amount}
            }
        default:
    }
}

const SquareScreen = () => {
    const [state, dispatch] = useReducer( reducer, {red: 0, green: 0, blue: 0})

    return <View>
        <ColorCounter color="Red" 
                    onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT }) } 
                    onDecrease={() => dispatch({ colorToChange: 'red', amount: -COLOR_INCREMENT }) } />
        <ColorCounter color="Green" 
                    onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })} 
                    onDecrease={() => dispatch({ colorToChange: 'green', amount: -COLOR_INCREMENT }) } />
        <ColorCounter color="Blue" 
                    onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT }) } 
                    onDecrease={() => dispatch({ colorToChange: 'blue', amount: -COLOR_INCREMENT })} />
        <View style={{ height: 100, width: 100, 
                        backgroundColor: `rgb( ${state.red}, ${state.green}, ${state.blue})`, 
                        marginHorizontal: 'auto', 
                        marginVertical: 50 }}>
        </View>
        <Text style={{ textAlign: 'center', fontSize: 24 }}>{`rgb( ${state.red}, ${state.green}, ${state.blue})`}</Text>
    </View>
}


const styles = StyleSheet.create({});

export default SquareScreen;
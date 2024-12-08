import React, { useReducer } from "react";
import { Text, View, StyleSheet } from 'react-native';
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 25;

const reducer = (state, action) => {
    // state === { red: number, green: number, blue: number };
    // action === { colorToChange: 'red' || 'green' || 'blue', payload: 15 || -15 }

    switch(action.type) {
        case 'change_red':
            if ( state.red + action.payload <= 0) {
                return { ...state, red: 0}
            }
            if ( state.red + action.payload >= 255) {
                return { ...state, red: 255 }
            } else {
                return {...state, red: state.red + action.payload}
            }
        case 'change_green':
            if (state.green + action.payload <= 0) {
                return {...state, green: 0}
            }
            if (state.green + action.payload >= 255) {
                return {...state, green: 255}
            } else {
                return {...state, green: state.green + action.payload}
            }
        case 'change_blue':
            if (state.blue + action.payload <= 0) {
                return {...state, blue: 0}
            }
            if (state.blue + action.payload >= 255) {
                return {...state, blue: 255}
            } else {
                return {...state, blue: state.blue + action.payload}
            }
        default:
    }
}

const SquareScreen = () => {
    const [state, dispatch] = useReducer( reducer, {red: 0, green: 0, blue: 0})

    return <View>
        <ColorCounter color="Red" 
                    onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT }) } 
                    onDecrease={() => dispatch({ type: 'change_red', payload: -COLOR_INCREMENT }) } />
        <ColorCounter color="Green" 
                    onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })} 
                    onDecrease={() => dispatch({ type: 'change_green', payload: -COLOR_INCREMENT }) } />
        <ColorCounter color="Blue" 
                    onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT }) } 
                    onDecrease={() => dispatch({ type: 'change_blue', payload: -COLOR_INCREMENT })} />
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
import React, { useState } from "react";
import { Text, View, StyleSheet } from 'react-native';
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 25;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    return <View>
        <ColorCounter color="Red" onIncrease={() => setRed(Math.min(red + COLOR_INCREMENT, 255))} onDecrease={() => setRed(Math.max(red-COLOR_INCREMENT, 0))} />
        <ColorCounter color="Green" onIncrease={() => setGreen(Math.min(green + COLOR_INCREMENT, 255))} onDecrease={() => setGreen(Math.max(green - COLOR_INCREMENT, 0))} />
        <ColorCounter color="Blue" onIncrease={() => setBlue(Math.min(blue+COLOR_INCREMENT, 255))} onDecrease={() => setBlue(Math.max(blue-COLOR_INCREMENT, 0))} />
        <View style={{ height: 100, width: 100, 
                        backgroundColor: `rgb( ${red}, ${green}, ${blue})`, 
                        marginHorizontal: 'auto', 
                        marginVertical: 50 }}>
        </View>
        <Text style={{ textAlign: 'center', fontSize: 24, color: `rgb( ${red}, ${green}, ${blue})`}}>{"rgb(" + red + ", " + green + ", " + blue + ")"}</Text>
    </View>
}


const styles = StyleSheet.create({});

export default SquareScreen;
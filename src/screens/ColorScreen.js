import React from "react";
import { View, StyleSheet, Button } from 'react-native';

const ColorScreen = () => {
    return <View>
            <Button title="Add a Color" />
            <View style={{ 
                height: 100, width: 100, 
                backgroundColor: 'rgb(0, 255, 0)', 
                marginHorizontal: 'auto', 
                marginVertical: 100 }}>

            </View>
    </View>
}

const styles = StyleSheet.create({});

export default ColorScreen;
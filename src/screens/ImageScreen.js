import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return <View>
        <ImageDetail title="Forest" imagePath={require(`../../assets/forest.jpg`)} score={9}/>
        <ImageDetail title="Mountain" imagePath={require(`../../assets/mountain.jpg`)} score={7}/>
        <ImageDetail title="Sea" imagePath={require(`../../assets/beach.jpg`)} score={4}/>
    </View>
}

const styles = StyleSheet.create({})

export default ImageScreen;
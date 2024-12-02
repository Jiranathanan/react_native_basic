import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ title, imagePath, score }) => {
    console.log('Image score is ', + score);
    return <View style={styles.text}>
        <Image source={imagePath} />
        <Text>{title}</Text>
        <Text>Image Score - {score}</Text>
        </View>}

const styles = StyleSheet.create({
    text: {
        marginVertical: 20,
        marginHorizontal: 30
    }
})

export default ImageDetail;
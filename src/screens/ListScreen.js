import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        {"name": "Friend 1", "age": 20},
        {"name": "Friend 2", "age": 45},
        {"name": "Friend 3", "age": 32},
        {"name": "Friend 4", "age": 27},
        {"name": "Friend 5", "age": 53},
        {"name": "Friend 6", "age": 30},
        {"name": "Friend 7", "age": 22},
        {"name": "Friend 8", "age": 66},
        {"name": "Friend 9", "age": 18}
    ]
    return (
        <View style={styles.viewStyle}>        
            <FlatList 
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={ ({ item }) => {
                return <Text style={styles.text}>{item.name} - Age {item.age}</Text>
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'blue',
        fontSize: 23,
        padding: 10,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'black'
    },
    viewStyle: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 40
    }
});

export default ListScreen;
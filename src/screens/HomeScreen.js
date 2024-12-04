import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HOME</Text>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Components')}
      >
        <Text style={styles.touchStyle}>Go to Components</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate('List')}
      >
        <Text style={styles.touchStyle}>Go to List</Text>
      </TouchableOpacity>      
      <TouchableOpacity 
        onPress={() => navigation.navigate('ImageScreen')}
      >
        <Text style={styles.touchStyle}>Go to Image</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Counter')}
      >
        <Text style={styles.touchStyle}>Go to Counter</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Color')}
      >
        <Text style={styles.touchStyle}>Go to Color</Text>
      </TouchableOpacity>
      

      
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  touchStyle: {
    textAlign: 'center',
    fontSize: 24,
    borderWidth: 2,
    borderColor: 'green',
    marginHorizontal: 40,
    marginVertical: 20,
    backgroundColor: 'teal',
    color: 'snow' 
  }
});

export default HomeScreen;

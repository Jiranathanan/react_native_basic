import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [password, setPassword] = useState('');
    return (<View>
            <Text style={{ marginTop: 12, fontSize: 24, marginLeft: 12
            }}>Enter Password:</Text>
            <TextInput 
                style= {styles.input}
                placeholder="Your Password"
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newValue) => setPassword(newValue) }
            />
            <Text style={{ marginTop: 10, marginLeft: 12, fontSize: 14, color: 'red'}}>{ password.length > 0 && password.length < 6 ? "Password must be longer than 5 characters" : null }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40, 
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});

export default TextScreen;
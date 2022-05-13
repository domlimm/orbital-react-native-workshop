import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Ex1Solution = () => {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{`Counter: ${count}`}</Text>
            <View style={styles.buttonContainer}>
                <Button title='Increment' onPress={() => setCount(count + 1)} />
                <Button title='Decrement' onPress={() => setCount(count - 1)} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EBECF0',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        width: '80%'
    },
    button: {
        marginVertical: 8
    },
    text: {
        marginVertical: 10
    }
});

export default Ex1Solution;

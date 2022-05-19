import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Ex1Solution = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{`Counter: ${count}`}</Text>
            <View style={styles.buttonContainer}>
                <Button title='Increment' onPress={increment} />
                <Button title='Decrement' onPress={decrement} />
            </View>
        </View>
    );
};

export default Ex1Solution;

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

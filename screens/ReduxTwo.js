import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ReduxTwo = () => {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{`Counter: ${count}`}</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title='Increment by 2'
                    onPress={() => setCount(count + 2)}
                />
                <Button
                    title='Decrement by 2'
                    onPress={() => setCount(count - 2)}
                />
            </View>
        </View>
    );
};

export default ReduxTwo;

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

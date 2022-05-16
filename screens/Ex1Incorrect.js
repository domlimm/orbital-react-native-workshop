import React from 'react';
import { StyleSheet, Text, View, Button, ToastAndroid } from 'react-native';

const Ex1Incorrect = () => {
    const showToast = () => {
        ToastAndroid.show(
            "This will not work, let's look at states!",
            ToastAndroid.SHORT
        );
    };

    let count = 0;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{`Counter: ${count}`}</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title='Increment'
                    onPress={() => {
                        ++count;
                        showToast();
                    }}
                />
                <Button
                    title='Decrement'
                    onPress={() => {
                        --count;
                        showToast();
                    }}
                />
            </View>
        </View>
    );
};

export default Ex1Incorrect;

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

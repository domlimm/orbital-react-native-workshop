import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { incrementByOne, decrementByOne } from '../store/count';

const Ex1SolutionRedux = () => {
    // Hook to dispatch actions
    const dispatch = useDispatch();

    // Use key/s setup in the store via useSelector hook
    const count = useSelector(state => state.count.count);

    const reduxIncrement = () => {
        dispatch(incrementByOne());
    };

    const reduxDecrement = () => {
        dispatch(decrementByOne());
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{`Counter: ${count}`}</Text>
            <View style={styles.buttonContainer}>
                <Button title='Increment' onPress={reduxIncrement} />
                <Button title='Decrement' onPress={reduxDecrement} />
            </View>
        </View>
    );
};

export default Ex1SolutionRedux;

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

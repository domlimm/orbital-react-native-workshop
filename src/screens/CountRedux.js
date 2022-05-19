import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { incrementByInput, decrementByInput } from '../store/count';

const CountRedux = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count.count);

    const [input, setInput] = useState(0);

    const increment = () => {
        dispatch(incrementByInput({ input: parseInt(input) }));
    };

    const decrement = () => {
        dispatch(decrementByInput({ input: parseInt(input) }));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{`Counter: ${count}`}</Text>
            <TextInput
                value={input.toString()}
                onChangeText={setInput}
                style={styles.textInput}
                keyboardType='decimal-pad'
            />
            <View style={styles.buttonContainer}>
                <View style={styles.subButtonContainer}>
                    <Button title='Add' onPress={increment} />
                </View>
                <View style={styles.subButtonContainer}>
                    <Button title='Sub' onPress={decrement} />
                </View>
                <View style={styles.subButtonContainer}>
                    <Button title='Reset' onPress={() => setInput('')} />
                </View>
            </View>
        </View>
    );
};

export default CountRedux;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EBECF0',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    subButtonContainer: {
        width: '30%'
    },
    text: {
        marginVertical: 10
    },
    textInput: {
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: '#3F3F3F',
        borderRadius: 4,
        width: '60%',
        paddingHorizontal: 8,
        textAlign: 'center',
        marginBottom: 10
    }
});

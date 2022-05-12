import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

const Ex1Incorrect = () => {
    let count = 0;

    return (
        <View>
            <Text>{count}</Text>
            <Button title='Increment' onPress={() => ++count} />
            <Button title='Decrement' onPress={() => --count} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default Ex1Incorrect;

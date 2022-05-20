import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    KeyboardAvoidingView,
    Pressable,
    Dimensions,
    FlatList,
    ScrollView,
} from 'react-native';
import React, { useState } from 'react';

import { Task } from '../components';
import { data } from '../constants/dummy-data';

const INPUT_PLACEHOLDER = 'Enter your task and hit the Add';
const THEME = '#407BFF';

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
    const [task, setTask] = useState('');

    const onSubmitHandler = () => {
        console.log('Adding task...');
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : null}
        >
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.container}>
                        <Text style={styles.headerText}>Your Tasks 👋🏻</Text>
                        <FlatList
                            data={data}
                            renderItem={({ item, index }) => (
                                <Task desc={item} key={index} />
                            )}
                            style={styles.listContainer}
                            showsVerticalScrollIndicator={false}
                        />
                        <View style={styles.formContainer}>
                            <TextInput
                                onChangeText={setTask}
                                value={task}
                                selectionColor={THEME}
                                placeholder={INPUT_PLACEHOLDER}
                                style={styles.taskInput}
                            />
                            <Pressable
                                onPress={onSubmitHandler}
                                android_ripple={{ color: 'white' }}
                                style={styles.button}
                            >
                                <Text style={styles.buttonText}>Add</Text>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAF9F6',
    },
    scrollContainer: {
        flex: 1,
        flexGrow: 1,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 32,
        marginLeft: 14,
        marginTop: 14,
        marginBottom: 10,
        color: THEME,
    },
    listContainer: {
        height: 0.72 * height,
        flexGrow: 0,
    },
    formContainer: {
        flexDirection: 'row',
        marginHorizontal: 14,
        marginVertical: 8,
    },
    taskInput: {
        width: width * 0.7,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#E0D4B0',
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginRight: 8,
    },
    button: {
        width: width * 0.22,
        paddingVertical: 10,
        paddingHorizontal: 6,
        backgroundColor: THEME,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
    },
});

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
    ToastAndroid,
    Keyboard,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import {} from 'firebase/firestore';

import { db } from '../firebase';
import { Task } from '../components';

const INPUT_PLACEHOLDER = 'Enter your task and hit Add';
const THEME = '#407BFF';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        // Expensive operation. Consider your app's design on when to invoke this.
        // Could use Redux to help on first application load.
        // Todo: listen to firestore changes
    }, []);

    const showRes = (text) => {
        ToastAndroid.show(text, ToastAndroid.SHORT);
    };

    // https://firebase.google.com/docs/firestore/manage-data/add-data#web-version-9
    // https://firebase.google.com/docs/firestore/manage-data/add-data#web-version-9_7
    const onSubmitHandler = () => {
        if (task.length === 0) {
            showRes('Task description cannot be empty!');
            return;
        }

        // Todo
    };

    const onDeleteHandler = () => {
        // Todo
    };

    const clearForm = () => {
        setTask('');
        Keyboard.dismiss();
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : null}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.contentContainer}>
                    <Text style={styles.headerText}>Your Tasks 👋🏻</Text>
                    <View style={styles.listContainer}>
                        <FlatList
                            data={taskList}
                            renderItem={({ item, index }) => (
                                <Task
                                    data={item}
                                    key={index}
                                    onDelete={onDeleteHandler}
                                />
                            )}
                            style={styles.list}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </View>
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
    contentContainer: {
        flex: 1,
        backgroundColor: '#FAF9F6',
    },
    listContainer: {
        flex: 1,
        paddingBottom: 70, // Fix: Temporary workaround
    },
    list: {
        overflow: 'scroll',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 32,
        marginLeft: 14,
        marginTop: 14,
        marginBottom: 10,
        color: THEME,
    },
    formContainer: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        paddingHorizontal: 14,
        paddingVertical: 8,
        backgroundColor: '#FAF9F6',
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

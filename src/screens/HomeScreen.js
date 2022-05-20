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
    ToastAndroid,
    Keyboard,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { addDoc, onSnapshot, query, collection } from 'firebase/firestore';

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
        const taskQuery = query(collection(db, 'tasks'));

        const unsubscribe = onSnapshot(taskQuery, (snapshot) => {
            const tasks = [];

            snapshot.forEach((doc) => {
                tasks.push({ id: doc.id, ...doc.data() });
            });

            setTaskList([...tasks]);
        });

        return unsubscribe;
    }, [onSubmitHandler]);

    const showRes = (text) => {
        ToastAndroid.show(text, ToastAndroid.SHORT);
    };

    // https://firebase.google.com/docs/firestore/manage-data/add-data#web-version-9
    // https://firebase.google.com/docs/firestore/manage-data/add-data#web-version-9_7
    const onSubmitHandler = async () => {
        if (task.length === 0) {
            showRes('Task description cannot be empty!');
            return;
        }

        try {
            const taskRef = await addDoc(collection(db, 'tasks'), {
                desc: task,
                completed: false,
            });

            console.log('onSubmitHandler success', taskRef.id);
            showRes('Successfully added task!');
            clearForm();
        } catch (err) {
            console.log('onSubmitHandler failure', err);
            showRes('Failed to add task!');
        }
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
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.contentContainer}>
                        <Text style={styles.headerText}>Your Tasks 👋🏻</Text>
                        <FlatList
                            data={taskList}
                            renderItem={({ item, index }) => (
                                <Task desc={item.desc} key={index} />
                            )}
                            style={styles.listContainer}
                            showsVerticalScrollIndicator={false}
                        />
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
    contentContainer: {
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
        flexGrow: 0,
    },
    formContainer: {
        position: 'absolute',
        bottom: 0,
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

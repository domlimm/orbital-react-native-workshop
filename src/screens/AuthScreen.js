import {
    StyleSheet,
    View,
    Text,
    ToastAndroid,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import React, { useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';

import { AuthTextInput, AuthPressable } from '../components';
import { auth } from '../firebase';

const AuthScreen = () => {
    const [isLogin, setIsLogin] = useState(true);

    // Todo: email, password states

    const signUpToast = () => {
        ToastAndroid.show(
            'Sign Up successfully completed!',
            ToastAndroid.SHORT
        );
    };

    const missingFieldsToast = () => {
        ToastAndroid.show(
            'Missing fields, please try again!',
            ToastAndroid.SHORT
        );
    };

    const loginHandler = () => {
        if (email.length === 0 || password.length === 0) {
            missingFieldsToast();
            return;
        }

        // Todo
    };

    const signUpHandler = () => {
        if (email.length === 0 || password.length === 0) {
            missingFieldsToast();
            return;
        }

        // Todo
    };

    const restoreForm = () => {
        setEmail('');
        setPassword('');
        Keyboard.dismiss();
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : null}
        >
            <View style={styles.container}>
                <Text style={[styles.welcomeText, styles.boldText]}>
                    {`Welcome back to your\nTodo List!`}
                </Text>
                <Text style={[styles.authText, styles.boldText]}>
                    {isLogin ? 'You are logging in!' : 'You are signing up!'}
                </Text>
                <AuthTextInput
                    value={email}
                    placeholder="Your Email"
                    textHandler={setEmail}
                    keyboardType="email-address"
                />
                <AuthTextInput
                    value={password}
                    placeholder="Your Password"
                    textHandler={setPassword}
                    secureTextEntry
                />
                <AuthPressable
                    onPressHandler={isLogin ? loginHandler : signUpHandler}
                    title={'Proceed'}
                />
                <AuthPressable
                    onPressHandler={() => setIsLogin(!isLogin)}
                    title={`Switch to ${isLogin ? 'Sign Up' : 'Login'}`}
                />
            </View>
        </KeyboardAvoidingView>
    );
};

export default AuthScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EBECF0',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boldText: {
        fontWeight: '400',
    },
    welcomeText: {
        fontSize: 32,
        textAlign: 'center',
        marginBottom: 20,
    },
    authText: {
        fontSize: 20,
        marginBottom: 10,
    },
});

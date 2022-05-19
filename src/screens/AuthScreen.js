import { StyleSheet, View, Text, ToastAndroid, Keyboard } from 'react-native';
import React, { useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';

import { AuthTextInput, AuthPressable } from '../components';
import { auth } from '../firebase';

const AuthScreen = ({ navigation }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUpToast = () => {
        ToastAndroid.show(
            'Sign Up successfully completed!',
            ToastAndroid.SHORT
        );
    };

    const loginHandler = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;

                console.log(user);

                restoreForm();
                navigation.navigate('Home');
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.error('[loginHandler]', errorCode, errorMessage);
            });
    };

    const signUpHandler = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;

                console.log(user);

                restoreForm();
                signUpToast();
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.error('[signUpHandler]', errorCode, errorMessage);
            });
    };

    const restoreForm = () => {
        setEmail('');
        setPassword('');
        Keyboard.dismiss();
    };

    return (
        <View style={styles.container}>
            <Text style={[styles.welcomeText, styles.boldText]}>
                Welcome back to Todo List!
            </Text>
            <Text style={[styles.authText, styles.boldText]}>
                {isLogin ? 'You are logging in!' : 'You are signing up!'}
            </Text>
            <AuthTextInput
                value={email}
                placeholder='Your Email'
                textHandler={setEmail}
                keyboardType='email-address'
            />
            <AuthTextInput
                value={password}
                placeholder='Your Password'
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
    );
};

export default AuthScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EBECF0',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boldText: {
        fontWeight: 'bold'
    },
    welcomeText: {},
    authText: {}
});

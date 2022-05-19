import { StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react';

import { AuthTextInput, AuthPressable } from '../components/';

const HomeScreen = ({ navigation }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                onPressHandler={() => console.log('// todo')}
                title={'Proceed'}
            />
            <AuthPressable
                onPressHandler={() => setIsLogin(!isLogin)}
                title={isLogin ? 'Sign Up' : 'Login'}
            />
        </View>
    );
};

export default HomeScreen;

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

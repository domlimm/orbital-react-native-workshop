import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    TextInput,
    Dimensions,
    Keyboard
} from 'react-native';
import React, { useState } from 'react';

const { width } = Dimensions.get('window');

const Ex2Solution = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValidInput, setIsValidInput] = useState(false);
    const [response, setResponse] = useState('');

    const signUpHandler = () => {
        if (name.length === 0 || email.length === 0 || password.length === 0) {
            setResponse('');
            setIsValidInput(false);
            Keyboard.dismiss();

            return;
        }

        setName('');
        setEmail('');
        setPassword('');
        setResponse('Sign Up Successful');
        setIsValidInput(true);
        Keyboard.dismiss();
    };

    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: 'https://www.nus.edu.sg/images/default-source/base/logo.png'
                }}
                resizeMode='contain'
                style={styles.image}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={setName}
                    value={name}
                    placeholder='Name'
                    style={styles.input}
                    selectionColor='#003D7C'
                />
                <TextInput
                    onChangeText={setEmail}
                    value={email}
                    placeholder='Email'
                    keyboardType='email-address'
                    selectionColor='#003D7C'
                    style={styles.input}
                />
                <TextInput
                    onChangeText={setPassword}
                    value={password}
                    placeholder='Password'
                    secureTextEntry={true}
                    selectionColor='#003D7C'
                    style={styles.input}
                />
                <Pressable
                    onPress={signUpHandler}
                    style={styles.button}
                    android_ripple={{ color: '#FFF' }}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </Pressable>
            </View>
            {isValidInput && (
                <Text style={styles.responseText}>{response}</Text>
            )}
        </View>
    );
};

export default Ex2Solution;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBECF0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: width * 0.6,
        height: 240,
        alignSelf: 'center'
    },
    inputContainer: {
        alignItems: 'center'
    },
    input: {
        marginVertical: 4,
        width: 200,
        height: 30,
        borderColor: 'black',
        borderWidth: 2,
        paddingHorizontal: 8
    },
    button: {
        backgroundColor: '#003D7C',
        marginTop: 46, // Deducting off from the marginBottom of input i.e. 4dp
        paddingHorizontal: 5,
        paddingVertical: 8,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 12,
        color: 'white'
    },
    responseText: {
        color: 'green',
        fontSize: 20,
        marginTop: 40
    }
});

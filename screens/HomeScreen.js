import { StyleSheet, View, Pressable, Text, ToastAndroid } from 'react-native';
import React from 'react';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate('Login')}
                android_ripple={{ color: '#FFF' }}
            >
                <Text style={styles.text}>Login</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate('SignUp')}
                android_ripple={{ color: '#FFF' }}
            >
                <Text style={styles.text}>Sign Up</Text>
            </Pressable>
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
    button: {
        backgroundColor: '#407BFF',
        marginVertical: 10,
        paddingVertical: 10,
        width: '80%',
        alignItems: 'center',
        borderRadius: 4
    },
    text: {
        color: 'white'
    }
});

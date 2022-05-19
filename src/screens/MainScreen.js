import { StyleSheet, View, Pressable, Text } from 'react-native';
import React from 'react';

const MainScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => navigation.navigate('Ex1Incorrect')}
                style={styles.button}
                android_ripple={{ color: '#FFF' }}
            >
                <Text style={styles.text}>Exercise 1 (Incorrect)</Text>
            </Pressable>
            <Pressable
                onPress={() => navigation.navigate('Ex1Solution')}
                style={styles.button}
                android_ripple={{ color: '#FFF' }}
            >
                <Text style={styles.text}>Exercise 1 (Solution)</Text>
            </Pressable>
            <Pressable
                onPress={() => navigation.navigate('Ex1SolutionRedux')}
                style={styles.button}
                android_ripple={{ color: '#FFF' }}
            >
                <Text style={styles.text}>Exercise 1 (Solution Redux)</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate('Ex2Solution')}
                android_ripple={{ color: '#FFF' }}
            >
                <Text style={styles.text}>Exercise 2 (Solution)</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate('CountRedux')}
                android_ripple={{ color: '#FFF' }}
            >
                <Text style={styles.text}>Redux Count Example</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate('Auth')}
                android_ripple={{ color: '#FFF' }}
            >
                <Text style={styles.text}>TodoList</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate('Users')}
                android_ripple={{ color: '#FFF' }}
            >
                <Text style={styles.text}>UsersScreen</Text>
            </Pressable>
        </View>
    );
};

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EBECF0',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#407BFF',
        marginVertical: 10,
        paddingVertical: 10,
        width: '80%',
        alignItems: 'center',
        borderRadius: 4,
    },
    text: {
        color: 'white',
    },
});

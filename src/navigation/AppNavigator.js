import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { MaterialIcons } from '@expo/vector-icons';

import { auth } from '../firebase';
import {
    MainScreen,
    Ex1Incorrect,
    Ex1Solution,
    Ex2Solution,
    Ex1SolutionRedux,
    CountRedux,
    AuthScreen,
    LoginScreen,
    UsersScreen,
    HomeScreen,
} from '../screens';

const Stack = createNativeStackNavigator();
const TodoStack = createNativeStackNavigator();

const AppNavigator = () => {
    /**
     * This hook serves as a listener to auth state changes provided by firebase.
     */
    // Todo: isAuth hook

    useEffect(() => {
        // Todo: Authentication
    }, []);

    const MainNavigator = () => (
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen
                name="Main"
                options={{ title: 'Orbital 22 React Native Workshop' }}
                component={MainScreen}
            />
            <Stack.Screen
                name="Ex1Incorrect"
                options={{ title: 'Exercise 1 (Incorrect)' }}
                component={Ex1Incorrect}
            />
            <Stack.Screen
                name="Ex1Solution"
                options={{ title: 'Exercise 1 (Solution)' }}
                component={Ex1Solution}
            />
            <Stack.Screen
                name="Ex1SolutionRedux"
                options={{ title: 'Exercise 1 (Solution Redux)' }}
                component={Ex1SolutionRedux}
            />
            <Stack.Screen
                name="Ex2Solution"
                options={{ title: 'Exercise 2 (Solution)' }}
                component={Ex2Solution}
            />
            <Stack.Screen
                name="CountRedux"
                options={{ title: 'Count with specific input' }}
                component={CountRedux}
            />
            <Stack.Screen
                name="Auth"
                options={{ headerTitle: 'Todo List' }}
                component={AuthScreen}
            />
            <Stack.Screen
                name="Users"
                options={{ headerShown: false }}
                component={UsersScreen}
            />
        </Stack.Navigator>
    );

    const logoutHandler = () => {
        // Todo: Authentication
    };

    const LogoutIcon = () => (
        <TouchableOpacity onPress={logoutHandler}>
            <MaterialIcons name="logout" size={28} color="#407BFF" />
        </TouchableOpacity>
    );

    const TodoNavigator = () => (
        <TodoStack.Navigator>
            <TodoStack.Screen
                name="Home"
                options={{
                    headerTitle: 'Home',
                    headerRight: () => <LogoutIcon />,
                }}
                component={HomeScreen}
            />
        </TodoStack.Navigator>
    );

    return (
        <NavigationContainer>{/* Todo: Authentication */}</NavigationContainer>
    );
};

export default AppNavigator;

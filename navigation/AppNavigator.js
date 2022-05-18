import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    MainScreen,
    Ex1Incorrect,
    Ex1Solution,
    Ex2Solution,
    Ex1SolutionRedux,
    CountRedux,
    HomeScreen,
    LoginScreen,
    SignUpScreen
} from '../screens';

const Stack = createNativeStackNavigator();
const TodoStack = createNativeStackNavigator();

const TodoNavigator = () => (
    <TodoStack.Navigator>
        <TodoStack.Screen
            name='Home'
            options={{ headerTitle: 'TodoList' }}
            component={HomeScreen}
        />
        <TodoStack.Screen
            name='Login'
            options={{ headerTitle: 'Login' }}
            component={LoginScreen}
        />
        <TodoStack.Screen
            name='SignUp'
            options={{ headerTitle: 'Sign Up' }}
            component={SignUpScreen}
        />
    </TodoStack.Navigator>
);

const AppNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Main'>
            <Stack.Screen
                name='Main'
                options={{ title: 'Orbital 22 React Native Workshop' }}
                component={MainScreen}
            />
            <Stack.Screen
                name='Ex1Incorrect'
                options={{ title: 'Exercise 1 (Incorrect)' }}
                component={Ex1Incorrect}
            />
            <Stack.Screen
                name='Ex1Solution'
                options={{ title: 'Exercise 1 (Solution)' }}
                component={Ex1Solution}
            />
            <Stack.Screen
                name='Ex1SolutionRedux'
                options={{ title: 'Exercise 1 (Solution Redux)' }}
                component={Ex1SolutionRedux}
            />
            <Stack.Screen
                name='Ex2Solution'
                options={{ title: 'Exercise 2 (Solution)' }}
                component={Ex2Solution}
            />
            <Stack.Screen
                name='CountRedux'
                options={{ title: 'Count with specific input' }}
                component={CountRedux}
            />
            <Stack.Screen
                name='Todo'
                options={{ headerShown: false }}
                component={TodoNavigator}
            />
        </Stack.Navigator>
    </NavigationContainer>
);

export default AppNavigator;

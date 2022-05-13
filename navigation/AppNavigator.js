import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import Ex1Incorrect from '../screens/Ex1Incorrect';
import Ex1Solution from '../screens/Ex1Solution';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomeScreen} />
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
        </Stack.Navigator>
    </NavigationContainer>
);

export default AppNavigator;

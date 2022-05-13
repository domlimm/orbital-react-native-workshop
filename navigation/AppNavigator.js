import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import Ex1Incorrect from '../screens/Ex1Incorrect';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Ex1Incorrect' component={Ex1Incorrect} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default AppNavigator;

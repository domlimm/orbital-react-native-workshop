import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ex1Incorrect from '../screens/Ex1Incorrect';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name='Ex1Incorrect' component={Ex1Incorrect} />
    </Stack.Navigator>
);

export default AppNavigator;

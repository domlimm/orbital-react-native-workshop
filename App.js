import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './navigation/AppNavigator';

export default App = () => {
    return (
        <NavigationContainer>
            <AppNavigator />
            <StatusBar style='auto' />
        </NavigationContainer>
    );
};

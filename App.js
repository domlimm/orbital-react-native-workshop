import { StatusBar } from 'expo-status-bar';

import AppNavigator from './navigation/AppNavigator';

export default App = () => {
    return (
        <>
            <AppNavigator />
            <StatusBar style='auto' />
        </>
    );
};

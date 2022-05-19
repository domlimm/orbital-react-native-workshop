import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import AppNavigator from './navigation/AppNavigator';
import { store } from './store/store';

export default () => {
    return (
        <Provider store={store}>
            <AppNavigator />
            <StatusBar style="auto" />
        </Provider>
    );
};

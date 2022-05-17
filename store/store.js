import { configureStore } from '@reduxjs/toolkit';

// Default export from count.js
import countReducer from './count';

export const store = configureStore({
    reducer: {
        count: countReducer
    }
});

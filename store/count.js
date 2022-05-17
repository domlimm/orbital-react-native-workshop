import { createSlice } from '@reduxjs/toolkit';

export const countSlice = createSlice({
    name: 'count',
    initialState: {
        count: 0
    },
    reducers: {
        // Can mutate state directly; Do it in a mutable way as compared to Redux
        incrementByOne: state => {
            state.count += 1;
        },
        decrementByOne: state => {
            state.count -= 1;
        },
        incrementByInput: (state, action) => {
            state.count += action.payload.input;
        },
        decrementByInput: (state, action) => {
            state.count -= action.payload.input;
        }
    }
});

// Export actions so that we can dispatch and invoke the functions from anywhere in our application
export const {
    incrementByOne,
    decrementByOne,
    incrementByInput,
    decrementByInput
} = countSlice.actions;
export default countSlice.reducer;

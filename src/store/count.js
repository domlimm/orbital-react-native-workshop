import { createSlice } from '@reduxjs/toolkit';

export const countSlice;

// Export actions so that we can dispatch and invoke the functions from anywhere in our application
export const {
    incrementByOne,
    decrementByOne,
    incrementByInput,
    decrementByInput
} = countSlice.actions;
export default countSlice.reducer;

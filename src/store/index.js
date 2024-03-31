import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';

// ==============================|| REDUX - MAIN STORE ||============================== //

const store = configureStore({
    reducer: rootReducer, 
});
const persister = 'Free';

export { store, persister };

import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import commonReducer from './commonSlice'

// ==============================|| COMBINE REDUCER ||============================== //

const rootReducer = combineReducers({
  customization: customizationReducer,
  commonSlice : commonReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import dataReducer from './datareducer/reducer'

const rootReducer = combineReducers({
  session: sessionReducer,
  popupData: dataReducer
});

export default rootReducer;

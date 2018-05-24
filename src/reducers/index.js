import { combineReducers } from 'redux';
import chatReducers from './reducer_chat';


const rootReducer = combineReducers({
    chat: chatReducers
});

export default rootReducer;
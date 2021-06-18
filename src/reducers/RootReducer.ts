import { combineReducers } from 'redux'
import Counter from './Counter'

const RootReducer = combineReducers({
    counter: Counter,
});
export default RootReducer;
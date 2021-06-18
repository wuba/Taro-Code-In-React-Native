import {createStore,applyMiddleware,compose } from 'redux';
import {createLogger} from 'redux-logger';
import RootReducer from '../reducers/RootReducer';

export const configureStore = (initialState) => {
    const store = createStore(
        RootReducer,//reducer模块 下面会创建并解释
        initialState,//state初始值
        compose (
            applyMiddleware(createLogger())
        )
    )
    return store;
}

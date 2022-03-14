import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { messagesReducer } from './reducers/messagesReducer';

export const rootReducer = combineReducers({
    messages: messagesReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootStore = ReturnType<typeof rootReducer>;
export const useTypedSelector: TypedUseSelectorHook<RootStore> = useSelector;

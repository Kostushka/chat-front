import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { messagesReducer } from './reducers/messagesReducer';
import { roomsReducer } from './reducers/roomsReducer';

export const rootReducer = combineReducers({
    messages: messagesReducer,
    rooms: roomsReducer,
});
export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export type RootStore = ReturnType<typeof rootReducer>;
export const useTypedSelector: TypedUseSelectorHook<RootStore> = useSelector;

import {
    AddMessagesAction,
    GetMessagesAction,
    MessagesAction,
    MessagesActionType,
    MessagesState,
    MessageType,
} from '../../types/messages';

const initialState: MessagesState = {
    messages: [],
};

export const messagesReducer = (
    state = initialState,
    action: MessagesAction
): MessagesState => {
    switch (action.type) {
        case MessagesActionType.ADD_MESSAGES:
            return {
                ...state,
                messages: [...state.messages, action.payload],
            };
        case MessagesActionType.GET_MESSAGES:
            return {
                ...state,
                messages: [...state.messages, action.payload],
            };

        default:
            return state;
    }
};

export const AddMessagesActionCreator = (
    payload: MessageType
): AddMessagesAction => ({
    type: MessagesActionType.ADD_MESSAGES,
    payload,
});
export const GetMessagesActionCreator = (
    payload: MessageType
): GetMessagesAction => ({
    type: MessagesActionType.GET_MESSAGES,
    payload,
});

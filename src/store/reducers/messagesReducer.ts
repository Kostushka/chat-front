import {
    FetchMessagesSuccessAction,
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
        case MessagesActionType.FETCH_MESSAGES_SUCCESS:
            return {
                ...state,
                messages: [...state.messages, action.payload],
            };

        default:
            return state;
    }
};

export const FetchMessagesSuccessActionCreator = (
    payload: MessageType
): FetchMessagesSuccessAction => ({
    type: MessagesActionType.FETCH_MESSAGES_SUCCESS,
    payload,
});

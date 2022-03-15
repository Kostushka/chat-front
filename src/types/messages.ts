export type MessageType = {
    id: string;
    message: string;
};

export interface MessagesState {
    messages: Array<MessageType>;
}

export enum MessagesActionType {
    FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS',
}

export interface FetchMessagesSuccessAction {
    type: MessagesActionType.FETCH_MESSAGES_SUCCESS;
    payload: MessageType;
}

export type MessagesAction = FetchMessagesSuccessAction;

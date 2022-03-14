export interface MessagesState {
    messages: object[];
}

export enum MessagesActionType {
    FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS',
}

export interface FetchMessagesSuccessAction {
    type: MessagesActionType.FETCH_MESSAGES_SUCCESS;
    payload: object;
}

export type MessagesAction = FetchMessagesSuccessAction;

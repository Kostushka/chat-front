export type MessageType = {
    id: string;
    message: string;
};

export interface MessagesState {
    messages: Array<MessageType>;
}

export enum MessagesActionType {
    ADD_MESSAGES = 'ADD_MESSAGES',
    GET_MESSAGES = 'GET_MESSAGES',
}

export interface AddMessagesAction {
    type: MessagesActionType.ADD_MESSAGES;
    payload: MessageType;
}

export interface GetMessagesAction {
    type: MessagesActionType.GET_MESSAGES;
    payload: MessageType;
}

export type MessagesAction = AddMessagesAction | GetMessagesAction;

export type UserType = {
    username: string;
    email: string;
    gender: string;
    status: string;
    role: string;
    avatar: string;
};

export interface UserState {
    user: UserType;
}
export enum UserActionType {
    GET_USER = 'GET_USER',
}

export interface GetUserAction {
    type: UserActionType.GET_USER;
    payload: UserType;
}

export type UserAction = GetUserAction;

export type UserType = {
    username: string;
    email: string;
    gender: string;
    status?: string;
    role?: string;
    avatar: string;
    soketId?: string;
};

export interface UserState {
    user: UserType;
    isLoading: boolean;
}
export enum UserActionType {
    GET_USER = 'GET_USER',
    FETCH_USER = 'FETCH_USER',
    POST_USER = 'POST_USER',
}

export interface GetUserAction {
    type: UserActionType.GET_USER;
    payload: UserType;
}

export interface PostUserAction {
    type: UserActionType.POST_USER;
    payload: UserType;
}

export interface FetchUserAction {
    type: UserActionType.FETCH_USER;
}

export type UserAction = GetUserAction | FetchUserAction | PostUserAction;

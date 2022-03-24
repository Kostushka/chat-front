export type RoomsType = {
    id: number;
    userId: number;
    name: string;
    description: string;
    tags: string[];
};

export interface RoomsState {
    rows: RoomsType[];
    isLoading: boolean;
    isError: string | null;
}

export enum RoomsActionType {
    FETCH_ROOMS = 'FETCH_ROOMS',
    FETCH_ROOMS_ERROR = 'FETCH_ROOMS_ERROR',
    GET_ROOMS = 'GET_ROOMS',
    POST_ROOMS = 'POST_ROOMS',
}

export interface FetchRoomsAction {
    type: RoomsActionType.FETCH_ROOMS;
}

export interface FetchRoomsErrorAction {
    type: RoomsActionType.FETCH_ROOMS_ERROR;
    payload: string | null;
}

export interface GetRoomsAction {
    type: RoomsActionType.GET_ROOMS;
    payload: RoomsType;
}

export interface PostRoomsAction {
    type: RoomsActionType.POST_ROOMS;
    payload: RoomsType;
}

export type RoomsAction =
    | FetchRoomsAction
    | FetchRoomsErrorAction
    | GetRoomsAction
    | PostRoomsAction;

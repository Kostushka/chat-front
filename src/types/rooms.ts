export type RoomsType = {
    id?: number;
    userId?: number;
    status?: string;
    name: string;
    description: string;
    tags: string[];
};

export interface RoomsState {
    rows: RoomsType[];
    isLoading: boolean;
    isError: string | null;
    roomId: number | null;
}

export enum RoomsActionType {
    FETCH_ROOMS = 'FETCH_ROOMS',
    FETCH_ROOMS_ERROR = 'FETCH_ROOMS_ERROR',
    GET_ROOMS = 'GET_ROOMS',
    POST_ROOMS = 'POST_ROOMS',
    DELETE_ROOMS = 'DELETE_ROOMS',
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
export interface DeleteRoomsAction {
    type: RoomsActionType.DELETE_ROOMS;
}

export type RoomsAction =
    | FetchRoomsAction
    | FetchRoomsErrorAction
    | GetRoomsAction
    | PostRoomsAction
    | DeleteRoomsAction;

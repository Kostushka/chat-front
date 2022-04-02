import {
    FetchRoomsAction,
    FetchRoomsErrorAction,
    GetRoomsAction,
    PostRoomsAction,
    RoomsAction,
    RoomsActionType,
    RoomsState,
    RoomsType,
} from '../../types/rooms';

const initialState: RoomsState = {
    rows: [],
    isLoading: false,
    isError: null,
    roomId: null,
};

export const roomsReducer = (
    state = initialState,
    action: RoomsAction
): RoomsState => {
    switch (action.type) {
        case RoomsActionType.FETCH_ROOMS:
            return { ...state, isLoading: true };
        case RoomsActionType.GET_ROOMS:
            return { ...state, isLoading: false, ...action.payload };
        case RoomsActionType.POST_ROOMS:
            return { ...state, isLoading: false, ...action.payload };
        case RoomsActionType.FETCH_ROOMS_ERROR:
            return { ...state, isLoading: false, isError: action.payload };
        default:
            return state;
    }
};

export const fetchRoomsActionCreator = (): FetchRoomsAction => ({
    type: RoomsActionType.FETCH_ROOMS,
});

export const fetchRoomsErrorActionCreator = (
    payload: string | null
): FetchRoomsErrorAction => ({
    type: RoomsActionType.FETCH_ROOMS_ERROR,
    payload,
});

export const getRoomsActionCreator = (payload: RoomsType): GetRoomsAction => ({
    type: RoomsActionType.GET_ROOMS,
    payload,
});

export const postRoomsActionCreator = (
    payload: RoomsType
): PostRoomsAction => ({
    type: RoomsActionType.POST_ROOMS,
    payload,
});

import {
    FetchUserAction,
    GetUserAction,
    PostUserAction,
    UserAction,
    UserActionType,
    UserState,
    UserType,
} from '../../types/user';

const initialState: UserState = {
    user: {
        username: '',
        email: '',
        avatar: '',
        gender: '',
        role: '',
        status: '',
    },
    isLoading: false,
};

export const userReducer = (
    state = initialState,
    action: UserAction
): UserState => {
    switch (action.type) {
        case UserActionType.FETCH_USER:
            return { ...state, isLoading: true };
        case UserActionType.GET_USER:
            return { ...state, user: { ...action.payload }, isLoading: false };
        case UserActionType.POST_USER:
            return {
                ...state,
                user: { ...action.payload },
            };
        default:
            return state;
    }
};

export const getUserActionCreator = (payload: UserType): GetUserAction => ({
    type: UserActionType.GET_USER,
    payload,
});

export const postUserActionCreator = (payload: UserType): PostUserAction => ({
    type: UserActionType.POST_USER,
    payload,
});

export const fetchUserActionCreator = (): FetchUserAction => ({
    type: UserActionType.FETCH_USER,
});

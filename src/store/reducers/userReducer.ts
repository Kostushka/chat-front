import {
    GetUserAction,
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
};

export const userReducer = (
    state = initialState,
    action: UserAction
): UserState => {
    switch (action.type) {
        case UserActionType.GET_USER:
            return { user: { ...action.payload } };
        default:
            return state;
    }
};

export const getUserActionCreator = (payload: UserType): GetUserAction => ({
    type: UserActionType.GET_USER,
    payload,
});

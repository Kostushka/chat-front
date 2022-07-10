import { Dispatch } from 'react';
import { Server } from '../helpers/server';
import {
    fetchUserActionCreator,
    getUserActionCreator,
    postUserActionCreator,
} from '../store/reducers/userReducer';
import { UserAction, UserType } from '../types/user';
import { storage } from '../utils/storage';
import { USER_KEY } from '../constants/constants';

export const getUser = () => async (dispath: Dispatch<UserAction>) => {
    try {
        dispath(fetchUserActionCreator());
        const res = await Server('get', 'api/users/me');
        // console.log(res);
        storage.set(USER_KEY, res);
        dispath(getUserActionCreator(res));
    } catch (error) {
        console.log(error);
    }
};

export const updateUser =
    (data: UserType) => async (dispatch: Dispatch<UserAction>) => {
        try {
            const res = await Server('post', 'api/users/update/self', data);
            // console.log(res);
            dispatch(postUserActionCreator(res));
        } catch (error) {
            console.log(error);
        }
    };

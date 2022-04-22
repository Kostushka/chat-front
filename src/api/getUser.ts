import { Dispatch } from 'react';
import { Server } from '../helpers/server';
import { getUserActionCreator } from '../store/reducers/userReducer';
import { UserAction } from '../types/user';

export const getUser = () => async (dispath: Dispatch<UserAction>) => {
    try {
        const res = await Server('get', 'api/users/me');
        // console.log(res);
        dispath(getUserActionCreator(res));
    } catch (error) {
        console.log(error);
    }
};

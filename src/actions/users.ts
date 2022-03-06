import {Server} from '@/helpers/server';
import * as CookieHelper from '@/helpers/cookie';

export interface IRegisterUser {
    username: string;
    password: string;
    email: string;
    gender?: string;
}

export interface ILoginUser {
    username: string;
    password: string;
}

export const registerUser = (data: IRegisterUser) => {
    return Server('post', 'api/users/signup', data)
        .then((resp: any) => {
            if (resp.status === 200) {
                CookieHelper.set('sessionId', resp.sessionId);
                location.replace('/');
            }
            return resp;
        });
};

export const loginUser = (data: ILoginUser) => {
    return Server('post', 'api/users/login', data)
        .then((resp: any) => {
            if (resp.status === 200) {
                CookieHelper.set('sessionId', resp.sessionId);
                location.replace('/');
            }
            return resp;
        });
};

import { Server } from '@/helpers/server';

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
    return Server('post', 'api/users/signup', data);
};

export const loginUser = (data: ILoginUser) => {
    return Server('post', 'api/users/login', data);
};

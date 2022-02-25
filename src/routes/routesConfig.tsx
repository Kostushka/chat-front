import React from 'react';
import Login from '@containers/Login';
import Chat from '@containers/Chat';
import RegistrationForm from '@components/RegistrationForm';

export interface IRoute {
    path: string;
    element: React.ReactNode;
}

export const publicRoutes: IRoute[] = [
    {
        path: 'login',
        element: <Login />,
    },
    {
        path: '/registration',
        element: <RegistrationForm />,
    },
    {
        path: '*',
        element: <Login />,
    },
];
export const privateRoutes: IRoute[] = [
    {
        path: '/',
        element: <Chat />,
    },
    {
        path: '*',
        element: <Chat />,
    },
];

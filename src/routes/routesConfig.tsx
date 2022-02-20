import React from 'react';
import Login from '@containers/Login';
import Chat from '@containers/Chat';

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

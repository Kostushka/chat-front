import React from 'react';
import Login from '@containers/Login';
import Chat from '@containers/Chat';

export interface IRoute {
    path: string;
    element: React.ReactNode;
}

export const chatRoutes: IRoute[] = [
    {
        path: 'login',
        element: <Login />,
    },
    {
        path: '*',
        element: <Chat />,
    },
];

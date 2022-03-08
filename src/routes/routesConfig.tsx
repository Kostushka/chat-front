import React, {lazy, Suspense} from 'react';
const Chat = lazy(() => import('@containers/Chat'));
const Login = lazy(() => import('@containers/Login'));

export interface IRoute {
    path: string;
    element: React.ReactNode;
}

export const publicRoutes: IRoute[] = [
    {
        path: 'login',
        element: <Suspense fallback={<div>Loading...</div>}><Login /></Suspense>,
    },
    {
        path: '*',
        element: <Suspense fallback={<div>Loading...</div>}><Login /></Suspense>,
    },
];
export const privateRoutes: IRoute[] = [
    {
        path: '/',
        element: <Suspense fallback={<div>Loading...</div>}><Chat /></Suspense>,
    },
    {
        path: '*',
        element: <Suspense fallback={<div>Loading...</div>}><Chat /></Suspense>,
    },
];
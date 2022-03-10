import React, { lazy, Suspense } from 'react';
const Chat = lazy(() => import('@containers/Chat'));
const Login = lazy(() => import('@containers/Login'));
import UiPreloader from '@components/UI/UiPreloader';

export interface IRoute {
    path: string;
    element: React.ReactNode;
}

export const publicRoutes: IRoute[] = [
    {
        path: 'login',
        element: (
            <Suspense fallback={<UiPreloader />}>
                <Login />
            </Suspense>
        ),
    },
    {
        path: '*',
        element: (
            <Suspense fallback={<UiPreloader />}>
                <Login />
            </Suspense>
        ),
    },
];
export const privateRoutes: IRoute[] = [
    {
        path: '/',
        element: (
            <Suspense fallback={<UiPreloader />}>
                <Chat />
            </Suspense>
        ),
    },
    {
        path: '*',
        element: (
            <Suspense fallback={<UiPreloader />}>
                <Chat />
            </Suspense>
        ),
    },
];

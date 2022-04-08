import React, { lazy, Suspense } from 'react';
const Header = lazy(() => import('@components/Header'));
const Chat = lazy(() => import('@containers/Chat'));
const ChatForm = lazy(() => import('@components/ChatForm'));
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
                <Header />
            </Suspense>
        ),
    },
    {
        path: '/room',
        element: (
            <Suspense fallback={<UiPreloader />}>
                <Chat />
            </Suspense>
        ),
    },
    {
        path: '/chat',
        element: (
            <Suspense fallback={<UiPreloader />}>
                <ChatForm />
            </Suspense>
        ),
    },
    {
        path: '/chat/:roomId',
        element: (
            <Suspense fallback={<UiPreloader />}>
                <ChatForm />
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

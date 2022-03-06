import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '@routes/routesConfig';
import * as CookieHelper from "@/helpers/cookie";
import { IRoute } from '../../routes/routesConfig';

const AppRouter: FC = () => {
    const isAuth = !!CookieHelper.get('sessionId');
    return (
        <Routes>
            {isAuth
                ? privateRoutes.map((route: IRoute) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                ))
                : publicRoutes.map((route: IRoute) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                ))}
        </Routes>
    );
};

export default AppRouter;
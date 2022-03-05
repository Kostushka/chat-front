import React, {FC} from 'react';
import {Route, Routes} from 'react-router-dom';
import {chatRoutes} from '@routes/routesConfig';
import {IRoute} from '../../routes/routesConfig';

const AppRouter: FC = () => {
    return (
        <Routes>
            {chatRoutes.map((route: IRoute) => (
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

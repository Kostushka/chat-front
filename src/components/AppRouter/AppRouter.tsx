import React, {FC} from 'react';
import {Route, Routes} from 'react-router-dom';
import Chat from "@containers/Chat";
import Login from "@containers/Login";

const AppRouter: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Chat/>}/>
            <Route path='login' element={<Login/>}/>
        </Routes>
    );
};

export default AppRouter;

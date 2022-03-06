import React, {FC} from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from '@components/AppRouter';
import styles from './App.module.css';
import Navigation from '@components/Navigation';

const App: FC = () => {

    return (
        <BrowserRouter>
            <Navigation/>
            <AppRouter/>
        </BrowserRouter>
    );
};

export default App;

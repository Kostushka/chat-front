import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '@components/AppRouter';
import Navigation from '@components/Navigation';
import styles from './App.module.css';

const App: FC = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <AppRouter />
        </BrowserRouter>
    );
};

export default App;

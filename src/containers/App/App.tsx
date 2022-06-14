import React, {FC, useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '@components/AppRouter';
import Navigation from '@components/Navigation';
import Footer from '@components/Footer';

import styles from './App.module.css';
import {useDispatch} from "react-redux";
import {getUser} from "../../api/getUser";

const App: FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser());
    });
    return (
        <BrowserRouter>
            <Navigation />
            <div className={styles.container}>
                <AppRouter />
            </div>
            <Footer />
        </BrowserRouter>
    );
};

export default App;

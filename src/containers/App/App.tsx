import React, {FC} from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '@components/AppRouter';
import Navigation from '@components/Navigation';
import Footer from '@components/Footer';

import styles from './App.module.css';

const App: FC = () => {
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

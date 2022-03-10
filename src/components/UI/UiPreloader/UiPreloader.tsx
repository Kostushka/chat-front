import React, { FC } from 'react';
import loader from './img/loader-black.svg';
import styles from './UiPreloader.module.css';

const UiPreloader: FC = () => {
    return (
        <>
            <img className={styles.loader} src={loader} alt='Загрузка...' />
        </>
    );
};

export default UiPreloader;

import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation: FC = () => {
    return (
        <ul className={styles.container}>
            <li className={styles.nav}>
                <NavLink to='/'>Главная</NavLink>
            </li>
            <li className={styles.nav}>
                <NavLink to='/login'>Вход</NavLink>
            </li>
        </ul>
    );
};

export default Navigation;

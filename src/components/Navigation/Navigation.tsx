import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import * as CookieHelper from "@/helpers/cookie";

const Navigation: FC = () => {
    const isAuth = !!CookieHelper.get('sessionId');

    return (
        <ul className={styles.container}>
            <li className={styles.nav}>
                <NavLink to='/'>Главная</NavLink>
            </li>
            {!isAuth && <li className={styles.nav}>
                <NavLink to='/login'>Вход</NavLink>
            </li>}
            {isAuth && <li className={styles.nav}>
                <NavLink onClick={() => {
                    CookieHelper.del('sessionId');
                    location.replace('/login');
                }} to='/login'>Выход</NavLink>
            </li>}
        </ul>
    );
};

export default Navigation;

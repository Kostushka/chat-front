import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import * as CookieHelper from '@/helpers/cookie';

const Navigation: FC = () => {
    const isAuth = !!CookieHelper.get('chat_session_id');

    return (
        <ul className={styles.container}>
            <li className={styles.nav}>
                <NavLink to='/'>Главная</NavLink>
            </li>
            <li className={styles.nav}>
                <NavLink to='/room'>Комната</NavLink>
            </li>
            {!isAuth && (
                <li className={styles.nav}>
                    <NavLink to='/login'>Вход</NavLink>
                </li>
            )}
            {isAuth && (
                <li className={styles.nav}>
                    <NavLink
                        onClick={() => {
                            CookieHelper.del('chat_session_id');
                            location.replace('/login');
                        }}
                        to='/login'
                    >
                        Выход
                    </NavLink>
                </li>
            )}
        </ul>
    );
};

export default Navigation;

import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import * as CookieHelper from '@/helpers/cookie';
import User from '../../containers/User';
import {storage} from "../../utils/storage";
import {USER_KEY} from "../../constants/constants";

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
                <>
                    <li className={styles.nav}>
                        <NavLink
                            onClick={() => {
                                CookieHelper.del('chat_session_id');
                                storage.del(USER_KEY);
                                location.replace('/login');
                            }}
                            to='/login'
                        >
                            Выход
                        </NavLink>
                    </li>
                    <User />
                </>
            )}
        </ul>
    );
};

export default Navigation;

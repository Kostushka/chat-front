import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation: FC = () => {
    return (
        <>
            <NavLink to='/'>Главная</NavLink>
            <NavLink to='/login'>Вход</NavLink>
        </>
    );
};

export default Navigation;

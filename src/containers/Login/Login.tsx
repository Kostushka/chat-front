import React from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import UiButton from '@components/UI/UiButton';
import styles from './Login.module.css';

const Login: FC = () => {
    return (
        <>
            <h1>Логин</h1>
            <input type='text' />
            <UiButton>Отправить</UiButton>
            <div>
                <Link to='/registration'>Регистрация</Link>
            </div>
        </>
    );
};

export default Login;

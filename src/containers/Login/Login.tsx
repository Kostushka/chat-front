import React, { useState, FC } from 'react';
import UiButton from '@components/UI/UiButton';
import LoginForm from '@components/LoginForm';
import RegistrationForm from '@components/RegistrationForm';
import styles from './Login.module.css';

const Login: FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <>
            {isLogin ? <LoginForm /> : <RegistrationForm />}
            <UiButton onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Логин' : 'Регистрация'}
            </UiButton>
        </>
    );
};

export default Login;

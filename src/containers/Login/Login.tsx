import React, { useState, FC } from 'react';
import UiButton from '@components/UI/UiButton';
import LoginForm from '@components/LoginForm';
import RegistrationForm from '@components/RegistrationForm';
import styles from './Login.module.css';

const Login: FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div className={styles.container}>
            {isLogin ? <LoginForm /> : <RegistrationForm />}
            <UiButton onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Регистрация' : 'Логин'}
            </UiButton>
        </div>
    );
};

export default Login;

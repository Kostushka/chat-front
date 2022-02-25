import React, {useState} from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import UiButton from '@components/UI/UiButton';
import styles from './Login.module.css';

import {LoginForm} from "../../components/LoginForm/LoginForm";
import RegistrationForm from "../../components/RegistrationForm";

const Login: FC = () => {
    const [isLogin, setLogin] = useState(true);


    return <div>
        <button onClick={() => setLogin(prevState => !prevState)}>{isLogin ? 'Register' : 'Login'}</button>
        {isLogin ? <LoginForm/> : <RegistrationForm/>}
    </div>;
};

export default Login;

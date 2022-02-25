import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './RegistrationForm.module.css';

const RegistrationForm: FC = () => {
    return (
        <>
            <h1>Регистрация</h1>
            <div>
                <Link to='/login'>Логин</Link>
            </div>
        </>
    );
};

export default RegistrationForm;

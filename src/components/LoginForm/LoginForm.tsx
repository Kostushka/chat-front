import React, { FC, useState } from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { loginUser } from '@actions/users';
import { ILoginUser } from '../../actions/users';
import UiButton from '../UI/UiButton';
import UiInput from '../UI/UiInput';
import styles from './LoginForm.module.css';

const LoginForm: FC = () => {
    // const [err, setErr] = useState('');
    return (
        <div className={styles.form}>
            <Formik
                initialValues={{ username: '', password: '' }}
                validationSchema={yup.object({
                    username: yup.string().required('Это обязательное поле!'),
                    password: yup.string().required('Это обязательное поле!'),
                })}
                onSubmit={(values: ILoginUser, { setErrors, setStatus }) => {
                    loginUser(values)
                        .then((user: any) => {
                            console.log(user);
                        })
                        .catch((err: any) => {
                            console.log('err', err);
                            setErrors({ username: 'Какая-то фиговина' });
                            // setErr(err.error);
                        });
                }}
            >
                {({ status, errors }) => (
                    <Form>
                        <h1 className={styles.login}>Логин</h1>
                        <UiInput label='Имя' name='username' type='text' />

                        <UiInput
                            label='Пароль'
                            name='password'
                            type='password'
                        />
                        {/* {status && <div>{status}</div>} */}
                        {errors && <div>{errors.username}</div>}
                        {/* {err && <div>{err}</div>} */}

                        <UiButton type='submit'>Отправить</UiButton>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default LoginForm;

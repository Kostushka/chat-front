import { Field, Form, Formik, FormikErrors } from 'formik';
import React, { FC } from 'react';
import { loginUser } from '@actions/users';
import UiButton from '../UI/UiButton';
import { ILoginUser } from '../../actions/users';

import styles from './LoginForm.module.css';

const loginFormValidate = (values: ILoginUser) => {
    const errors: FormikErrors<ILoginUser> = {};
    return errors;
};

const LoginForm: FC = () => {
    return (
        <>
            <h1>Логин</h1>
            <Formik
                initialValues={{ username: '', password: '' }}
                validate={loginFormValidate}
                onSubmit={(values: ILoginUser) => {
                    loginUser(values)
                        .then((user: any) => console.log(user))
                        .catch((err: any) => console.log('err', err));
                }}
            >
                {() => {
                    return (
                        <Form>
                            <Field type='text' name='username' />
                            <Field type='password' name='password' />
                            <UiButton type='submit'>Отправить</UiButton>
                        </Form>
                    );
                }}
            </Formik>
        </>
    );
};

export default LoginForm;

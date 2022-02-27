import { Field, Form, Formik, FormikErrors } from 'formik';
import React, { FC } from 'react';
import { loginUser } from '@actions/users';
import UiButton from '../UI/UiButton';
import styles from './LoginForm.module.css';

// interface FormValues {
//     username: string;
//     password: string;
// }

const LoginForm: FC = () => {
    return (
        <>
            <h1>Логин</h1>
            <Formik
                initialValues={{ username: '', password: '' }}
                // validate={(values: FormValues) => {
                //     const errors: FormikErrors<FormValues> = {};
                //     if (!values.username) {
                //         errors.username = 'Required';
                //     } else if (
                //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                //             values.username
                //         )
                //     ) {
                //         errors.username = 'Invalid username';
                //     }
                //     return errors;
                // }}
                onSubmit={(values) =>
                    loginUser(values)
                        .then((user: any) => console.log(user))
                        .catch((err: any) => console.log('err', err))
                }
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

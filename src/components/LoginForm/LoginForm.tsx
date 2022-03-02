import React, { FC } from 'react';
import { Form, Formik, FormikErrors } from 'formik';
import * as yup from 'yup';
import { loginUser } from '@actions/users';
import { ILoginUser } from '../../actions/users';
import UiButton from '../UI/UiButton';
import UiInput from '../UI/UiInput';
import styles from './LoginForm.module.css';

const LoginForm: FC = () => {
    return (
        <div className={styles.form}>
            <Formik
                initialValues={{ username: '', password: '' }}
                // validate={(values: ILoginUser) => {
                //     const errors: FormikErrors<ILoginUser> = {};
                //     if (
                //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                //             values.username
                //         )
                //     ) {
                //         errors.username = 'Invalid username';
                //     }
                //     return errors;
                // }}
                validationSchema={yup.object({
                    username: yup
                        .string()
                        .min(3, 'Имя не может быть короче трех символов')
                        .max(
                            15,
                            'Имя не может быть длиннее пятнадцати символов'
                        )
                        .required('Это обязательное поле!'),
                    password: yup.string().required('Это обязательное поле!'),
                })}
                // validateOnChange={false}
                // validateOnBlur={false}
                onSubmit={(values: ILoginUser) => {
                    loginUser(values)
                        .then((user: any) => console.log(user))
                        .catch((err: any) => console.log('err', err));
                }}
            >
                {({ errors }) => (
                    <Form>
                        <h1 className={styles.login}>Логин</h1>
                        <UiInput label='Имя' name='username' type='text' />
                        {/* {errors.username && (
                            <div className={styles.error}>
                                {errors.username}
                            </div>
                        )} */}
                        <UiInput
                            label='Пароль'
                            name='password'
                            type='password'
                        />
                        {/* {errors.password && (
                            <div className={styles.error}>
                                {errors.password}
                            </div>
                        )} */}
                        <UiButton type='submit'>Отправить</UiButton>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default LoginForm;

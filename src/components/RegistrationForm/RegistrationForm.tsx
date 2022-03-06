import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { registerUser } from '@actions/users';
import { IRegisterUser } from '../../actions/users';
import UiButton from '../UI/UiButton';
import UiInput from '../UI/UiInput';
import UiRadioButton from '../UI/UiRadioButton';

import styles from './RegistrationForm.module.css';

const RegistrationForm: FC = () => {
    return (
        <div className={styles.form}>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                    email: '',
                    gender: 'male',
                }}
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
                    email: yup
                        .string()
                        .email('Неверный email')
                        .required('Это обязательное поле!'),
                })}
                onSubmit={(values: IRegisterUser) => {
                    registerUser(values)
                        .then((user: any) => console.log(user))
                        .catch((err: any) => console.log('err', err));
                }}
            >
                {() => (
                    <Form>
                        <h1 className={styles.login}>Регистрация</h1>

                        <UiInput label='Имя' name='username' type='text' />
                        <UiInput
                            label='Пароль'
                            name='password'
                            type='password'
                        />
                        <UiInput label='Email' name='email' type='email' />
                        <div>
                            <UiRadioButton
                                name='gender'
                                label='Мужчина'
                                value='male'
                                defaultChecked
                            />
                            <UiRadioButton
                                name='gender'
                                label='Женщина'
                                value='female'
                            />
                        </div>

                        <UiButton type='submit'>Отправить</UiButton>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RegistrationForm;

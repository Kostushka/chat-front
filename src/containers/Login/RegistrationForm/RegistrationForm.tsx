import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { registerUser } from '@actions/users';
import { IRegisterUser } from '../../../actions/users';
import UiButton from '@components/UI/UiButton';
import UiInput from '@components/UI/UiInput';
import UiRadioButton from '@components/UI/UiRadioButton';

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
                        .min(3, 'Имя не может быть короче 3 символов')
                        .max(15, 'Имя не может быть длиннее 15 символов')
                        .required('Это обязательное поле!'),
                    password: yup
                        .string()
                        .min(3, 'Пароль не может быть короче 3 символов')
                        .max(15, 'Пароль не может быть длиннее 15 символов')
                        .required('Это обязательное поле!'),
                    email: yup
                        .string()
                        .email('Неверный email')
                        .required('Это обязательное поле!'),
                })}
                onSubmit={(values: IRegisterUser, { setErrors }) => {
                    registerUser(values)
                        .then((user: any) => {
                            console.log(user);
                            if (user.status === 409) {
                                setErrors({
                                    username: 'Имя занято, укажите другое',
                                });
                            }
                        })
                        .catch((err: any) => {
                            console.log('err', err);
                            setErrors({ gender: 'Ошибка данных!' });
                        });
                }}
            >
                {({ errors }) => (
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
                        {errors && <div className='error'>{errors.gender}</div>}
                        <UiButton type='submit'>Отправить</UiButton>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RegistrationForm;

import React, { FC } from 'react';
import { Formik, Form, useField } from 'formik';
import * as yup from 'yup';
import { registerUser } from '@actions/users';
import { IRegisterUser } from '../../actions/users';
import UiButton from '../UI/UiButton';
import UiInput from '../UI/UiInput';
import styles from './RegistrationForm.module.css';

// interface UiSelectProps {
//     name: string;
//     label: string;
// }

// const UiSelect: FC<UiSelectProps> = ({ label, ...props }) => {
//     const [field, meta] = useField(props);
//     return (
//         <>
//             <label htmlFor={props.name}>{label}</label>
//             <select {...field} {...props} />

//             {meta.touched && meta.error ? (
//                 <div className={styles.error}>{meta.error}</div>
//             ) : null}
//         </>
//     );
// };

const RegistrationForm: FC = () => {
    return (
        <div className={styles.form}>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                    email: '',
                    gender: '',
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
                    // gender: yup.mixed().oneOf(['male', 'female']).defined(),
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
                        {/* <UiSelect name='gender' label='Пол'>
                            <option value=''>Выберите пол</option>
                            <option value='male'>Мужской</option>
                            <option value='female'>Женский</option>
                        </UiSelect> */}

                        <UiButton type='submit'>Отправить</UiButton>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RegistrationForm;

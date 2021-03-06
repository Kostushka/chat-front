import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { postRooms } from '../../../api/getDataRooms';
import UiButton from '@components/UI/UiButton';
import UiInput from '@components/UI/UiInput';

import styles from './CreateRoomForm.module.css';

const CreateRoomForm: FC = () => {
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <h1 className={styles.login}>Создать комнату</h1>
            <Formik
                initialValues={{ name: '', description: '', tags: '' }}
                validationSchema={yup.object({
                    name: yup
                        .string()
                        .min(3, 'Название не может быть короче 3 символов')
                        .max(15, 'Название не может быть длиннее 15 символов')
                        .required('Это обязательное поле!'),
                    description: yup
                        .string()
                        .required('Это обязательное поле!'),
                })}
                onSubmit={(values) => {
                    dispatch(
                        postRooms({
                            name: values.name,
                            description: values.description,
                            tags: values.tags.split(', '),
                        })
                    );
                    values.name = '';
                    values.description = '';
                    values.tags = '';
                }}
            >
                {() => (
                    <Form>
                        <UiInput
                            placeholder='Введите название комнаты'
                            label='Название'
                            name='name'
                            type='text'
                        />
                        <UiInput
                            placeholder='Введите описание'
                            label='Описание'
                            name='description'
                            type='text'
                        />
                        <UiInput
                            placeholder='Введите список тегов через запятую'
                            label='Теги'
                            name='tags'
                            type='text'
                        />
                        <UiButton type='submit'>Создать</UiButton>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CreateRoomForm;

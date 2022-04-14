import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { MessageType } from '../../../../types/messages';
import { AddMessagesActionCreator } from '../../../../store/reducers/messagesReducer';
import profilePhoto from '@/assets/profile.svg';
import UiButton from '@components/UI/UiButton';

import styles from './Form.module.css';
interface FormProps {
    messages: MessageType[];
}
const Form: FC<FormProps> = ({ messages }) => {
    let [value, setValue] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = () => {
        const newMessage = {
            id: new Date().toLocaleTimeString(),
            message: value,
        };
        dispatch(AddMessagesActionCreator(newMessage));
        setValue('');
    };

    return (
        <div className={styles.chat}>
            Chat
            <div className={styles.field}>
                <div className={styles.field__container}>
                    {messages.map((el: any) => {
                        if (el.message) {
                            return (
                                <div key={el.id}>
                                    <img
                                        className={styles.message__img}
                                        src={profilePhoto}
                                        alt='profile'
                                    />
                                    <p className={styles.message}>
                                        {el.message}
                                    </p>

                                    <div className={styles.date}>{el.id}</div>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
            <form>
                <textarea
                    className={styles.textarea}
                    value={value}
                    onChange={(e) => setValue(e.currentTarget.value)}
                />
                <div>
                    <UiButton onClick={handleSubmit} type='button'>
                        Отправить
                    </UiButton>
                </div>
            </form>
        </div>
    );
};

export default Form;

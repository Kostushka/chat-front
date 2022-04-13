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
    console.log(value);

    const dispatch = useDispatch();

    const handleSubmit = () => {
        const newMessage = {
            id: new Date().toLocaleTimeString(),
            message: value,
        };
        dispatch(AddMessagesActionCreator(newMessage));
        setValue('');
    };
    // const onKeyDownPress = (e: any) => {
    //     console.log(e);

    //     if (e.key === 'Enter') {
    //         value !== '' ? handleSubmit() : e.preventDefault();
    //     }
    //     if (e.keyCode == 13) {
    //         e.preventDefault();
    //     }
    // };
    // const handleChange = (e: any) => {
    //     setValue(e.currentTarget.value);
    //     if (e.shiftKey) {
    //         value += '\r\n';
    //     }
    // };
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
                    // onKeyDown={onKeyDownPress}
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

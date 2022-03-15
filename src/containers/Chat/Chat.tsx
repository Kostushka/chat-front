import React, { FC, useState } from 'react';
import UiButton from '@components/UI/UiButton';
import styles from './Chat.module.css';
import { useTypedSelector } from '../../store';
import { useDispatch } from 'react-redux';
import { FetchMessagesSuccessActionCreator } from '../../store/reducers/messagesReducer';

const Chat: FC = () => {
    const [value, setValue] = useState('');
    // const [message, setMessage] = useState([{}]);

    const { messages } = useTypedSelector((state) => state.messages);
    const dispatch = useDispatch();

    const handleSubmit = () => {
        const newMessage = {
            id: new Date().toLocaleTimeString(),
            message: value,
        };
        dispatch(FetchMessagesSuccessActionCreator(newMessage));
        // setMessage([...message, newMessage]);
        setValue('');
    };
    return (
        <div className={styles.container}>
            <div className={styles.info}>Info</div>
            <div className={styles.chat}>
                Chat
                <div className={styles.field}>
                    <div className={styles.field__container}>
                        {messages.map((el: any) => {
                            if (el.message) {
                                return (
                                    <div key={el.id}>
                                        <p className={styles.message}>
                                            {el.message}
                                        </p>
                                        <div className={styles.date}>
                                            {el.id}
                                        </div>
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
                    ></textarea>
                    <div>
                        <UiButton onClick={handleSubmit} type='button'>
                            Отправить
                        </UiButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Chat;

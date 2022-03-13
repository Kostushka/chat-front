import React, { useState } from 'react';
import UiButton from '@components/UI/UiButton';
import styles from './Chat.module.css';

const Chat = () => {
    const [message, setMessage] = useState([{}]);
    const [value, setValue] = useState('');
    const handleSubmit = () => {
        const newMessage = {
            value,
        };
        setMessage([...message, newMessage]);
        setValue('');
    };
    return (
        <div className={styles.container}>
            <div className={styles.info}>Info</div>
            <div className={styles.chat}>
                Chat
                <div className={styles.field}>
                    <div className={styles.field__container}>
                        {message.map((el: any, i) => {
                            if (el.value) {
                                return (
                                    <p className={styles.message} key={i}>
                                        {el.value}
                                    </p>
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

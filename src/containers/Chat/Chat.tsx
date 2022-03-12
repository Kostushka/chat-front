import React from 'react';
import styles from './Chat.module.css';

const Chat = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>Info</div>
            <div className={styles.chat}>Chat</div>
        </div>
    );
};

export default Chat;

import React, { FC } from 'react';
import { useNavigate } from 'react-router';
import UiButton from '@components/UI/UiButton';
import styles from './Chat.module.css';

const Chat: FC = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <UiButton onClick={() => navigate('/chat')}>Начать чат</UiButton>
        </div>
    );
};

export default Chat;

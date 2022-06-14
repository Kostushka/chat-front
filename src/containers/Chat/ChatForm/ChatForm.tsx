import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTypedSelector } from '../../../store';
import { useChat } from '../../../hooks/useChat';
import Info from './Info';
import Form from './Form';

import styles from './ChatForm.module.css';

const ChatForm: FC = () => {
    const dispatch = useDispatch();
    const { messages } = useTypedSelector((state) => state.messages);
    const { rows } = useTypedSelector((state) => state.rooms);
    const { roomId } = useParams();
    const {users, log} = useChat(Number(roomId));

    useEffect(() => {
        console.log('users', users);
        console.log('log', log)
    }, [users, log]);

    return (
        <div className={styles.container}>
            <Info rows={rows} roomId={roomId} /> {/*//TODO не отображается инфо о комнате при обновлении страницы внутри комнаты*/}
            <Form messages={messages} />
        </div>
    );
};

export default ChatForm;

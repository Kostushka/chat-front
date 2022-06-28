import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTypedSelector } from '../../../store';
import { useChat } from '../../../hooks/useChat';
import { getDataRooms } from '../../../api/getDataRooms';
import Info from './Info';
import Form from './Form';
import UiPreloader from '@components/UI/UiPreloader';

import styles from './ChatForm.module.css';

const ChatForm: FC = () => {
    const dispatch = useDispatch();
    const { messages } = useTypedSelector((state) => state.messages);
    const { rows } = useTypedSelector((state) => state.rooms);
    const { roomId } = useParams();
    const { users, log } = useChat(Number(roomId));

    useEffect(() => {
        console.log('users', users);
        console.log('log', log);
        dispatch(getDataRooms());
    }, [users, log]);

    return (
        <div className={styles.container}>
            {rows.length === 0 || users.length === 0 ? (
                <UiPreloader />
            ) : (
                <>
                    <Info rows={rows} roomId={roomId} users={users} />
                    <Form messages={messages} />
                </>
            )}
        </div>
    );
};

export default ChatForm;

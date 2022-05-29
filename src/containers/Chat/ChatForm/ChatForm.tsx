import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTypedSelector } from '../../../store';
import { getDataRooms } from '../../../api/getDataRooms';
import { socket } from '../../../helpers/socket';
import { useChat } from '../../../hooks/useChat';
import Info from './Info';
import Form from './Form';

import styles from './ChatForm.module.css';

const ChatForm: FC = () => {
    const dispatch = useDispatch();
    const { messages } = useTypedSelector((state) => state.messages);
    const { rows } = useTypedSelector((state) => state.rooms);
    const { user } = useTypedSelector((state) => state.user);
    const { roomId } = useParams();
    const io = socket(Number(roomId)).connect();
    useChat(Number(roomId));

    useEffect(() => {
        dispatch(getDataRooms());
        return () => {
            io.disconnect();
        };
    }, []);

    return (
        <div className={styles.container}>
            <Info rows={rows} roomId={roomId} />
            <Form messages={messages} />
        </div>
    );
};

export default ChatForm;

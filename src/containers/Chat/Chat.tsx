import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useTypedSelector } from '../../store';
import { getDataRooms } from '../../api/getDataRooms';
import CreateRoomForm from '@containers/Chat/CreateRoomForm';
import ChatRoom from './ChatRoom';
import UiPreloader from '@components/UI/UiPreloader';
import UiButton from '@components/UI/UiButton';

import styles from './Chat.module.css';

const Chat: FC = () => {
    const navigate = useNavigate();
    const { rows, isLoading, isError, roomId } = useTypedSelector(
        (state) => state.rooms
    );

    if (roomId) {
        location.replace(`/chat/${roomId}`);
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDataRooms());
    }, [roomId]);
    return (
        <>
            <div className={styles.container}>
                <div>
                    <UiButton onClick={() => navigate('/chat')}>
                        Начать чат
                    </UiButton>
                </div>

                <CreateRoomForm />
            </div>

            <div className={styles.error}>
                {isError && <h1 className='error'> {isError}</h1>}
            </div>

            {isLoading ? <UiPreloader /> : <ChatRoom rows={rows} />}
        </>
    );
};

export default Chat;

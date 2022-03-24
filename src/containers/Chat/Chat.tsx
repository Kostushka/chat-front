import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useTypedSelector } from '../../store';
import { getDataRooms, postRooms } from '../../api/getDataRooms';
import UiPreloader from '@components/UI/UiPreloader';
import UiButton from '@components/UI/UiButton';

import styles from './Chat.module.css';

const Chat: FC = () => {
    const navigate = useNavigate();
    const { rows, isLoading, isError } = useTypedSelector(
        (state) => state.rooms
    );

    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getDataRooms());
    // }, []);
    return (
        <>
            <div className={styles.container}>
                <UiButton onClick={() => navigate('/chat')}>
                    Начать чат
                </UiButton>
                <UiButton
                    onClick={() =>
                        dispatch(
                            postRooms({
                                name: 'ананас',
                                description: 'yoyoyo',
                                tags: ['hey'],
                            })
                        )
                    }
                >
                    Создать комнату
                </UiButton>

                <UiButton onClick={() => dispatch(getDataRooms())}>
                    Список комнат
                </UiButton>
            </div>
            <div className={styles.error}>
                {isError && <h1 className='error'> {isError}</h1>}
            </div>

            {isLoading ? (
                <UiPreloader />
            ) : (
                <div className={styles.room_container}>
                    {rows &&
                        rows.map((el, i) => (
                            <div className={styles.room_name} key={i}>
                                <div>{el.name}</div>
                                {/* <div>{el.description}</div> */}
                                {/* <div>{el.tags}</div> */}
                            </div>
                        ))}
                </div>
            )}
        </>
    );
};

export default Chat;

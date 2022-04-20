import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteRooms } from '../../../api/getDataRooms';
import UiButton from '../../../components/UI/UiButton';
import { RoomsType } from '../../../types/rooms';
import styles from './ChatRoom.module.css';

interface ChatRoomProps {
    rows: RoomsType[];
}

const ChatRoom: FC<ChatRoomProps> = ({ rows }) => {
    const dispatch = useDispatch();
    return (
        <div className={styles.room_container}>
            {rows &&
                rows.map((el, i) => (
                    <div className={styles.room_name} key={i}>
                        <NavLink
                            className={styles.room_link}
                            to={`/chat/${el.id}`}
                        >
                            <div className={styles.name}>{el.name}</div>
                            <div className={styles.description}>
                                {el.description}
                            </div>
                            <ul className={styles.room_tags}>
                                {el.tags.map((el, i) => (
                                    <li key={i}>{el}</li>
                                ))}
                            </ul>
                        </NavLink>
                        <UiButton onClick={() => dispatch(deleteRooms(el.id))}>
                            Удалить
                        </UiButton>
                    </div>
                ))}
        </div>
    );
};

export default ChatRoom;

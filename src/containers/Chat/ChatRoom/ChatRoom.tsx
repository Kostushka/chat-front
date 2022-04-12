import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { RoomsType } from '../../../types/rooms';
import styles from './ChatRoom.module.css';

interface ChatRoomProps {
    rows: RoomsType[];
}

const ChatRoom: FC<ChatRoomProps> = ({ rows }) => {
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
                    </div>
                ))}
        </div>
    );
};

export default ChatRoom;

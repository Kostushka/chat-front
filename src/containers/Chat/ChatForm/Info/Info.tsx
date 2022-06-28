import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { RoomsType } from '../../../../types/rooms';
import linkBack from '@/assets/back.svg';

import styles from './Info.module.css';
import { UserType } from '../../../../types/user';

interface InfoProps {
    rows: RoomsType[];
    roomId: string | undefined;
    users: UserType[];
}
const Info: FC<InfoProps> = ({ rows, roomId, users }) => {
    return (
        <div className={styles.info}>
            <NavLink to={'/room'}>
                <img className={styles.back} src={linkBack} alt='back' />
            </NavLink>
            Info
            {rows
                .filter((el) => el.id == roomId)
                .map((el, i) => (
                    <div className={styles.room_name} key={i}>
                        <h1 className={styles.header}>Название комнаты</h1>
                        <div className={styles.name}>
                            {el.name}
                            {el.status === 'open' ? (
                                <span className={styles.open}></span>
                            ) : (
                                <span className={styles.close}></span>
                            )}
                        </div>
                        <h1 className={styles.header}>Описание</h1>
                        <div className={styles.description}>
                            {el.description}
                        </div>
                        <h1 className={styles.header}>Теги</h1>
                        <ul className={styles.room_tags}>
                            {el.tags[0] !== '' ? (
                                el.tags.map((el, i) => <li key={i}>{el}</li>)
                            ) : (
                                <li>Нет тегов</li>
                            )}
                        </ul>
                    </div>
                ))}
            {users.map((el) => (
                <ul key={el.email} className={styles.users}>
                    <li>
                        <h1 className={styles.header_users}>Пользователи</h1>
                        <div className={styles.username}>
                            <span>{el.username}</span>
                            <span className={styles.status}>{el.status}</span>
                        </div>
                    </li>
                </ul>
            ))}
        </div>
    );
};

export default Info;

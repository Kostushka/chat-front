import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { RoomsType } from '../../../../types/rooms';
import linkBack from '@/assets/back.svg';

import styles from './Info.module.css';

interface InfoProps {
    rows: RoomsType[];
    roomId: string | undefined;
}
const Info: FC<InfoProps> = ({ rows, roomId }) => {
    return (
        <div className={styles.info}>
            <NavLink to={'/room'}>
                <img className={styles.back} src={linkBack} alt='back' />
            </NavLink>
            Info
            {rows &&
                rows
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
                                    el.tags.map((el, i) => (
                                        <li key={i}>{el}</li>
                                    ))
                                ) : (
                                    <li>Нет тегов</li>
                                )}
                            </ul>
                        </div>
                    ))}
        </div>
    );
};

export default Info;

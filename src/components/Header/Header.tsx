import React, { FC } from 'react';
import { useTypedSelector } from '../../store';
import userPhoto from '../../assets/profile.svg';
import styles from './Header.module.css';

const Header: FC = () => {
    const { user } = useTypedSelector((state) => state.user);
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Главная</h1>

            <ul className={styles.user}>
                <li className={styles.img}>
                    {user.avatar || (
                        <img src={userPhoto} alt='фото пользователя' />
                    )}
                </li>
                <div className={styles.user_info}>
                    <li>
                        <span>Имя пользователя:</span> {user.username}
                        {user.status === 'online' ? (
                            <span className={styles.open}></span>
                        ) : (
                            <span className={styles.close}></span>
                        )}
                    </li>
                    <li>
                        <span>Пол:</span> {user.gender}
                    </li>
                    <li>
                        <span>Статус:</span> {user.role}
                    </li>
                </div>
            </ul>
        </div>
    );
};

export default Header;

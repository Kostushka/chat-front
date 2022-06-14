import React, { FC } from 'react';
import UiPreloader from '../../components/UI/UiPreloader';
import { useTypedSelector } from '../../store';
import profileImg from '../../assets/profile.svg';

import styles from './User.module.css';

const User: FC = () => {
    const { user, isLoading } = useTypedSelector((state) => state.user);

    // const fileSelectHandler = (e: any) => {
    //     dispatch(
    //         updateUser({
    //             username: 'Nastya',
    //             avatar: e.target.value,
    //             email: 'alv26k@mail.ru',
    //             gender: 'female',
    //         })
    //     );
    // };
    return (
        <>
            {isLoading ? (
                <UiPreloader />
            ) : (
                <div className={styles.container}>
                    <img
                        className={styles.img}
                        src={user.avatar || profileImg}
                        alt='avatar'
                    />
                    {/* <input type='file' onChange={fileSelectHandler} /> */}
                    <span className={styles.name}>{user.username}</span>
                    <span className={styles.status}>{user.status}</span>
                </div>
            )}
        </>
    );
};

export default User;

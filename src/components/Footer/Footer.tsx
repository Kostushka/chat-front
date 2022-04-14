import React, { FC } from 'react';
import styles from './Footer.module.css';

const Footer: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.link}>
                <a target='_blank' href='https://github.com/OtShellNick'>
                    OtShellNick
                </a>
            </div>
            <div className={styles.link}>
                <a target='_blank' href='https://github.com/Kostushka'>
                    Kostushka
                </a>
            </div>
        </div>
    );
};

export default Footer;

import React, { FC } from 'react';
import styles from './UiButton.module.css';

const UiButton: FC = ({ children, ...props }) => {
    return (
        <button className={styles.btn} {...props}>
            {children}
        </button>
    );
};

export default UiButton;

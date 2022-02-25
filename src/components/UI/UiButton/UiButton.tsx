import React, { FC } from 'react';
import styles from './UiButton.module.css';

interface UiButtonProps {
    value: string;
}

const UiButton: FC<UiButtonProps> = ({ children, ...props }) => {
    return (
        <button className={styles.btn} {...props}>
            {children}
        </button>
    );
};

export default UiButton;

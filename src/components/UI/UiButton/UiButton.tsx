import React, { FC, ReactNode } from 'react';
import styles from './UiButton.module.css';

interface UiButtonProps {
    children: ReactNode;
    type?: 'submit' | 'button';
    disabled?: boolean;
    onClick?: (e: any) => void;
}

const UiButton: FC<UiButtonProps> = ({ children, ...props }) => {
    return (
        <button className={styles.btn} {...props}>
            {children}
        </button>
    );
};

export default UiButton;

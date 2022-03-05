import { useField } from 'formik';
import React, { FC } from 'react';
import styles from './UiRadioButton.module.css';

interface UiRadioButtonProps {
    name: string;
    label: string;
    value: string;
    defaultChecked?: boolean;
}

const UiRadioButton: FC<UiRadioButtonProps> = ({ label, ...props }) => {
    const [field] = useField(props);
    return (
        <>
            <label className={styles.radio}>
                <input type='radio' {...field} {...props} />
                <span>{label}</span>
            </label>
        </>
    );
};

export default UiRadioButton;

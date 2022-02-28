import { useField } from 'formik';
import React, { FC } from 'react';
import styles from './UiInput.module.css';

interface UiInputProps {
    label: string;
    name: string;
    type: string;
}

const UiInput: FC<UiInputProps> = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <input className={styles.input} {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className={styles.error}>{meta.error}</div>
            ) : null}
        </>
    );
};

export default UiInput;

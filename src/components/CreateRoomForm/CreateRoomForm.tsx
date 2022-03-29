import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { postRooms } from '../../api/getDataRooms';
import UiButton from '../UI/UiButton';
import styles from './CreateRoomForm.module.css';

const CreateRoomForm: FC = () => {
    const [inputNameValue, setInputNameValue] = useState('');
    const [inputDescrValue, setInputDescrValue] = useState('');
    const [inputTagsValue, setInputTagsValue] = useState(['']);
    const dispatch = useDispatch();
    const handleTagsChange = (e: any) => {
        const value = e.currentTarget.value;
        setInputTagsValue([value]);
    };
    const handleClick = (e: any) => {
        e.preventDefault();
        dispatch(
            postRooms({
                name: inputNameValue,
                description: inputDescrValue,
                tags: inputTagsValue,
            })
        );
        setInputNameValue('');
        setInputDescrValue('');
        setInputTagsValue(['']);
    };
    return (
        <form>
            <div className={styles.container}>
                <label htmlFor='name'>Имя</label>
                <input
                    name='name'
                    type='text'
                    value={inputNameValue}
                    onChange={(e) => setInputNameValue(e.currentTarget.value)}
                />

                <label htmlFor='descr'>Описание</label>
                <input
                    name='descr'
                    type='text'
                    value={inputDescrValue}
                    onChange={(e) => setInputDescrValue(e.currentTarget.value)}
                />
                <label htmlFor='tags'>Теги</label>
                <input
                    name='tags'
                    type='text'
                    value={inputTagsValue}
                    onChange={handleTagsChange}
                />

                <UiButton
                    disabled={!(inputNameValue && inputDescrValue)}
                    onClick={handleClick}
                >
                    Создать комнату
                </UiButton>
            </div>
        </form>
    );
};

export default CreateRoomForm;

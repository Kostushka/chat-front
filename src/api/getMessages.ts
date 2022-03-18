import axios from 'axios';
import { Dispatch } from 'react';
import { GetMessagesActionCreator } from '../store/reducers/messagesReducer';
import { MessagesAction } from '../types/messages';

export const getMessages = () => async (dispatch: Dispatch<MessagesAction>) => {
    try {
        const res = await axios.get('');
        dispatch(GetMessagesActionCreator(res.data));
    } catch (e) {
        console.log(e);
    }
};

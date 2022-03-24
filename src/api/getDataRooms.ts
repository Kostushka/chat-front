import { Dispatch } from 'react';
import { Server } from '@/helpers/server';
import {
    fetchRoomsActionCreator,
    fetchRoomsErrorActionCreator,
    getRoomsActionCreator,
    postRoomsActionCreator,
} from '../store/reducers/roomsReducer';
import { RoomsAction, RoomsType } from '../types/rooms';

export const getDataRooms = () => async (dispatch: Dispatch<RoomsAction>) => {
    try {
        dispatch(fetchRoomsActionCreator());
        const res = await Server('get', 'api/rooms/all');
        console.log(res);
        dispatch(getRoomsActionCreator(res));
    } catch (error) {
        console.log(error);
        dispatch(
            fetchRoomsErrorActionCreator(`Ошибка получения данных. ${error}`)
        );
        setTimeout(() => {
            dispatch(fetchRoomsErrorActionCreator(null));
        }, 5000);
    }
};

export const postRooms =
    (data: RoomsType) => async (dispatch: Dispatch<RoomsAction>) => {
        try {
            dispatch(fetchRoomsActionCreator());
            const res = await Server('post', 'api/rooms/create', data);
            console.log(res);
            dispatch(postRoomsActionCreator(res));
        } catch (error) {
            console.log(error);
            dispatch(
                fetchRoomsErrorActionCreator(`Ошибка отправки данных. ${error}`)
            );
            setTimeout(() => {
                dispatch(fetchRoomsErrorActionCreator(null));
            }, 5000);
        }
    };

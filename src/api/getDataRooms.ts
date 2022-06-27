import { Dispatch } from 'react';
import { Server } from '@/helpers/server';
import {
    deleteRoomsActionCreator,
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
        // console.log(res);
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
            // console.log(res);
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

export const deleteRooms =
    (id: number | undefined) =>
    async (dispatch: Dispatch<RoomsAction> | any) => {
        try {
            const res = await Server('delete', `api/rooms/${id}`);
            // console.log(res);
            dispatch(deleteRoomsActionCreator());
            if (res.status === 403) {
                dispatch(
                    fetchRoomsErrorActionCreator(
                        'У вас нет прав для этого действия'
                    )
                );
                setTimeout(() => {
                    dispatch(fetchRoomsErrorActionCreator(null));
                }, 5000);
            }
            dispatch(getDataRooms());
        } catch (error) {
            console.log(error);
            dispatch(
                fetchRoomsErrorActionCreator(
                    `Ошибка удаления комнаты. ${error}`
                )
            );
            setTimeout(() => {
                dispatch(fetchRoomsErrorActionCreator(null));
            }, 5000);
        }
    };

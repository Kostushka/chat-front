import {io} from 'socket.io-client';
import {CONFIG} from "@config/config";
import * as CookieHelper from "./cookie";

const token = CookieHelper.get('chat_session_id') || '';

export const socket = (roomId: number) => io(CONFIG.development.SOCKET, {
    auth: {
        token
    },
    query: {
        roomId
    },
    autoConnect: false
});
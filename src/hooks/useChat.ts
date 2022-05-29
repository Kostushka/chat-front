import { useEffect, useRef, useState } from 'react';
// import { io } from 'socket.io-client';
import { socket } from '../helpers/socket';
import { SERVER_URI, USER_KEY } from '../constants/constants';
import { storage } from '../utils/storage';

export const useChat = (roomId: number | null) => {
    const user = storage.get(USER_KEY);

    const [users, setUsers] = useState();
    const [messages, setMessages] = useState();
    const [log, setLog] = useState(null);

    // const { current: socket } = useRef(
    //     io(SERVER_URI, {
    //         query: {
    //             roomId: user.roomId,
    //             username: user.username,
    //         },
    //     })
    // );
    const io = socket(roomId);

    useEffect(() => {
        // сообщаем о подключении нового пользователя
        io.emit('user:add', user);

        // запрашиваем сообщения из БД
        io.emit('message:get');

        // обрабатываем получение системного сообщения
        io.on('log', (log) => {
            setLog(log);
        });

        // обрабатываем получение обновленного списка пользователей
        io.on('user_list:update', (users) => {
            setUsers(users);
        });

        // обрабатываем получение обновленного списка сообщений
        io.on('message_list:update', (messages) => {
            setMessages(messages);
        });
    }, []);

    // метод для отправки сообщения
    const sendMessage = (message: string) => {
        io.emit('message:add', message);
    };

    // метод для удаления сообщения
    const removeMessage = (message: string) => {
        io.emit('message:remove', message);
    };

    return { users, messages, log, sendMessage, removeMessage };
};

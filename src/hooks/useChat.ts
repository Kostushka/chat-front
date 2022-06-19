import { useEffect, useState } from 'react';
import { socket } from '../helpers/socket';
import { USER_KEY } from '../constants/constants';
import { storage } from '../utils/storage';

export const useChat = (roomId: number | null) => {
    const user = storage.get(USER_KEY);

    const [users, setUsers] = useState([]);
    const [messages, setMessages] = useState();
    const [log, setLog] = useState('');
    const io = socket(roomId);

    useEffect(() => {
        if (!io.connected) {
            io.connect();
        }
        //сообщаем о подключении нового пользователя
        io.on('connect', () => {
            console.log('user', user);
            setTimeout(() => {
                io.emit('user:add', user);
            }, 100);

            // запрашиваем сообщения из БД
            // io.emit('message:get');
        });

        // обрабатываем получение системного сообщения
        io.on('log', (log) => {
            setLog(log);
        });

        // обрабатываем получение обновленного списка пользователей
        io.on('users_list:update', (users) => {
            setUsers(users);
        });
        //
        // // обрабатываем получение обновленного списка сообщений
        // io.on('message_list:update', (messages) => {
        //     setMessages(messages);
        // });

        return () => {
            io.disconnect().close();
        };
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

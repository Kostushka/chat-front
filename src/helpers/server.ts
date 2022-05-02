import axios from 'axios';
import * as CookieHelper from './cookie';
import { CONFIG } from '@config/config';
const server: string = CONFIG.production.REST;
const Authorization = CookieHelper.get('chat_session_id') || '';
axios.defaults.headers.common['Authorization'] = Authorization;

export const Server = (
    method: 'get' | 'post' | 'put' | 'delete',
    url: string,
    data?: object
) => {
    return axios[method](`${server}${url}`, data).then((resp) => {
        const { data } = resp;

        if (data.status === 401) {
            CookieHelper.del('chat_session_id');
            return location.replace('/login');
        }

        if (resp.data.status) return { ...resp.data };

        return resp.data;
    });
};

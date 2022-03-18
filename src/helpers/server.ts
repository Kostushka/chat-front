import axios from "axios";
import * as CookieHelper from "./cookie";

const server = 'https://mmochat.online/';
const Authorization = CookieHelper.get('chat_session_id');

export const Server = (method: 'get'|'post'|'put'|'delete', url: string, data?: object) => {
    return axios[method](`${server}${url}`, {...data, Authorization})
        .then(resp => {
            if(resp.data.status) return {...resp.data}
            return resp.data;
        });
}
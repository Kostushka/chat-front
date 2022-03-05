import axios from "axios";

const server = 'https://mmochat.online/';

export const Server = (method: 'get'|'post'|'put'|'delete', url: string, data?: object) => {
    return axios[method](`${server}${url}`, data)
        .then(resp => {
            if(resp.data.status) return {...resp.data}
            return resp.data;
        });
}
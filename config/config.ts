interface IConfig {
    production: IRoute,
    development: IRoute
}

interface IRoute {
    REST: string;
    SOCKET: string;
}

export const CONFIG: IConfig = {
    production: {
        REST: 'https://mmochat.online/',
        SOCKET: 'wss://mmochat.online/'
    },
    development: {
        REST: 'http://localhost:5402/',
        SOCKET: 'ws://localhost:5402/'
    }
}
export const storage = {
    get: (key: string) =>
        window.localStorage.getItem(key)
            ? JSON.parse(window.localStorage.getItem(key) || '{}')
            : null,
    set: (key: string, value: any) =>
        window.localStorage.setItem(key, JSON.stringify(value)),
};

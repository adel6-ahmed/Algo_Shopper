import jwt_decode from 'jwt-decode';

const key = 'token';

const setToken = token => localStorage.setItem(key, token);
const deleteToken = () => localStorage.removeItem(key);
const getToken = () => localStorage.getItem(key);
const getUser = () => {
    const token = getToken()
    return token && jwt_decode(token)
}

const authApi = { setToken, deleteToken, getToken, getUser };
export default authApi;


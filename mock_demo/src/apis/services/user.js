import { axiosPromiseWrapper } from '..'

export const getUserInfo = () => axiosPromiseWrapper('get', `/api/user`)

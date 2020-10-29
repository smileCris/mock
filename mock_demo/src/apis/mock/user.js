import { axiosPromiseWrapper } from '..'

export const getUserInfo = () => axiosPromiseWrapper('get', '/mock/user')

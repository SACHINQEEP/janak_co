import axios from 'axios';

import Env from '../config/env';

import { getAuthToken } from "./index";

const BASE_URL = Env.API_BASE_URL
const httpHeaders = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getAuthToken()}`
}
export const post = (url: string, data: any) => axios.post(BASE_URL + url, data, { headers: httpHeaders })
export const get = (url: string, params?: any) => axios.get(BASE_URL + url, { headers: httpHeaders, params })
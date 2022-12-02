import { baseURL } from '../env.js'

// @ts-ignore
// eslint-disable-next-line no-undef
export const server = axios.create({
  baseURL: baseURL,
  timeout: 8000,
  withCredentials: true
})

// service统一出口
import Request from './request'

import localCache from '~/utils/cache'
import { getGlobalFileExport } from '~/utils/common'
const serviceModules = import.meta.glob('./**/*.ts', { eager: true })
const serviceGlobalFiles = getGlobalFileExport(serviceModules)

// const { VITE_SERVICE_TIME_OUT, VITE_GLOB_API_URL_PREFIX } = import.meta.env
const request = new Request({
  // baseURL: VITE_GLOB_API_URL_PREFIX,
  baseURL: '/api',
  // baseURL: 'http://47.95.215.156:3333',
  // timeout: VITE_SERVICE_TIME_OUT,
  timeout: 60000,
  interceptors: {
    requestInterceptor: (config: any) => {
      // 携带token的拦截
      const token = localStorage.getItem('access_token')
      // console.log(token)

      if (token) {
        config.headers!.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err: any) => {
      return err
    },
    responseInterceptor: (res: any) => {
      return res
    },
    responseInterceptorCatch: (err: any) => {
      return err
    }
  }
})

export { Request, request }
export default serviceGlobalFiles

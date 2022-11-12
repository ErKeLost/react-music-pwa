import Request from './request'

const request = new Request({
  // baseURL: import.meta.env.VITE_APP_BASE_URL,
  baseURL: 'https://music-erkelost.vercel.app/',
  timeout: 60000,
  interceptors: {
    requestInterceptor: (config: any) => {
      // 携带token的拦截
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
export default request

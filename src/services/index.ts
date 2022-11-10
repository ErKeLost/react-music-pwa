import Request from './request'

const request = new Request({
  baseURL: '/api',
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

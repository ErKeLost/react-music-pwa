import { request } from '@/services'

export function signin(data: any) {
  return request.post({
    url: '/auth/signin',
    data
  })
}

export function signup(data: any) {
  return request.post({
    url: '/auth/signup',
    data
  })
}

export function logout(data: any) {
  return request.post({
    url: '/auth/logout'
  })
}

export function refreshToken() {}

export function getUserInfo() {
  return request.get({
    url: '/user/getUserInfo'
  })
}

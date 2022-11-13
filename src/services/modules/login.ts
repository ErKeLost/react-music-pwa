import request from '@/services'

export function getQrCode() {
  return request.get({
    url: `/login/qr/key?t=${new Date().getTime()}`
  })
}

export function getQrBaseImg(params: any) {
  return request.get({
    url: `/login/qr/create?t=${new Date().getTime()}`,
    params
  })
}

export function getQrPoiling(params: any) {
  return request.get({
    url: `/login/qr/check?t=${new Date().getTime()}`,
    params
  })
}

export function getUserInfo() {
  return request.get({
    url: '/user/account'
  })
}

export function getUserData(params: any) {
  return request.get({
    url: '/user/detail',
    params
  })
}
// export function getUserData() {
//   return request.get({
//     url: '/user/subcount'
//   })
// }

import request from '@/services'

export function getQrCode() {
  return request.get({
    url: '/login/qr/key'
  })
}

export function getQrBaseImg(params: any) {
  return request.get({
    url: '/login/qr/create',
    params
  })
}

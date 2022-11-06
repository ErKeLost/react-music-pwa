import { request } from '@/services'

export function getReleaseDynamic(data: any) {
  return request.post({
    url: '/dynamic/release',
    data
  })
}

export function getAllDynamic() {
  return request.get({
    url: '/dynamic/getDynamic'
  })
}

import { request } from '~/services/index'

export function getNewMv() {
  return request.get({
    url: '/mv/first'
  })
}

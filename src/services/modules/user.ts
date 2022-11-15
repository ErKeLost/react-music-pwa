import { request } from '@/services'
export function getUserFans(uid: number) {
  return request.get({
    url: '/user/followeds?limit=1000',
    params: {
      uid
    }
  })
}

export function getUserFollower(uid: number) {
  return request.get({
    url: '/user/follows',
    params: {
      uid
    }
  })
}

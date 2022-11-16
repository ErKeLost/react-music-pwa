import { request } from '~/services/index'

export function searchHot() {
  return request.get({
    url: '/search/hot/detail'
  })
}

export function searchHotSimple() {
  return request.get({
    url: '/search/hot'
  })
}

export function personalizedSong() {
  return request.get({
    url: '/personalized/newsong'
  })
}

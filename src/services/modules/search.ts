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
// 调用此接口 , 可获取默认搜索关键词

export function getDefaultSearch() {
  return request.get({
    url: '/search/default'
  })
}


// 搜索

export function getSearch() {
  return request.get({
    url: '/cloudsearch'
  })
}

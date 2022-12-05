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

// 说明 : 调用此接口 , 传入搜索关键词可以搜索该音乐 / 专辑 /
// 歌手 / 歌单 / 用户 , 关键词可以多个 , 以空格隔开 ,
// 如 " 周杰伦 搁浅 "( 不需要登录 ), 可通过 /song/url
//  接口传入歌曲 id 获取具体的播放链接

export function getSearchValue(code: string) {
  return request.get({
    url: `/cloudsearch?keywords=${code}`
  })
}

import request from '@/services'

export function getBanners() {
  return request.get({
    url: '/banner'
  })
}

export function getRecommendSongs() {
  return request.get({
    url: '/recommend/songs'
  })
}

// 可获得每日推荐歌单 ( 需要登录 )
export function getSongListDay() {
  return request.get({
    url: '/recommend/resource'
  })
}

// 推荐歌单分类
export function getRecommendSongsCategory() {
  return request.get({
    url: '/playlist/hot'
  })
}


// 调用此接口,可获取歌单分类,包含 category 信息
export function getHotCategory () {
  return request.get({
    url: '/playlist/hot'
  })
}


// 调用此接口 , 可获取网友精选碟歌单
export function getSongList () {
  
}

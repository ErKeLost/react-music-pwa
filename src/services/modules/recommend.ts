import request from "@/services";

export function getBanners () {
  return request.get({
    url: '/banner'
  })
}

export function getRecommendSongs () {
  return request.get({
    url: '/recommend/songs'
  })
}

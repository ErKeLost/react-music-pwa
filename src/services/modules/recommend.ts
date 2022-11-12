import request from "@/services";

export function getBanners () {
  return request.get({
    url: '/banner'
  })
}
